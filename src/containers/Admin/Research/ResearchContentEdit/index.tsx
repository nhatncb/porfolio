import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'antd';
import DeleteButton from 'components/DeleteButton';
import TextAreaInput from 'components/Form/TextAreaInput';
import TextInput from 'components/Form/TextInput';
import type { FieldValue } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import useFetch from 'hooks/useFetch';
import useUpdate from 'hooks/useUpdate';
import type { IResearchItem } from 'models/research/types';
import type { SubmitHandler } from 'react-hook-form';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';

import type { ArtisticEducationFormSchema } from './schema';
import schema from './schema';

const ResearchContentEdit = () => {
  const { id = '' } = useParams();
  const { data } = useFetch<IResearchItem>({
    queryKey: ['research', id],
    collectionName: 'research',
    id,
  });
  const navigate = useNavigate();
  const { mutateAsync: update, isPending: isCreating } = useUpdate<
    ArtisticEducationFormSchema & { updatedAt: FieldValue }
  >({
    collectionName: 'research',
    id,
    defaultToast: true,
  });
  const { control, handleSubmit } = useForm<ArtisticEducationFormSchema>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    values: {
      title: data?.title || '',
      summary: data?.summary || '',
      keywords: data?.keywords || '',
      author: data?.author || '',
      content: data?.content || [{ data: '' }],
      viewFullUrl: '',
    },
  });

  const handleUpdateArtwork: SubmitHandler<ArtisticEducationFormSchema> = (values) => {
    update(
      { ...values, updatedAt: serverTimestamp() },
      { onSuccess: () => navigate(`/admin/research/${id}`) },
    );
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'content',
  });

  return (
    <PageContainer extra={<DeleteButton collectionName="research" id={id} />}>
      <div className="py-8 px-6 bg-white max-w-4xl mx-auto mt-4">
        <Form layout="vertical" onFinish={handleSubmit(handleUpdateArtwork)}>
          <TextInput control={control} label="Title" name="title" required />
          <TextInput control={control} label="Summary" name="summary" required />
          <TextInput control={control} label="Keywords" name="keywords" required />
          <TextInput control={control} label="Author" name="author" required />
          {fields.map((item, index) => {
            return (
              <div key={item.id}>
                <div className="flex gap-2 items-center">
                  <TextAreaInput
                    className="w-full"
                    control={control}
                    label="Content"
                    name={`content.${index}.data`}
                    required
                    rows={5}
                  />
                  <Button
                    className="mt-1"
                    disabled={fields.length === 1}
                    icon={<DeleteOutlined />}
                    onClick={() => remove(index)}
                  />
                </div>
              </div>
            );
          })}
          <TextInput control={control} label="View full" name="viewFullUrl" required />
          <Button
            className="my-2"
            icon={<PlusCircleOutlined />}
            onClick={() => append({ data: '' })}
            type="primary"
          >
            Add More
          </Button>
          <div className="flex justify-end gap-2">
            <Button onClick={() => navigate(-1)}>Cancel</Button>
            <Button htmlType="submit" loading={isCreating} type="primary">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </PageContainer>
  );
};
export default ResearchContentEdit;
