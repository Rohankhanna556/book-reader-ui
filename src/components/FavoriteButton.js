import React, { useState } from "react";

function FavoriteButton({ bookId, onToggle }) {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    const newState = !isFavorite;
    setIsFavorite(newState);
    onToggle(bookId, newState);
  };

  return (
    <button className={`favorite-btn ${isFavorite ? "active" : ""}`} onClick={handleClick}>
      {isFavorite ? "❤️ Favorited" : "🤍 Add to Favorites"}
    </button>
  );
}

export default FavoriteButton;
