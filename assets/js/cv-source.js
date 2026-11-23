(() => {
  const container = document.getElementById("cv-content");
  const source = container.dataset.source;

  async function read(path) {
    const response = await fetch(new URL(path, source), { cache: "no-cache" });
    if (!response.ok) throw new Error(`Could not load ${path}`);
    return (await response.text()).replace(/(?<!\\)%[^\n]*/g, "");
  }

  // Read nested brace groups used by Awesome-CV commands and BibTeX fields.
  function groups(text, offset, count) {
    const values = [];
    for (let index = 0; index < count; index++) {
      while (/\s/.test(text[offset] || "")) offset++;
      if (text[offset++] !== "{") throw new Error("Missing LaTeX argument");
      const start = offset;
      let depth = 1;
      while (offset < text.length && depth) {
        const character = text[offset++];
        if (character === "\\") offset++;
        if (character === "{") depth++;
        if (character === "}") depth--;
      }
      if (depth) throw new Error("Unclosed LaTeX argument");
      values.push(text.slice(start, offset - 1));
    }
    return { values, end: offset };
  }

  function element(tag, parent, className) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    parent.append(node);
    return node;
  }

  function inline(parent, text) {
    const commands = /\\(textbf|emph|textit|href|emojilink)\b/g;
    let start = 0;
    function appendLiteral(value) {
      parent.append(value.replace(/\\([%&#_$])/g, "$1").replace(/[{}$]/g, "").replace(/~/g, " ").replace(/\s+/g, " "));
    }
    for (let match; (match = commands.exec(text)); ) {
      appendLiteral(text.slice(start, match.index));
      const name = match[1];
      const link = name === "href" || name === "emojilink";
      const { values, end } = groups(text, commands.lastIndex, link ? 2 : 1);
      if (link) {
        const url = values[0].trim();
        if (/^https?:\/\//i.test(url)) {
          const anchor = element("a", parent);
          anchor.href = url;
          inline(anchor, values[1] || (name === "emojilink" ? new URL(url).pathname.split("/").filter(Boolean).pop() || url : url));
        } else {
          inline(parent, values[1]);
        }
      } else {
        inline(element(name === "textbf" ? "strong" : "em", parent), values[0]);
      }
      start = commands.lastIndex = end;
    }
    appendLiteral(text.slice(start));
  }

  function paragraph(parent, text) {
    const value = text.replace(/\\vspace\{[^}]*\}/g, "").trim();
    if (value) inline(element("p", parent), value);
  }

  function description(parent, text) {
    const lists = /\\begin\{(cvitems|itemize)\}([\s\S]*?)\\end\{\1\}/g;
    let start = 0;
    for (const match of text.matchAll(lists)) {
      paragraph(parent, text.slice(start, match.index));
      const list = element("ul", parent);
      for (const item of match[2].split(/\\item\b/).slice(1)) {
        inline(element("li", list), item.trim());
      }
      start = match.index + match[0].length;
    }
    paragraph(parent, text.slice(start));
  }

  function publications(text) {
    const entries = [];
    for (const match of text.matchAll(/@(article|inproceedings)\s*(?=\{)/gi)) {
      const [entry] = groups(text, match.index + match[0].length, 1).values;
      const fields = {};
      for (const field of entry.matchAll(/(?:^|,)\s*([\w+]+)\s*=\s*(?=\{)/g)) {
        fields[field[1].toLowerCase()] = groups(entry, field.index + field[0].length, 1).values[0];
      }
      entries.push({ ...fields, type: match[1].toLowerCase() });
    }
    return entries;
  }

  function renderSection(parent, text, bibliography, isSoftwareSection) {
    const commands = /\\(cvsection|cvsubsection|cventry|cvhonor|cvskill|printbibliography)\b|\\(begin\{cvparagraph\})/g;
    let section;
    for (let match; (match = commands.exec(text)); ) {
      const name = match[1] || match[2];
      if (name === "printbibliography") {
        const type = text.slice(commands.lastIndex).match(/^\s*\[[^\]]*\btype\s*=\s*(\w+)/)?.[1];
        const list = element("ol", section, "markdown-cv-publications");
        for (const entry of bibliography.filter((publication) => !type || publication.type === type)) {
          const item = element("li", list, "mb-2");
          const title = element(entry.doi ? "a" : "span", item, "markdown-cv-publication-title");
          if (entry.doi) title.href = `https://doi.org/${encodeURI(entry.doi)}`;
          inline(title, entry.title);
          if (entry.author) {
            const highlighted = new Set([...((entry["author+an"] || "").matchAll(/(\d+)\s*=\s*highlight\b/g))].map((match) => Number(match[1])));
            item.append(" ");
            entry.author.split(/\s+and\s+/).forEach((author, index) => {
              if (index) item.append("; ");
              inline(highlighted.has(index + 1) ? element("strong", item) : item, author);
            });
            item.append(".");
          }
          inline(item, [entry.journal || entry.booktitle, entry.year, entry.note].filter(Boolean).map((value) => ` ${value}.`).join(""));
        }
        continue;
      }
      if (name === "begin{cvparagraph}") {
        const end = text.indexOf("\\end{cvparagraph}", commands.lastIndex);
        if (end === -1) throw new Error("Unclosed CV paragraph");
        description(section, text.slice(commands.lastIndex, end));
        commands.lastIndex = end;
        continue;
      }

      const counts = { cvsection: 1, cvsubsection: 1, cventry: 5, cvhonor: 4, cvskill: 2 };
      const { values, end } = groups(text, commands.lastIndex, counts[name]);
      commands.lastIndex = end;
      if (name === "cvsection") {
        const row = element("section", parent, "markdown-cv-section");
        inline(element("h2", row, "markdown-cv-section-title"), values[0]);
        section = element("div", row, "markdown-cv-section-body");
      } else if (name === "cvsubsection") {
        inline(element("h3", section, "markdown-cv-subtitle"), values[0]);
      } else if (name === "cvskill") {
        const skill = element("p", section, "mb-2");
        inline(element("strong", skill, "markdown-cv-skill-title"), values[0]);
        inline(skill, ` — ${values[1]}`);
      } else {
        const [title, institution, location, date, details] = values;
        const entry = element("div", section, "markdown-cv-entry");
        const header = element("p", entry, "markdown-cv-entry-header");
        const heading = element("strong", header, "markdown-cv-entry-title");
        if (isSoftwareSection) {
          const projectLink = date.match(/^\s*\\emojilink\s*\{/);
          const url = projectLink && groups(date, projectLink[0].length - 1, 1).values[0].trim();
          if (url && /^https?:\/\//i.test(url)) {
            const link = element("a", heading);
            link.href = url;
            inline(link, institution);
          } else {
            inline(heading, institution);
          }
          if (title) inline(element("p", entry, "markdown-cv-affiliation markdown-cv-project-summary"), title);
        } else {
          inline(heading, title);
          if (date) inline(element("span", header, "markdown-cv-date"), date);
          const metadata = [institution, location].filter(Boolean).join(", ");
          if (metadata) inline(element("p", entry, "markdown-cv-affiliation"), metadata);
        }
        if (details) description(entry, details);
      }
    }
  }

  async function load() {
    const documentSource = await read("cv.tex");
    const inputs = [...documentSource.matchAll(/\\input\{(contentCV\/[\w-]+\.tex)\}/g)].map((match) => match[1]);
    const first = inputs.indexOf("contentCV/experience.tex");
    if (first < 0) throw new Error("Research Experience source not found");
    const sectionPaths = inputs.slice(first);
    const [bib, ...sections] = await Promise.all([
      read("publications.bib"),
      ...sectionPaths.map(read),
    ]);
    const output = document.createDocumentFragment();
    const bibliography = publications(bib);
    sections.forEach((section, index) => renderSection(output, section, bibliography, sectionPaths[index] === "contentCV/opensource.tex"));
    if (!output.childElementCount) throw new Error("No CV sections found");
    container.replaceChildren(output);
  }

  load()
    .catch(() => {
      container.querySelector('[role="status"]').textContent = "The CV could not load. Please try refreshing the page.";
    })
    .finally(() => container.removeAttribute("aria-busy"));
})();
