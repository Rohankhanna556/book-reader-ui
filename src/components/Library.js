import React from "react";

function Library({ favorites, onSelect }) {
  return (
    <div className="library">
      <h2>My Library</h2>
      {favorites.length === 0 ? (
        <p>No favorites yet. Add some books!</p>
      ) : (
        <div className="book-list">
          {favorites.map(book => (
            <div key={book.bookId} className="book-card" onClick={() => onSelect(book.bookId)}>
              <h3>{book.title}</h3>
              <small>{book.visibility}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Library;
