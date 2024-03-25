import type { InferType } from 'yup';
import { object, string } from 'yup';

const schema = object({
  thumbnailImage: object({
    uid: string().required(),
    name: string().required(),
    status: string().required(),
    url: string().required(),
  }),
  cvUrl: string().required().trim(),
  born: string().required().trim(),
  email: string().required().trim(),
  phone: string().required().trim(),
  introduction: string().required().trim(),
});

export default schema;

export type StatementFormSchema = InferType<typeof schema>;
