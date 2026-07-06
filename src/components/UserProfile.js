import React from "react";
import { userProfile } from "../mock/data";
import Library from "./Library";

function UserProfile({ onSelectBook }) {
  return (
    <div className="user-profile">
      <h1>{userProfile.username}'s Profile</h1>
      <p>Email: {userProfile.email}</p>
      <p>Joined: {new Date(userProfile.createdAt).toLocaleDateString()}</p>

      <Library favorites={userProfile.favorites} onSelect={onSelectBook} />

      <h2>Uploads</h2>
      <div className="uploads">
        {userProfile.uploads.map(book => (
          <div key={book.bookId} className="book-card" onClick={() => onSelectBook(book.bookId)}>
            <h3>{book.title}</h3>
            <small>{book.visibility}</small>
          </div>
        ))}
      </div>

      <h2>Reading History</h2>
      <ul>
        {userProfile.history.map(entry => (
          <li key={entry.bookId}>
            {entry.bookTitle} — Last read: {new Date(entry.lastRead).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserProfile;
