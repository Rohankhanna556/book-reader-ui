import { bookApi, chapterApi, pageApi } from "./api";

// Books
export const getBooks = () => bookApi.get("").then(res => res.data);
export const getBook = id => bookApi.get(`/${id}`).then(res => res.data);

// Ratings & Comments
export const addBookComment = (bookId, comment) =>
  bookApi.post(`/${bookId}/comments`, comment).then(res => res.data);
export const getBookComments = bookId =>
  bookApi.get(`/${bookId}/comments`).then(res => res.data);
export const addRating = (bookId, rating) =>
  bookApi.post(`/${bookId}/ratings`, rating).then(res => res.data);
export const getRatings = bookId =>
  bookApi.get(`/${bookId}/ratings`).then(res => res.data);

// Favorites
export const addFavorite = bookId =>
  bookApi.post(`/${bookId}/favorites`).then(res => res.data);
export const removeFavorite = bookId =>
  bookApi.delete(`/${bookId}/favorites`).then(res => res.data);
export const getFavorites = bookId =>
  bookApi.get(`/${bookId}/favorites`).then(res => res.data);

// Admin book actions
export const createBook = book =>
  bookApi.post("", book).then(res => res.data);
export const updateBook = (id, book) =>
  bookApi.put(`/${id}`, book).then(res => res.data);
export const deleteBook = id =>
  bookApi.delete(`/${id}`).then(res => res.data);

// Chapters
export const getChapters = bookId =>
  chapterApi.get("", { params: { bookId } }).then(res => res.data);
export const getChapter = id =>
  chapterApi.get(`/${id}`).then(res => res.data);
export const createChapter = chapter =>
  chapterApi.post("", chapter).then(res => res.data);
export const updateChapter = (id, chapter) =>
  chapterApi.put(`/${id}`, chapter).then(res => res.data);
export const deleteChapter = id =>
  chapterApi.delete(`/${id}`).then(res => res.data);

// Chapter comments
export const addChapterComment = (chapterId, comment) =>
  chapterApi.post(`/${chapterId}/comments`, comment).then(res => res.data);
export const getChapterComments = chapterId =>
  chapterApi.get(`/${chapterId}/comments`).then(res => res.data);

// Pages
export const getPages = chapterId =>
  pageApi.get("", { params: { chapterId } }).then(res => res.data);
export const getPage = id =>
  pageApi.get(`/${id}`).then(res => res.data);
export const createPage = page =>
  pageApi.post("", page).then(res => res.data);
export const updatePage = (id, page) =>
  pageApi.put(`/${id}`, page).then(res => res.data);
export const deletePage = id =>
  pageApi.delete(`/${id}`).then(res => res.data);
