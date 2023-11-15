import type { InferType } from 'yup';
import { array, object, string } from 'yup';

const schema = object({
  name: string().trim().required(),
  date: string().required(),
  place: string().required().trim(),
  time: array().of(string()).required().min(2),
});

export default schema;

export type NewsFormSchema = InferType<typeof schema>;
