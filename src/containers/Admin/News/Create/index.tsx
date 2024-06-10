import { PageContainer } from '@ant-design/pro-layout';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'antd';
import DateInput from 'components/Form/DateInput';
import TextAreaInput from 'components/Form/TextAreaInput';
import TextInput from 'components/Form/TextInput';
import TimeRangeInput from 'components/Form/TimeRangeInput';
import type { FieldValue } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import useMutate from 'hooks/useMutate';
import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import type { NewsFormSchema } from './schema';
import schema from './schema';

const AdminNewsCreate = () => {
  const navigate = useNavigate();
  const { mutateAsync: create, isPending: isCreating } = useMutate<
    NewsFormSchema & { createdAt: FieldValue; updatedAt: FieldValue }
  >({
    tableName: 'news',
    defaultToast: true,
  });
  const { control, handleSubmit } = useForm<NewsFormSchema>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    values: {
      name: '',
      place: '',
      time: [],
      startDate: '',
      endDate: '',
      description: '',
    },
  });

  const handleCreateNews: SubmitHandler<NewsFormSchema> = (values) => {
    create(
      { ...values, createdAt: serverTimestamp(), updatedAt: serverTimestamp() },
      { onSuccess: () => navigate('/admin/news') },
    );
  };

  return (
    <PageContainer>
      <div className="py-8 px-6 bg-white max-w-4xl mx-auto">
        <Form layout="vertical" onFinish={handleSubmit(handleCreateNews)}>
          <TextInput control={control} label="Name" name="name" required />
          <TextInput control={control} label="Place" name="place" required />
          <div className="flex gap-4">
            <DateInput control={control} label="Start Date" name="startDate" />
            <DateInput control={control} label="End Date" name="endDate" />
          </div>
          <TimeRangeInput control={control} label="Time" name="time" required />
          <TextAreaInput control={control} label="Description" name="description" rows={5} />
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
export default AdminNewsCreate;
