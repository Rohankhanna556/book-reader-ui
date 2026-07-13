import React, { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addFavorite, removeFavorite, getFavorites } from "../services/bookService";
import { getProfile } from "../services/api";

function FavoriteButton({ bookId }) {
  const [favorited, setFavorited] = useState(false);
  const [user, setUser] = useState(null);

  // Fetch profile once when component mounts
  useEffect(() => {
    getProfile()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  // Fetch favorites when bookId or user changes
  useEffect(() => {
    if (user) {
      getFavorites(bookId).then(favs => {
        if (favs.includes(user.username)) {
          setFavorited(true);
        } else {
          setFavorited(false);
        }
      });
    }
  }, [bookId, user]);

  const handleClick = () => {
    if (!user) {
      alert("Please log in to favorite books.");
      return;
    }
    if (favorited) {
      removeFavorite(bookId).then(() => setFavorited(false));
    } else {
      addFavorite(bookId).then(() => setFavorited(true));
    }
  };

  return (
    <IconButton onClick={handleClick} disabled={!user}>
      <FavoriteIcon color={favorited ? "error" : "disabled"} />
    </IconButton>
  );
}

export default FavoriteButton;
