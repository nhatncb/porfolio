export type IBookItem = {
  id: string;
  name: string;
  author: string;
  imageUrl: string;
  aboutContent: string;
  updatedAt: string;
  createdAt: string;
  buyUrls: { url: string; displayUrl: string }[];
};
