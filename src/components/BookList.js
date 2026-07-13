import React, { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";
import { Link } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(setBooks).catch(err => console.error("Error loading books", err));
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {books.map(book => (
        <div key={book.bookId} style={{ width: "200px", textAlign: "center" }}>
          <Link to={`/books/${book.bookId}`}>
            <img
              src={book.coverLink}
              alt={book.title}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <h4>{book.title}</h4>
          </Link>
          <p>Views: {book.views}</p>
          <p>Popularity: {book.popularity}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
