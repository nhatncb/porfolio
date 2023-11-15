import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'antd';
import TextAreaInput from 'components/Form/TextAreaInput';
import TextInput from 'components/Form/TextInput';
import type { FieldValue } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import useFetch from 'hooks/useFetch';
import useUpdate from 'hooks/useUpdate';
import type { IBookItem } from 'models/books/types';
import type { SubmitHandler } from 'react-hook-form';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';

import type { BookFormSchema } from '../Create/schema';
import schema from '../Create/schema';

const AdminBookEdit = () => {
  const navigate = useNavigate();
  const { id = '' } = useParams();
  const { data } = useFetch<IBookItem>({
    queryKey: ['books', id],
    collectionName: 'books',
    id,
  });

  const { mutateAsync: update, isPending: isUpdating } = useUpdate<
    BookFormSchema & { createdAt: FieldValue; updatedAt: FieldValue }
  >({
    collectionName: 'artworks',
    id,
    defaultToast: true,
  });
  const { control, handleSubmit } = useForm<BookFormSchema>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    values: {
      name: data?.name || '',
      buyUrls: data?.buyUrls || [{ url: '', displayUrl: '' }],
      author: data?.author || '',
      imageUrl: data?.imageUrl || '',
      aboutContent: data?.aboutContent || '',
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'buyUrls',
  });

  const handleCreateArtwork: SubmitHandler<BookFormSchema> = (values) => {
    update(
      { ...values, createdAt: serverTimestamp(), updatedAt: serverTimestamp() },
      { onSuccess: () => navigate('/admin/books') },
    );
  };

  return (
    <PageContainer>
      <div className="py-8 px-6 bg-white max-w-4xl mx-auto">
        <Form layout="vertical" onFinish={handleSubmit(handleCreateArtwork)}>
          <TextInput control={control} label="Name" name="name" required />
          <TextInput control={control} label="Author" name="author" required />
          <TextAreaInput control={control} label="Content" name="aboutContent" required rows={7} />
          <TextInput control={control} label="Image Url" name="imageUrl" required />
          {fields.map((item, index) => {
            return (
              <div key={item.id}>
                <div className="flex gap-2 items-center">
                  <TextInput
                    className="w-full"
                    control={control}
                    label={`Buy Url ${index + 1}`}
                    name={`buyUrls.${index}.url`}
                    required
                  />
                  <TextInput
                    className="w-full"
                    control={control}
                    label={`Display Url ${index + 1}`}
                    name={`buyUrls.${index}.displayUrl`}
                    required
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
            disabled={fields.length === 2}
            icon={<PlusCircleOutlined />}
            onClick={() => append({ url: '', displayUrl: '' })}
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
export default AdminBookEdit;
