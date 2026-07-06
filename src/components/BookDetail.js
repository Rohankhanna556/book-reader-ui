// BookDetail.js
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { books } from "../mock/data";
import ChapterList from "./ChapterList";
import ChapterReader from "./ChapterReader";
import FavoriteButton from "./FavoriteButton";
import Comments from "./Comments";
import Reviews from "./Reviews";
import Ratings from "./Ratings";

function BookDetail() {
  const { bookId } = useParams();
  const book = books.find(b => b.bookId === bookId);
  const [selectedChapter, setSelectedChapter] = useState(null);

  if (!book) return <p>Book not found</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{book.title}</h1>
      <img src={book.cover} alt={book.title} style={{ width: "200px", borderRadius: "8px" }} />
      <p>Visibility: {book.visibility}</p>
      <FavoriteButton bookId={bookId} onToggle={() => {}} />
{!selectedChapter ? (
  <ChapterList chapters={book.chapters} onSelect={setSelectedChapter} />
) : (
  <ChapterReader
    bookId={bookId}
    chapterId={selectedChapter}
    onBack={() => setSelectedChapter(null)} // go back to chapter list
  />
)}

      <Ratings bookId={bookId} onRate={() => {}} />
      <Reviews bookId={bookId} />
      <Comments bookId={bookId} />
    </div>
  );
}

export default BookDetail;
