import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getBook, getChapters } from "../services/bookService";
import FavoriteButton from "./FavoriteButton";
import Rating from "./Rating";

function BookDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    if (id) {
      getBook(id).then(setBook).catch(err => console.error("Error loading book", err));
      getChapters(id).then(setChapters).catch(err => console.error("Error loading chapters", err));
    }
  }, [id]);

  if (!book) return <div>Loading book...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{book.title}</h2>
      <img src={book.coverLink} alt={book.title} style={{ width: "300px", borderRadius: "8px" }} />
      <p>Visibility: {book.visibility}</p>
      <p>Views: {book.views}</p>
      <p>Popularity: {book.popularity}</p>
      <p>Created At: {book.createdAt}</p>

      <FavoriteButton bookId={book.bookId} />
      <Rating bookId={book.bookId} />

      <h3>Chapters</h3>
      {chapters.length === 0 ? (
        <p>No chapters available</p>
      ) : (
        <ul>
          {chapters.map(ch => (
            <li key={ch.chapterId}>
              <Link to={`/chapters/${ch.chapterId}`}>{ch.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookDetail;
