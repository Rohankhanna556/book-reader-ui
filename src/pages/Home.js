import React, { useState } from "react";
import BookList from "../components/BookList";
import BookDetail from "../components/BookDetail";

function Home({ onSelectBook }) {
  const [selectedBook, setSelectedBook] = useState(null);

  return (
    <div className="home">
      {!selectedBook ? (
        <BookList onSelect={setSelectedBook} />
      ) : (
        <BookDetail bookId={selectedBook} onFavoriteToggle={() => {}} />
      )}
    </div>
  );
}

export default Home;
