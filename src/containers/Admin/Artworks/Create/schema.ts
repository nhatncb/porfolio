import type { InferType } from 'yup';
import { array, object, string } from 'yup';

const schema = object({
  type: string().required(),
  images: array()
    .of(
      object({
        url: string()
          .trim()
          .when('type', ([type], field) => {
            return type === 'IMAGES' ? field.required() : field;
          }),
      }),
    )
    .when('type', ([type], field) => {
      return type === 'IMAGES' ? field.min(1).required() : field;
    }),
  videoUrl: string()
    .trim()
    .when('type', ([type], field) => {
      return type === 'VIDEO' ? field.required() : field;
    }),
  name: string().required().trim(),
  thumbnailImage: string().trim().required(),
  material: string().required().trim(),
  place: string().required().trim(),
  time: string().required().trim(),
  tag: array().min(1).required(),
  content: string().required().trim(),
});

export default schema;

export type ArtworkFormSchema = InferType<typeof schema>;
