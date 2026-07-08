import React, { useEffect, useState } from "react";
import { getBooks } from "../services/bookService";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Capture token from URL
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
      navigate("/home"); // clean URL (remove ?token=...)
    }

    // Fetch books
    getBooks()
      .then(setBooks)
      .catch(err => console.error("Failed to load books", err));
  }, [navigate]);

  return (
    <div className="book-list">
      <h2>Books</h2>
      {books.length === 0 ? (
        <p>No books found or loading...</p>
      ) : (
        books.map(book => (
          <Link key={book.bookId} to={`/books/${book.bookId}`}>
            <div className="book-card">
              <img src={book.coverLink} alt={book.title} className="book-cover" />
              <h3>{book.title}</h3>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Home;
