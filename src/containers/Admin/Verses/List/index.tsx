import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import { Button, Flex } from 'antd';
import CustomTable from 'components/CustomTable';
import DeleteButton from 'components/DeleteButton';
import dayjs from 'dayjs';
import useList from 'hooks/useList';
import type { IVerseItem } from 'models/verses/types';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const AdminVerseList = () => {
  const { list, pagination, isFetching, refetch } = useList<IVerseItem>({
    collectionName: 'verses',
    orderByField: 'time',
    order: 'desc',
  });
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // columns
  const AdvertiserColumn: ProColumns<IVerseItem>[] = [
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
      title: 'Author',
      dataIndex: 'author',
      width: 300,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      render: (_, { time }) => dayjs(time).format('YYYY'),
    },
    {
      width: 156,
      fixed: 'right',
      render: (_, { id }) => (
        <Flex gap={8}>
          <Button
            className="w-full max-w-[96px]"
            onClick={() => navigate(`${pathname}/${id}`)}
            size="small"
          >
            Edit
          </Button>
          <DeleteButton collectionName="verses" id={id} onSuccess={refetch} />
        </Flex>
      ),
    },
  ];
  return (
    <PageContainer
      extra={
        <Link to="/admin/verses/create">
          <Button type="primary">Create Verse</Button>
        </Link>
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
    </PageContainer>
  );
};
export default AdminVerseList;
