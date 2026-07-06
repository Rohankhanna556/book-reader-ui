import React, { useState } from "react";

function Reviews({ bookId }) {
  const [reviews, setReviews] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    setReviews([...reviews, { id: Date.now(), user: "Guest", text }]);
    setText("");
  };

  return (
    <div className="reviews">
      <h3>Reviews</h3>
      {reviews.map(r => (
        <div key={r.id} className="review">
          <strong>{r.user}</strong>: {r.text}
        </div>
      ))}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a review..."
      />
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
}

export default Reviews;
