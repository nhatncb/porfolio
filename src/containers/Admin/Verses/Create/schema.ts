import type { InferType } from 'yup';
import { array, object, string } from 'yup';

const schema = object({
  name: string().trim().required(),
  author: string().required().trim(),
  time: string().required().trim(),
  place: string().required().trim(),
  verses: array().of(
    object({
      content: string().trim().required(),
    }),
  ),
});

export default schema;

export type VerseFormSchema = InferType<typeof schema>;
