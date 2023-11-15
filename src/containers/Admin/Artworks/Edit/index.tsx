import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Form } from 'antd';
import DateInput from 'components/Form/DateInput';
import RadioField from 'components/Form/Radio';
import SelectInput from 'components/Form/SelectInput';
import TextAreaInput from 'components/Form/TextAreaInput';
import TextInput from 'components/Form/TextInput';
import type { FieldValue } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import useFetch from 'hooks/useFetch';
import useUpdate from 'hooks/useUpdate';
import { useEffect } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router';
import { ArtworkType } from 'utils/enum';
import helpers from 'utils/helpers';

import type { ArtworkFormSchema } from '../Create/schema';
import schema from '../Create/schema';

const AdminArtworkEdit = () => {
  const { id = '' } = useParams();
  const { data } = useFetch<ArtworkFormSchema>({
    queryKey: ['artworks', id],
    collectionName: 'artworks',
    id,
  });
  const navigate = useNavigate();
  const { mutateAsync: update, isPending: isCreating } = useUpdate<
    ArtworkFormSchema & { updatedAt: FieldValue }
  >({
    collectionName: 'artworks',
    id,
    defaultToast: true,
  });
  const { control, handleSubmit, watch, setValue } = useForm<ArtworkFormSchema>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    values: {
      type: data?.type || 'IMAGES',
      images: data?.images || [{ url: '' }],
      name: data?.name || '',
      place: data?.place || '',
      tag: data?.tag || [],
      time: data?.time || '',
      content: data?.content || '',
      material: data?.material || '',
      thumbnailImage: data?.thumbnailImage || '',
      videoUrl: data?.videoUrl || '',
    },
  });
  const watchType = watch('type');

  useEffect(() => {
    if (watchType === 'VIDEO') {
      setValue('images', [{ url: '' }]);
    } else if (watchType === 'IMAGES') {
      setValue('videoUrl', '');
    }
  }, [setValue, watchType]);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'images',
  });

  const handleUpdateArtwork: SubmitHandler<ArtworkFormSchema> = (values) => {
    update(
      { ...values, updatedAt: serverTimestamp() },
      { onSuccess: () => navigate('/admin/art-works') },
    );
  };

  return (
    <PageContainer>
      <div className="py-8 px-6 bg-white max-w-4xl mx-auto">
        <Form layout="vertical" onFinish={handleSubmit(handleUpdateArtwork)}>
          <div className="black-border p-4 mb-6" style={{ borderRadius: 8 }}>
            <RadioField
              control={control}
              data={[
                { _id: 'IMAGES', name: 'IMAGES' },
                { _id: 'VIDEO', name: 'VIDEO' },
              ]}
              label="Content Type"
              name="type"
              required
            />
            {watchType === 'VIDEO' && (
              <TextInput control={control} label="Video Url" name="videoUrl" required />
            )}
            {watchType === 'IMAGES' &&
              fields.map((item, index) => {
                return (
                  <div key={item.id}>
                    <div className="flex gap-2 items-center">
                      <TextInput
                        className="w-full"
                        control={control}
                        label="Image Url"
                        name={`images.${index}.url`}
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
            {watchType === 'IMAGES' && (
              <Button
                className="my-2"
                icon={<PlusCircleOutlined />}
                onClick={() => append({ url: '' })}
                type="primary"
              >
                Add More
              </Button>
            )}
          </div>
          <TextInput control={control} label="Name" name="name" required />
          <TextInput control={control} label="Thumbnail" name="thumbnailImage" required />
          <TextInput control={control} label="Material" name="material" required />
          <TextInput control={control} label="Place" name="place" required />
          <DateInput
            control={control}
            format="YYYY"
            label="Time"
            name="time"
            picker="year"
            required
          />
          <SelectInput
            control={control}
            data={helpers.convertObjectToOptions(ArtworkType)}
            label="Tag"
            mode="multiple"
            name="tag"
            required
          />
          <TextAreaInput control={control} label="Content" name="content" required rows={9} />
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
export default AdminArtworkEdit;
