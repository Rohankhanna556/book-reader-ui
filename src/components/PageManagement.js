import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPages, deletePage, createPage } from "../services/bookService";
import { Paper, Typography, List, ListItem, ListItemText, IconButton, TextField, Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function PageManagement() {
  const { bookId, chapterId } = useParams();
  const [pages, setPages] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    getPages(chapterId).then(setPages);
  }, [chapterId]);

  const handleAdd = () => {
    if (!imageUrl) return;
    createPage({ chapterId, imageUrl, sortOrder: sortOrder || 1 }).then(() => {
      setImageUrl("");
      setSortOrder("");
      getPages(chapterId).then(setPages);
    });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5">Pages in Chapter {chapterId}</Typography>
      <List>
        {pages.map(pg => (
          <ListItem key={pg.id}>
            <ListItemText primary={`Page ${pg.sortOrder}`} secondary={pg.imageUrl} />
            <IconButton onClick={() => deletePage(pg.id).then(() => getPages(chapterId).then(setPages))}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <TextField
        label="Page Image URL"
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
        sx={{ mr: 2 }}
      />
      <TextField
        label="Sort Order"
        type="number"
        value={sortOrder}
        onChange={e => setSortOrder(e.target.value)}
        sx={{ mr: 2 }}
      />
      <Button variant="contained" color="success" onClick={handleAdd}>Add Page</Button>
    </Paper>
  );
}

export default PageManagement;
