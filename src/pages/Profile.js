import React, { useEffect, useState } from "react";
import { getProfile } from "../services/api";
import { getBooks, createBook, createChapter, createPage } from "../services/bookService";

function Profile() {
  const [user, setUser] = useState(null);
  const [myBooks, setMyBooks] = useState([]);

  // Fetch profile once
  useEffect(() => {
    getProfile()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  // Fetch books owned by the user once profile is loaded
  useEffect(() => {
    if (user) {
      getBooks().then(allBooks => {
        const owned = allBooks.filter(b => b.owner === user.username);
        setMyBooks(owned);
      });
    }
  }, [user]);

  if (!user) return <div>Loading profile...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Profile</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>

      <h3>My Books</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {myBooks.map(book => (
          <div key={book.bookId} style={{ width: "200px", textAlign: "center" }}>
            <img
              src={book.coverLink}
              alt={book.title}
              style={{ width: "100%", height: "auto", borderRadius: "8px" }}
            />
            <h4>{book.title}</h4>
          </div>
        ))}
      </div>

      {user.role === "ADMIN" && (
        <div>
          <h3>Book Management</h3>
          <button onClick={() => createBook({ title: "New Book" })}>
            Add Book
          </button>
          {/* For chapters and pages, you need to pass a bookId or chapterId */}
          <button onClick={() => createChapter({ bookId: myBooks[0]?.bookId, title: "New Chapter" })}>
            Add Chapter
          </button>
          <button onClick={() => createPage({ chapterId: 1, imageUrl: "page.png" })}>
            Add Page
          </button>
        </div>
      )}
    </div>
  );
}

export default Profile;
