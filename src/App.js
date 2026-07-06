// App.js
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import BookDetail from "./components/BookDetail";

function App() {
  return (
    <Router>
      <header style={{ background: "#3f51b5", padding: "10px", color: "white" }}>
        <h1 style={{ cursor: "pointer" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>📚 Book Reader</Link>
        </h1>
        <nav>
          <Link to="/" style={{ margin: "0 10px", color: "white" }}>Home</Link>
          <Link to="/profile" style={{ margin: "0 10px", color: "white" }}>Profile</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/books/:bookId" element={<BookDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
