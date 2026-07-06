import React, { useState } from "react";

function Comments({ bookId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    setComments([...comments, { id: Date.now(), user: "Guest", text }]);
    setText("");
  };

  return (
    <div className="comments">
      <h3>Community Comments</h3>
      {comments.map(c => (
        <div key={c.id} className="comment">
          <strong>{c.user}</strong>: {c.text}
        </div>
      ))}
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a comment..."
      />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
}

export default Comments;
