import type { InferType } from 'yup';
import { array, object, string } from 'yup';

const schema = object({
  contents: array().of(
    object({
      type: string().required(),
      data: object({
        url: string().required(),
        uid: string().when('type', ([type], field) => {
          return type === 'IMAGE' ? field.required() : field;
        }),
        name: string().when('type', ([type], field) => {
          return type === 'IMAGE' ? field.required() : field;
        }),
      }),
    }),
  ),
  name: string().required().trim(),
  thumbnailImage: object({
    uid: string().required(),
    name: string().required(),
    status: string().required(),
    url: string().required(),
  }),
  material: string().required().trim(),
  place: string().required().trim(),
  time: string().required().trim(),
  tag: array().min(1).required(),
  content: string().required().trim(),
});

export default schema;

export type ArtworkFormSchema = InferType<typeof schema>;
