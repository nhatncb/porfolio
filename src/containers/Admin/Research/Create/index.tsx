import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'antd';
import TextAreaInput from 'components/Form/TextAreaInput';
import TextInput from 'components/Form/TextInput';
import type { FieldValue } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import useMutate from 'hooks/useMutate';
import type { SubmitHandler } from 'react-hook-form';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import type { ArtisticEducationFormSchema } from '../ResearchContentEdit/schema';
import schema from '../ResearchContentEdit/schema';

const ResearchCreate = () => {
  const navigate = useNavigate();
  const { mutateAsync: create, isPending: isCreating } = useMutate<
    ArtisticEducationFormSchema & { createdAt: FieldValue; updatedAt: FieldValue }
  >({
    tableName: 'research',
    defaultToast: true,
  });
  const { control, handleSubmit } = useForm<ArtisticEducationFormSchema>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    values: {
      title: '',
      summary: '',
      keywords: '',
      author: '',
      content: [{ data: '' }],
      viewFullUrl: '',
    },
  });

  const handleCreateResearch: SubmitHandler<ArtisticEducationFormSchema> = (values) => {
    create(
      { ...values, updatedAt: serverTimestamp(), createdAt: serverTimestamp() },
      { onSuccess: () => navigate(`/admin/research/`) },
    );
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'content',
  });

  return (
    <PageContainer>
      <div className="py-8 px-6 bg-white max-w-4xl mx-auto mt-4">
        <Form layout="vertical" onFinish={handleSubmit(handleCreateResearch)}>
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
export default ResearchCreate;
