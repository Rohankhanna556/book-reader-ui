import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getChapters, deleteChapter, createChapter } from "../services/bookService";
import { Paper, Typography, List, ListItem, ListItemText, IconButton, TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function ChapterManagement() {
  const { bookId } = useParams();
  const [chapters, setChapters] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getChapters(bookId).then(setChapters);
  }, [bookId]);

  const handleAdd = () => {
    if (!newTitle) return;
    createChapter({ bookId, title: newTitle }).then(() => {
      setNewTitle("");
      getChapters(bookId).then(setChapters);
    });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5">Chapters in Book {bookId}</Typography>
      <List>
        {chapters.map(ch => (
          <ListItem
            key={ch.chapterId}
            button
            onClick={() => navigate(`/book/${bookId}/chapter/${ch.chapterId}`)}
          >
            <ListItemText primary={ch.title} />
            <IconButton onClick={() => deleteChapter(ch.chapterId).then(() => getChapters(bookId).then(setChapters))}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <TextField
        label="New Chapter Title"
        value={newTitle}
        onChange={e => setNewTitle(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button variant="contained" onClick={handleAdd}>Add Chapter</Button>
    </Paper>
  );
}

export default ChapterManagement;
