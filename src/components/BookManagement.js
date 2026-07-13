import React, { useEffect, useState } from "react";
import { getBooks, deleteBook, createBook } from "../services/bookService";
import { useNavigate } from "react-router-dom";
import {
  Paper, Typography, List, ListItem, ListItemText,
  IconButton, Button, TextField, MenuItem, Divider
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function BookManagement() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState("");
  const [visibility, setVisibility] = useState("PUBLIC");
  const [coverLink, setCoverLink] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getBooks().then(setBooks);
  }, []);

  const handleAddBook = () => {
    if (!title) return alert("Title is required");
    createBook({ title, visibility, views: 0, popularity: 0, coverLink })
      .then(() => {
        setTitle("");
        setCoverLink("");
        setVisibility("PUBLIC");
        getBooks().then(setBooks);
      });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5">Books</Typography>
      <Divider sx={{ mb: 2 }} />

      {/* Book list */}
      <List>
        {books.map(b => (
          <ListItem
            key={b.bookId}
            button
            onClick={() => navigate(`/book/${b.bookId}`)}
          >
            <ListItemText primary={b.title} />
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                deleteBook(b.bookId).then(() => getBooks().then(setBooks));
              }}
            >
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>

      {/* Add Book Form */}
      <Typography variant="h6" sx={{ mt: 3 }}>Add Book</Typography>
      <TextField
        label="Title"
        fullWidth
        value={title}
        onChange={e => setTitle(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        select
        label="Visibility"
        fullWidth
        value={visibility}
        onChange={e => setVisibility(e.target.value)}
        sx={{ mb: 2 }}
      >
        <MenuItem value="PUBLIC">Public</MenuItem>
        <MenuItem value="PRIVATE">Private</MenuItem>
      </TextField>
      <TextField
        label="Cover Link"
        fullWidth
        value={coverLink}
        onChange={e => setCoverLink(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" color="primary" onClick={handleAddBook}>
        Save Book
      </Button>
    </Paper>
  );
}

export default BookManagement;
