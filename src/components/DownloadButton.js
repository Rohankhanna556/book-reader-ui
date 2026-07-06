import React from "react";

function DownloadButton({ pdfUrl }) {
  return (
    <button className="download-btn" onClick={() => window.open(pdfUrl, "_blank")}>
      ⬇️ Download PDF
    </button>
  );
}

export default DownloadButton;
