import type { InferType } from 'yup';
import { array, object, string } from 'yup';

const schema = object({
  name: string().required(),
  author: string().required().trim(),
  aboutContent: string().required().trim(),
  imageUrl: string().required().trim(),
  buyUrls: array().of(
    object({
      url: string().trim().required(),
      displayUrl: string().trim().required(),
    }),
  ),
});

export default schema;

export type BookFormSchema = InferType<typeof schema>;
