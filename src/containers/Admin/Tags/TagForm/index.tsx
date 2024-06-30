import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from 'antd';
import TextInput from 'components/Form/TextInput';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import type { TagFormSchema } from './schema';
import schema from './schema';

const TagForm = ({
  onSubmit,
  values,
}: {
  values?: TagFormSchema;
  onSubmit: SubmitHandler<TagFormSchema>;
}) => {
  const { handleSubmit, control } = useForm<TagFormSchema>({
    resolver: yupResolver(schema),
    mode: 'onTouched',
    values,
  });
  return (
    <Form id="tag-form" layout="vertical" onFinish={handleSubmit(onSubmit)}>
      <TextInput control={control} label="Name" name="name" required />
    </Form>
  );
};

export default TagForm;
