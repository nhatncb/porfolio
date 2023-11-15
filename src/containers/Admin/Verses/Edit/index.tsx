import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'antd';
import DateInput from 'components/Form/DateInput';
import TextAreaInput from 'components/Form/TextAreaInput';
import TextInput from 'components/Form/TextInput';
import type { FieldValue } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import useFetch from 'hooks/useFetch';
import useUpdate from 'hooks/useUpdate';
import type { IVerseItem } from 'models/verses/types';
import type { SubmitHandler } from 'react-hook-form';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';

import type { VerseFormSchema } from '../Create/schema';
import schema from '../Create/schema';

const AdminVerseEdit = () => {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const { data } = useFetch<IVerseItem>({
    queryKey: ['verses', id],
    collectionName: 'verses',
    id,
  });

  const { mutateAsync: update, isPending: isUpdating } = useUpdate<
    VerseFormSchema & { createdAt: FieldValue; updatedAt: FieldValue }
  >({
    collectionName: 'artworks',
    id,
    defaultToast: true,
  });
  const { control, handleSubmit } = useForm<VerseFormSchema>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    values: {
      name: data?.name || '',
      verses: data?.verses || [{ content: '' }],
      author: data?.author || '',
      time: data?.time || '',
      place: data?.place || '',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'verses',
  });

  const handleCreateArtwork: SubmitHandler<VerseFormSchema> = (values) => {
    update(
      { ...values, createdAt: serverTimestamp(), updatedAt: serverTimestamp() },
      { onSuccess: () => navigate('/admin/verses') },
    );
  };

  return (
    <PageContainer>
      <div className="py-8 px-6 bg-white max-w-4xl mx-auto">
        <Form layout="vertical" onFinish={handleSubmit(handleCreateArtwork)}>
          <TextInput control={control} label="Name" name="name" required />
          <TextInput control={control} label="Author" name="author" required />
          <TextInput control={control} label="Place" name="place" required />
          <DateInput
            control={control}
            format="YYYY"
            label="Time"
            name="time"
            picker="year"
            required
          />
          {fields.map((item, index) => {
            return (
              <div key={item.id}>
                <div className="flex gap-2 items-center">
                  <TextAreaInput
                    className="w-full"
                    control={control}
                    label={`Verse ${index + 1}`}
                    name={`verses.${index}.content`}
                    required
                    rows={7}
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
          <Button
            className="my-2"
            disabled={fields.length === 3}
            icon={<PlusCircleOutlined />}
            onClick={() => append({ content: '' })}
            type="primary"
          >
            Add More
          </Button>
          <div className="flex justify-end">
            <Button htmlType="submit" loading={isUpdating} type="primary">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </PageContainer>
  );
};
export default AdminVerseEdit;
