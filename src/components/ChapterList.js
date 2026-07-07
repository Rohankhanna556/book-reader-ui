import React from "react";
import { List, ListItemButton, ListItemText } from "@mui/material";

function ChapterList({ chapters, onSelect }) {
  return (
    <div className="chapter-list">
      <h2>Chapters</h2>
      <List>
        {chapters.map((chapter, index) => (
          <ListItemButton
            key={chapter.chapterId}
            onClick={() => onSelect(chapter.chapterId)}
          >
            <ListItemText
              primary={`Chapter ${index + 1}: ${chapter.title}`}
              secondary={`Created: ${chapter.createdAt}`}
            />
          </ListItemButton>
        ))}
      </List>
    </div>
  );
}

export default ChapterList;
