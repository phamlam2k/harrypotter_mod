interface Book {
  id: number;
  title: string;
  author: string;
  image: string;
  description: string;
  genre: string;
  totalChapters: number;
  chapters: Chapter[];
}
