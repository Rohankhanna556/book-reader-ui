import React, { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";
import { Link } from "react-router-dom";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  return (
    <div className="book-list">
      <h2>Books</h2>
      {books.map(book => (
        <Link key={book.bookId} to={`/books/${book.bookId}`}>
          <div className="book-card">
            <img src={book.coverLink} alt={book.title} className="book-cover" />
            <h3>{book.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default BookList;
