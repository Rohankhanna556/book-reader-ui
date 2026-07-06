export const books = [
  {
    bookId: "1",
    title: "Manga Adventures",
    visibility: "public",
    views: 1200,
    popularity: 95,
    createdAt: "2026-07-01",
    cover: "https://picsum.photos/200/300?random=1",
    chapters: [
      {
        chapterId: "c1",
        title: "Chapter One",
        pages: [
          { pageId: "p1", imageUrl: "https://picsum.photos/600/800?random=11", orientation: "portrait" },
          { pageId: "p2", imageUrl: "https://picsum.photos/600/800?random=12", orientation: "portrait" },
          { pageId: "p3", imageUrl: "https://picsum.photos/600/800?random=13", orientation: "portrait" },
          { pageId: "p4", imageUrl: "https://picsum.photos/600/800?random=14", orientation: "portrait" },
          { pageId: "p5", imageUrl: "https://picsum.photos/600/800?random=15", orientation: "portrait" }
        ],
        pdfUrl: "https://example.com/sample.pdf"
      }
    ]
  },
  {
    bookId: "2",
    title: "Fantasy World",
    visibility: "private",
    views: 800,
    popularity: 80,
    createdAt: "2026-07-02",
    cover: "https://picsum.photos/200/300?random=2",
    chapters: [
      {
        chapterId: "c1",
        title: "Chapter One",
        pages: [
          { pageId: "p1", imageUrl: "https://picsum.photos/600/800?random=21", orientation: "portrait" },
          { pageId: "p2", imageUrl: "https://picsum.photos/600/800?random=22", orientation: "portrait" },
          { pageId: "p3", imageUrl: "https://picsum.photos/600/800?random=23", orientation: "portrait" },
          { pageId: "p4", imageUrl: "https://picsum.photos/600/800?random=24", orientation: "portrait" },
          { pageId: "p5", imageUrl: "https://picsum.photos/600/800?random=25", orientation: "portrait" }
        ],
        pdfUrl: "https://example.com/sample.pdf"
      }
    ]
  }
];

// 👇 Add this export so UserProfile.js can import it
export const userProfile = {
  username: "Rohan",
  email: "rohan@example.com",
  createdAt: "2026-06-01",
  favorites: [books[0]],
  uploads: [books[1]],
  history: [
    { bookId: "1", bookTitle: "Manga Adventures", lastRead: "2026-07-05T12:00:00Z" }
  ]
};
