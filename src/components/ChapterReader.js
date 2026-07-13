import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPages } from "../services/bookService";

function ChapterReader() {
  const { chapterId } = useParams();
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (chapterId) {
      getPages(chapterId)
        .then(setPages)
        .catch(err => console.error("Error loading pages", err));
    }
  }, [chapterId]);

  return (
    <div style={{ padding: "20px" }}>
      <h3>Chapter Pages</h3>
      {pages.length === 0 ? (
        <p>No pages available</p>
      ) : (
        pages.map(pg => (
          <img
            key={pg.id}
            src={pg.imageUrl}
            alt={`Page ${pg.id}`}
            style={{ width: "100%", marginBottom: "10px" }}
          />
        ))
      )}
    </div>
  );
}

export default ChapterReader;
