import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBook, getChapters } from "../services/bookService";
import ChapterList from "./ChapterList";
import ChapterReader from "./ChapterReader";

function BookDetail() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);

  useEffect(() => {
    getBook(bookId).then(setBook);
    getChapters(bookId).then(setChapters);
  }, [bookId]);

  if (!book) return <div>Loading...</div>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p>Visibility: {book.visibility}</p>
      <p>Views: {book.views}</p>
      <p>Popularity: {book.popularity}</p>

      {selectedChapter ? (
        <ChapterReader
          bookId={bookId}
          chapterId={selectedChapter}
          onBack={() => setSelectedChapter(null)}
        />
      ) : (
        <ChapterList
          chapters={chapters}
          onSelect={(chapterId) => setSelectedChapter(chapterId)}
        />
      )}
    </div>
  );
}

export default BookDetail;
