import { bookApi } from "./api";

// Books
export const getBooks = async () => {
  const res = await bookApi.get("/book/api/books");
  return res.data;
};

export const getBook = async (id) => {
  const res = await bookApi.get(`/book/api/books/${id}`);
  return res.data;
};

// Chapters
export const getChapters = async (bookId) => {
  const res = await bookApi.get(`/book/api/chapters?bookId=${bookId}`);
  return res.data;
};

export const getChapter = async (chapterId) => {
  const res = await bookApi.get(`/book/api/chapters/${chapterId}`);
  return res.data;
};

// Pages
export const getPages = async (chapterId) => {
  const res = await bookApi.get(`/book/api/pages?chapterId=${chapterId}`);
  return res.data;
};

export const getPage = async (pageId) => {
  const res = await bookApi.get(`/book/api/pages/${pageId}`);
  return res.data;
};
