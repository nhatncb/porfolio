import { PageContainer } from '@ant-design/pro-layout';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form, Spin } from 'antd';
import EditorInput from 'components/Form/Editor';
import TextInput from 'components/Form/TextInput';
import type { FieldValue } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import useFetch from 'hooks/useFetch';
import useUpdate from 'hooks/useUpdate';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import type { StatementFormSchema } from './schema';
import schema from './schema';

const StatementEdit = () => {
  const { data, isLoading } = useFetch<StatementFormSchema>({
    queryKey: ['statement', 'main'],
    collectionName: 'statement',
    id: 'main',
  });
  const navigate = useNavigate();
  const { mutateAsync: update, isPending: isCreating } = useUpdate<
    StatementFormSchema & { updatedAt: FieldValue }
  >({
    collectionName: 'statement',
    id: 'main',
    defaultToast: true,
  });
  const { control, handleSubmit } = useForm<StatementFormSchema>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    values: {
      thumbnailImage: data?.thumbnailImage || '',
      born: data?.born || '',
      email: data?.email || '',
      phone: data?.phone || '',
      introduction: data?.introduction || '',
    },
  });

  const handleUpdateArtwork: SubmitHandler<StatementFormSchema> = (values) => {
    update(
      { ...values, updatedAt: serverTimestamp() },
      { onSuccess: () => navigate('/admin/statement') },
    );
  };

  if (isLoading) {
    return (
      <div className="flex justify-center p-8">
        <Spin />
      </div>
    );
  }

  return (
    <PageContainer>
      <div className="py-8 px-6 bg-white max-w-4xl mx-auto">
        <Form layout="vertical" onFinish={handleSubmit(handleUpdateArtwork)}>
          <TextInput control={control} label="Thumbnail" name="thumbnailImage" required />
          <TextInput control={control} label="Born" name="born" required />
          <TextInput control={control} label="Email" name="email" required />
          <TextInput control={control} label="Phone" name="phone" required />
          <EditorInput control={control} label="Introduction" name="introduction" required />
          <div className="flex justify-end">
            <Button htmlType="submit" loading={isCreating} type="primary">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </PageContainer>
  );
};
export default StatementEdit;
