import React from "react";

function PdfViewer({ pdfUrl }) {
  return (
    <div className="pdf-viewer">
      <iframe src={pdfUrl} width="80%" height="600px" title="PDF Viewer"></iframe>
    </div>
  );
}

export default PdfViewer;
