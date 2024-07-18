export interface Chapter {
  id: string;
  label: string;
  content: string;
  parent?: string;
  children?: Chapter[];
}
