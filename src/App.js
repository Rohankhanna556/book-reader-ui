import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import BookList from "./components/BookList";
import BookDetail from "./components/BookDetail";
import ChapterReader from "./components/ChapterReader";
import BookManagement from "./components/BookManagement";
import ChapterManagement from "./components/ChapterManagement";
import PageManagement from "./components/PageManagement";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/chapters/:chapterId" element={<ChapterReader />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<BookManagement />} />
        <Route path="/book/:bookId" element={<ChapterManagement />} />
        <Route path="/book/:bookId/chapter/:chapterId" element={<PageManagement />} />
      </Routes>
    </Router>
  );
}

export default App;
