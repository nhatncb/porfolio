export type IArtworkItem = {
  id: string;
  name: string;
  place: string;
  time: string;
  tag: string[];
  createdAt: string;
  updatedAt: string;
  content: string;
  thumbnailImage: { url: string };
  videoUrl?: string;
  images?: { url: string }[];
  material: string;
  contents: { type: 'IMAGE' | 'VIDEO'; data: { url: string; uid?: string; name?: string } }[];
};
