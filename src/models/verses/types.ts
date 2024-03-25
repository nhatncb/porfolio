export type IVerseItem = {
  name: string;
  author: string;
  time: string;
  place: string;
  verses: { content: string }[];
  id: string;
  viewFullUrl: string;
};
