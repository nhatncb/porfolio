import type { InferType } from 'yup';
import { array, object, string } from 'yup';

const schema = object({
  name: string().trim().required(),
  startDate: string().trim(),
  endDate: string().trim(),
  place: string().required().trim(),
  time: array().of(string()).required().min(2),
  description: string().trim(),
});

export default schema;

export type NewsFormSchema = InferType<typeof schema>;
