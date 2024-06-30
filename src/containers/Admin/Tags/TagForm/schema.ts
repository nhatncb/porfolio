import type { InferType } from 'yup';
import { object, string } from 'yup';

const schema = object({
  name: string().required().uppercase(),
});

export default schema;

export type TagFormSchema = InferType<typeof schema>;
