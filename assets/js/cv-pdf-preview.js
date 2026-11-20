const preview = document.getElementById("cv-pdf-preview");

if (preview && navigator.pdfViewerEnabled !== false) {
  fetch(preview.dataset.pdfUrl, { cache: "no-cache" })
    .then((response) => {
      if (!response.ok) throw new Error("CV PDF request failed");
      return response.arrayBuffer();
    })
    .then((pdf) => {
      const frame = document.createElement("iframe");
      frame.title = "CV PDF preview";
      frame.className = "w-100 border-0";
      frame.style.height = "80vh";
      // GitHub serves raw PDFs as application/octet-stream.
      frame.src = URL.createObjectURL(new Blob([pdf], { type: "application/pdf" }));
      preview.append(frame);
    })
    .catch(() => {
      preview.remove();
    });
}
