(() => {
  const data = document.getElementById('notes-data');
  if (!data) return;
  const notes = JSON.parse(data.textContent);
  const svg = document.getElementById('notes-graph');
  const rows = [...document.querySelectorAll('#notes-list li')];
  const ns = 'http://www.w3.org/2000/svg';
  const category = document.getElementById('notes-category');
  [...new Set(notes.map(note => note.category).filter(Boolean))].sort().forEach(name => {
    const option = document.createElement('option'); option.value = name; option.textContent = name; category.append(option);
  });
  const search = document.getElementById('notes-search');
  const initialParams = new URLSearchParams(window.location.search);
  const initialTopic = initialParams.get('topic');
  if ([...category.options].some(option => option.value === initialTopic)) category.value = initialTopic;
  search.value = initialParams.get('q') || '';
  function element(tag, attributes, text) {
    const node = document.createElementNS(ns, tag);
    Object.entries(attributes).forEach(([key, value]) => node.setAttribute(key, value));
    if (text) node.textContent = text;
    return node;
  }
  let viewport, positions, drag = null, suppressClick = false;
  let camera = { x: 0, y: 0, scale: 1 };
  function applyCamera() {
    if (viewport) viewport.setAttribute('transform', `translate(${camera.x} ${camera.y}) scale(${camera.scale})`);
  }
  function render(query = '') {
    const url = new URL(window.location.href);
    if (category.value) url.searchParams.set('topic', category.value); else url.searchParams.delete('topic');
    if (query) url.searchParams.set('q', query); else url.searchParams.delete('q');
    if (url.href !== window.location.href) window.history.replaceState(null, '', url);

    const visible = notes.filter(note => (!category.value || note.category === category.value) && `${note.title} ${note.category} ${note.tags.join(' ')}`.toLowerCase().includes(query));
    const urls = new Set(visible.map(note => note.url));
    rows.forEach(row => { row.hidden = !urls.has(row.dataset.url); });
    document.getElementById('notes-count').textContent = `${visible.length} of ${notes.length} notes`;
    document.getElementById('notes-current-topic').textContent = category.value ? category.value.split('/').slice(1).join(' / ') : 'All notes';
    document.getElementById('notes-empty').hidden = visible.length > 0;
    document.querySelectorAll('.notes-topic-button').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.category === category.value));
    });
    svg.replaceChildren();
    viewport = element('g', {}); svg.append(viewport);
    camera = { x: 0, y: 0, scale: 1 }; applyCamera();
    positions = new Map(visible.map((note, i) => {
      const angle = 2 * Math.PI * i / visible.length - Math.PI / 2;
      return [note.url, { x: 400 + (visible.length > 1 ? 290 * Math.cos(angle) : 0), y: 230 + (visible.length > 1 ? 170 * Math.sin(angle) : 0) }];
    }));
    const edges = new Set();
    // Relax the layout so connected notes cluster, rather than crowding a ring.
    for (let iteration = 0; iteration < 120; iteration++) {
      const points = [...positions.values()];
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const a = points[i], b = points[j], dx = a.x - b.x, dy = a.y - b.y;
          const distance = Math.max(4, Math.hypot(dx, dy));
          const force = Math.min(3, 150 / (distance * distance));
          a.x += dx / distance * force; a.y += dy / distance * force;
          b.x -= dx / distance * force; b.y -= dy / distance * force;
        }
      }
      visible.forEach(note => note.links.forEach(url => {
        if (!positions.has(url)) return;
        const a = positions.get(note.url), b = positions.get(url);
        const dx = b.x - a.x, dy = b.y - a.y;
        const pull = Math.max(0, Math.hypot(dx, dy) - 65) * .008;
        const distance = Math.max(1, Math.hypot(dx, dy));
        a.x += dx / distance * pull; a.y += dy / distance * pull;
        b.x -= dx / distance * pull; b.y -= dy / distance * pull;
      }));
      points.forEach(p => { p.x = Math.max(30, Math.min(770, p.x)); p.y = Math.max(25, Math.min(420, p.y)); });
    }
    visible.forEach(note => note.links.forEach(url => {
      if (!positions.has(url) || url === note.url) return;
      const key = [note.url, url].sort().join('|');
      if (edges.has(key)) return;
      edges.add(key);
      const a = positions.get(note.url), b = positions.get(url);
      viewport.append(element('line', { x1: a.x, y1: a.y, x2: b.x, y2: b.y, 'data-from': note.url, 'data-to': url }));
    }));
    visible.forEach(note => {
      const { x, y } = positions.get(note.url);
      const link = element('a', { href: note.url, 'aria-label': note.title, 'data-node': note.url });
      link.append(element('title', {}, note.title));
      link.append(element('circle', { cx: x, cy: y, r: 7 }));
      link.append(element('text', { x, y: y + 24, 'text-anchor': 'middle', class: visible.length > 35 ? 'graph-label-on-hover' : '' }, note.title.length > 28 ? `${note.title.slice(0, 25)}…` : note.title));
      viewport.append(link);
    });
    if (!visible.length) viewport.append(element('text', { x: 400, y: 230, 'text-anchor': 'middle' }, 'No matching notes'));
  }
  document.getElementById('notes-search').addEventListener('input', event => render(event.target.value.trim().toLowerCase()));
  category.addEventListener('change', () => render(document.getElementById('notes-search').value.trim().toLowerCase()));
  document.querySelectorAll('.notes-topic-button').forEach(button => {
    button.addEventListener('click', () => {
      category.value = button.dataset.category;
      render(document.getElementById('notes-search').value.trim().toLowerCase());
      document.querySelector('.notes-results').scrollTop = 0;
    });
  });
  function localPoint(event) {
    const point = svg.createSVGPoint(); point.x = event.clientX; point.y = event.clientY;
    return point.matrixTransform(svg.getScreenCTM().inverse());
  }
  function zoom(factor, anchor = { x: 400, y: 230 }) {
    const next = Math.max(.4, Math.min(6, camera.scale * factor));
    const ratio = next / camera.scale;
    camera.x = anchor.x - (anchor.x - camera.x) * ratio;
    camera.y = anchor.y - (anchor.y - camera.y) * ratio;
    camera.scale = next; applyCamera();
  }
  svg.addEventListener('wheel', event => {
    event.preventDefault(); zoom(Math.exp(-event.deltaY * .0015), localPoint(event));
  }, { passive: false });
  svg.addEventListener('pointerdown', event => {
    if (event.button !== 0) return;
    const link = event.target.closest('[data-node]');
    drag = { id: event.pointerId, link, start: localPoint(event), camera: { ...camera }, moved: false };
    svg.setPointerCapture(event.pointerId);
  });
  svg.addEventListener('pointermove', event => {
    if (!drag || drag.id !== event.pointerId) return;
    const point = localPoint(event), dx = point.x - drag.start.x, dy = point.y - drag.start.y;
    if (Math.hypot(dx, dy) > 4) drag.moved = true;
    if (!drag.moved) return;
    if (drag.link) {
      const position = positions.get(drag.link.dataset.node);
      position.x = (point.x - camera.x) / camera.scale;
      position.y = (point.y - camera.y) / camera.scale;
      const circle = drag.link.querySelector('circle'), label = drag.link.querySelector('text');
      circle.setAttribute('cx', position.x); circle.setAttribute('cy', position.y);
      label.setAttribute('x', position.x); label.setAttribute('y', position.y + 24);
      viewport.querySelectorAll('line').forEach(line => {
        const a = positions.get(line.dataset.from), b = positions.get(line.dataset.to);
        line.setAttribute('x1', a.x); line.setAttribute('y1', a.y);
        line.setAttribute('x2', b.x); line.setAttribute('y2', b.y);
      });
    } else {
      camera.x = drag.camera.x + dx; camera.y = drag.camera.y + dy; applyCamera();
    }
  });
  svg.addEventListener('pointerup', event => {
    if (!drag || drag.id !== event.pointerId) return;
    const link = drag.link, moved = drag.moved;
    drag = null; suppressClick = true;
    if (!moved && link) window.location.assign(link.getAttribute('href'));
    setTimeout(() => { suppressClick = false; }, 0);
  });
  svg.addEventListener('pointercancel', () => { drag = null; });
  svg.addEventListener('click', event => { if (suppressClick) event.preventDefault(); });
  document.getElementById('graph-zoom-in').addEventListener('click', () => zoom(1.25));
  document.getElementById('graph-zoom-out').addEventListener('click', () => zoom(.8));
  document.getElementById('graph-reset').addEventListener('click', () => render(document.getElementById('notes-search').value.trim().toLowerCase()));
  render(search.value.trim().toLowerCase());
})();
