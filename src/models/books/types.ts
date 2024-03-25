export type IBookItem = {
  id: string;
  name: string;
  author: string;
  imageUrl: { uid: string; url: string; name: string };
  aboutContent: string;
  updatedAt: string;
  createdAt: string;
  buyUrls: { url: string; displayUrl: string }[];
};
