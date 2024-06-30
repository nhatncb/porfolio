import type { InferType } from 'yup';
import { array, object, string } from 'yup';

const schema = object({
  name: string().required(),
  author: string().required().trim(),
  aboutContent: string().required().trim(),
  time: string().required().trim(),
  imageUrl: object({
    uid: string().required(),
    name: string().required(),
    url: string().required(),
  }).required(),
  buyUrls: array().of(
    object({
      url: string().trim().required(),
      displayUrl: string().trim().required(),
    }),
  ),
});

export default schema;

export type BookFormSchema = InferType<typeof schema>;
