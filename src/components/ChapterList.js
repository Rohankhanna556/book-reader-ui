import React, { useEffect, useState } from "react";
import { getChapters } from "../services/bookService";
import { Link } from "react-router-dom";

function ChapterList({ bookId }) {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    getChapters(bookId).then(setChapters);
  }, [bookId]);

  return (
    <div>
      <h3>Chapters</h3>
      {chapters.map(ch => (
        <div key={ch.id}>
          <Link to={`/chapters/${ch.id}`}>{ch.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default ChapterList;
