import React from "react";
import { books } from "../mock/data";
import { Card, CardContent, CardMedia, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";

function BookList() {
  return (
    <Grid container spacing={3} style={{ padding: "20px" }}>
      {books.map(book => (
        <Grid item xs={12} sm={6} md={4} key={book.bookId}>
          <Link to={`/books/${book.bookId}`} style={{ textDecoration: "none" }}>
            <Card>
              <CardMedia
                component="img"
                height="300"
                image={book.cover}
                alt={book.title}
              />
              <CardContent>
                <Typography variant="h6">{book.title}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {book.views} views • {book.visibility}
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default BookList;
