import { Page } from "./page.type";

export interface Chapter {
  title?: any;
  image?: any;
  id: string;
  label: string;
  description: string;
  parent?: string;
  children?: Chapter[];
  pages?: Page[];
  position?: { x: number; y: number };
}
