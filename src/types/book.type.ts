import { ReactNode } from "react";
import { Chapter } from "./chapter.type";

export interface Book {
  reviewsCount?: ReactNode;
  ratingsCount?: ReactNode;
  rating?: ReactNode;
  id: number;
  title: string;
  author: string;
  image: string;
  description: string;
  genre: string;
  totalChapters: number;
  chapters: Chapter[];
}
export type { Chapter };

