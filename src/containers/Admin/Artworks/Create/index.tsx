import { DeleteOutlined, PlusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import { yupResolver } from '@hookform/resolvers/yup';
import type { InputRef } from 'antd';
import { Button, Divider, Form, Input, Space } from 'antd';
import DateInput from 'components/Form/DateInput';
import SelectInput from 'components/Form/SelectInput';
import TextAreaInput from 'components/Form/TextAreaInput';
import TextInput from 'components/Form/TextInput';
import UploadInput from 'components/Form/Upload';
import type { FieldValue } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import useList from 'hooks/useList';
import useMutate from 'hooks/useMutate';
import { useRef, useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';
import { useFieldArray, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';

import type { ArtworkFormSchema } from './schema';
import schema from './schema';

const AdminArtworkCreate = () => {
  const navigate = useNavigate();

  const { mutateAsync: create, isPending: isCreating } = useMutate<
    ArtworkFormSchema & { createdAt: FieldValue; updatedAt: FieldValue }
  >({
    tableName: 'artworks',
    defaultToast: true,
  });

  const { control, handleSubmit } = useForm<ArtworkFormSchema>({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    values: {
      contents: [{ data: null as never, type: 'IMAGE' }],
      name: '',
      place: '',
      tag: [],
      time: '',
      content: '',
      material: '',
      thumbnailImage: null as never,
    },
  });
  const inputRef = useRef<InputRef>(null);

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'contents',
  });

  const handleCreateArtwork: SubmitHandler<ArtworkFormSchema> = (values) => {
    create(
      { ...values, createdAt: serverTimestamp(), updatedAt: serverTimestamp() },
      { onSuccess: () => navigate('/admin/art-works') },
    );
  };

  const [name, setName] = useState('');
  const { list: tagList, refetch: refetchTagList } = useList<{ name: string }>({
    collectionName: 'tag',
    order: 'asc',
  });

  const { mutateAsync: createTag } = useMutate<{
    name: string;
    createdAt: FieldValue;
    updatedAt: FieldValue;
  }>({
    tableName: 'tag',
    defaultToast: true,
  });

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    createTag(
      {
        name: name.toUpperCase(),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
      { onSuccess: () => refetchTagList() },
    );
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <PageContainer>
      <div className="py-8 px-6 bg-white max-w-4xl mx-auto">
        <Form layout="vertical" onFinish={handleSubmit(handleCreateArtwork)}>
          <div className="black-border p-4 mb-6" style={{ borderRadius: 8 }}>
            {fields.map((item, index) => {
              return (
                <div key={item.id}>
                  <div className="flex gap-2 items-center">
                    {item.type === 'IMAGE' ? (
                      <UploadInput
                        control={control}
                        label="Image Url"
                        name={`contents.${index}.data`}
                        required
                      />
                    ) : (
                      <TextInput
                        className="w-full"
                        control={control}
                        label="Video Url"
                        name={`contents.${index}.data.url`}
                        required
                      />
                    )}
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
            <div className="my-2 flex gap-2">
              <Button
                icon={<PlusCircleOutlined />}
                onClick={() => append({ data: { url: '', uid: '', name: '' }, type: 'IMAGE' })}
                type="primary"
              >
                Add More Image
              </Button>
              <Button
                icon={<PlusCircleOutlined />}
                onClick={() => append({ data: { url: '' }, type: 'VIDEO' })}
                type="primary"
              >
                Add More Video
              </Button>
            </div>
          </div>
          <TextInput control={control} label="Name" name="name" required />
          <UploadInput control={control} label="Thumbnail" name="thumbnailImage" required />
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
            data={tagList.map((tag) => ({ _id: tag.name, name: tag.name }))}
            dropdownRender={(menu) => (
              <>
                {menu}
                <Divider style={{ margin: '8px 0' }} />
                <Space style={{ padding: '0 8px 4px' }}>
                  <Input
                    onChange={onNameChange}
                    onKeyDown={(e) => e.stopPropagation()}
                    placeholder="Please enter item"
                    ref={inputRef}
                    value={name}
                  />
                  <Button icon={<PlusOutlined />} onClick={addItem} type="text">
                    Add item
                  </Button>
                </Space>
              </>
            )}
            label="Tag"
            mode="multiple"
            name="tag"
            required
          />
          <TextAreaInput control={control} label="Content" name="content" required rows={7} />
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
export default AdminArtworkCreate;
