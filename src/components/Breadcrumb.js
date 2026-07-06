// Breadcrumb.js
import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ bookTitle, chapterTitle }) {
  return (
    <div className="breadcrumb">
      <Link to="/">Home</Link> / <span>{bookTitle}</span>
      {chapterTitle && <> / <span>{chapterTitle}</span></>}
    </div>
  );
}

export default Breadcrumb;
