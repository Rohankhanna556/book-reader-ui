import React, { useEffect, useState } from "react";
import { getChapter, getPages } from "../services/bookService";
import Breadcrumb from "./Breadcrumb";

function ChapterReader({ bookId, chapterId, onBack }) {
  const [chapter, setChapter] = useState(null);
  const [pages, setPages] = useState([]);

  useEffect(() => {
    getChapter(chapterId).then(setChapter);
    getPages(chapterId).then(setPages);
    window.scrollTo(0, 0);
  }, [chapterId]);

  if (!chapter) return <div>Loading...</div>;

  return (
    <div className="reader">
      <Breadcrumb bookTitle={chapter.title} chapterTitle={chapter.title} />
      <button onClick={onBack} className="back-btn">⬅ Back</button>

      {pages.map((page, index) => (
        <img
          key={page.pageId}
          src={page.imageUrl}
          alt={`Page ${index + 1}`}
          className={`page ${page.orientation}`}
        />
      ))}

      <button onClick={onBack} className="back-btn">⬅ Back to Chapters</button>
    </div>
  );
}

export default ChapterReader;
