import React from "react";
import BookList from "../components/BookList";

function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Book Reader</h2>
      <BookList />
    </div>
  );
}

export default Home;
