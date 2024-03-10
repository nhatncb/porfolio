import type { InferType } from 'yup';
import { array, object, string } from 'yup';

const schema = object({
  title: string().trim().required(),
  summary: string().required().trim(),
  keywords: string().required().trim(),
  author: string().required().trim(),
  content: array().of(
    object({
      data: string().trim(),
    }),
  ),
});

export default schema;

export type ArtisticEducationFormSchema = InferType<typeof schema>;
