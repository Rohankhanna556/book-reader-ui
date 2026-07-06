import React, { useEffect } from "react";
import { books } from "../mock/data";
import Breadcrumb from "./Breadcrumb";

function ChapterReader({ bookId, chapterId, onBack }) {
  const book = books.find(b => b.bookId === bookId);
  const chapter = book.chapters.find(c => c.chapterId === chapterId);

  useEffect(() => {
    window.scrollTo(0, 0); // always start at top
  }, [chapterId]);

  const handleGoUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="reader">
<Breadcrumb bookTitle={book.title} chapterTitle={chapter.title} />
      <button onClick={onBack} className="back-btn">⬅ Back</button>

      {chapter.pages.map((page, index) => (
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
