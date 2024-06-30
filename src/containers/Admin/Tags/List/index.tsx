import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import { Button, Flex, Modal } from 'antd';
import CustomTable from 'components/CustomTable';
import DeleteButton from 'components/DeleteButton';
import type { FieldValue } from 'firebase/firestore';
import { serverTimestamp } from 'firebase/firestore';
import useList from 'hooks/useList';
import useMutate from 'hooks/useMutate';
import useUpdate from 'hooks/useUpdate';
import { useState } from 'react';
import type { SubmitHandler } from 'react-hook-form';

import TagForm from '../TagForm';
import type { TagFormSchema } from '../TagForm/schema';

type Tag = {
  name: string;
  id: string;
};

const TagList = () => {
  const [open, setOpen] = useState<Tag | boolean>(false);
  const { list, pagination, isFetching, refetch } = useList<Tag>({ collectionName: 'tag' });

  const { mutateAsync: update, isPending: isUpdating } = useUpdate<
    TagFormSchema & { createdAt: FieldValue; updatedAt: FieldValue }
  >({
    collectionName: 'tag',
    id: typeof open === 'object' ? open.id : '',
    defaultToast: true,
  });
  const { mutateAsync: create, isPending: isCreating } = useMutate<
    TagFormSchema & { createdAt: FieldValue; updatedAt: FieldValue }
  >({
    tableName: 'tag',
    defaultToast: true,
  });

  const handleSubmitTag: SubmitHandler<TagFormSchema> = async (values) => {
    if (typeof open === 'object') {
      await update({ ...values, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
    } else await create({ ...values, createdAt: serverTimestamp(), updatedAt: serverTimestamp() });
    setOpen(false);
    refetch();
  };
  // columns
  const AdvertiserColumn: ProColumns<Tag>[] = [
    {
      dataIndex: 'id',
      title: 'ID',
    },
    {
      title: 'Name',
      width: 280,
      dataIndex: 'name',
    },
    {
      width: 156,
      fixed: 'right',
      render: (_, item) => (
        <Flex gap={8}>
          <Button className="w-full max-w-[96px]" onClick={() => setOpen(item)} size="small">
            Edit
          </Button>
          <DeleteButton collectionName="tag" id={item.id} onSuccess={refetch} />
        </Flex>
      ),
    },
  ];
  return (
    <PageContainer
      extra={
        <Button onClick={() => setOpen(true)} type="primary">
          Create Tag
        </Button>
      }
    >
      <div className="py-8 px-6 bg-white">
        <CustomTable
          columns={AdvertiserColumn}
          dataSource={list}
          loading={isFetching}
          pagination={pagination}
        />
      </div>
      <Modal
        destroyOnClose
        footer={[
          <Button danger key="cancel" onClick={() => setOpen(false)}>
            Cancel
          </Button>,
          <Button form="tag-form" htmlType="submit" key="submit" loading={isCreating || isUpdating}>
            Save
          </Button>,
        ]}
        open={!!open}
      >
        <TagForm onSubmit={handleSubmitTag} values={typeof open === 'object' ? open : undefined} />
      </Modal>
    </PageContainer>
  );
};
export default TagList;
