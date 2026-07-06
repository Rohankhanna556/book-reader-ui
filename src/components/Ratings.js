import React, { useState } from "react";

function Ratings({ bookId, onRate }) {
  const [rating, setRating] = useState(0);

  const handleRate = (value) => {
    setRating(value);
    if (onRate) onRate(bookId, value);
  };

  return (
    <div className="ratings">
      <h3>Rate this Book</h3>
      {[1, 2, 3, 4, 5].map(star => (
        <span
          key={star}
          className={rating >= star ? "star active" : "star"}
          onClick={() => handleRate(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Ratings;
