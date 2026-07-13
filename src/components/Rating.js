import React, { useEffect, useState } from "react";
import { Rating as MuiRating } from "@mui/material";
import { addRating, getRatings } from "../services/bookService";
import { getProfile } from "../services/api";

function Rating({ bookId }) {
  const [value, setValue] = useState(0);
  const [user, setUser] = useState(null);

  useEffect(() => {
    getProfile().then(setUser).catch(() => setUser(null));
    getRatings(bookId).then(ratings => {
      if (ratings.length > 0) {
        const avg = ratings.reduce((sum, r) => sum + r.score, 0) / ratings.length;
        setValue(avg);
      }
    });
  }, [bookId]);

  const handleChange = (_, newValue) => {
    if (!user) {
      alert("Please log in to rate books.");
      return;
    }
    addRating(bookId, { score: newValue }).then(() => setValue(newValue));
  };

  return (
    <MuiRating
      name={`book-rating-${bookId}`}
      value={value}
      onChange={handleChange}
      disabled={!user}
    />
  );
}

export default Rating;
