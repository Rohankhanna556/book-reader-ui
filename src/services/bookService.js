import { bookApi } from "./api";

// Books
export const getBooks = async () => {
  const res = await bookApi.get("/books");
  return res.data;
};

export const getBook = async (id) => {
  const res = await bookApi.get(`/books/${id}`);
  return res.data;
};

// Chapters
export const getChapters = async (bookId) => {
  const res = await bookApi.get(`/chapters?bookId=${bookId}`);
  return res.data;
};

export const getChapter = async (chapterId) => {
  const res = await bookApi.get(`/chapters/${chapterId}`);
  return res.data;
};

// Pages
export const getPages = async (chapterId) => {
  const res = await bookApi.get(`/pages?chapterId=${chapterId}`);
  return res.data;
};

export const getPage = async (pageId) => {
  const res = await bookApi.get(`/pages/${pageId}`);
  return res.data;
};
