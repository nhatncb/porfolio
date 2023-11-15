import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import { Button } from 'antd';
import CustomTable from 'components/CustomTable';
import dayjs from 'dayjs';
import useList from 'hooks/useList';
import type { INewsItem } from 'models/news/types';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const AdminNewsList = () => {
  const { list, pagination, isFetching } = useList<INewsItem>({ collectionName: 'news' });
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // columns
  const AdvertiserColumn: ProColumns<INewsItem>[] = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Place',
      dataIndex: 'place',
    },
    {
      title: 'date',
      dataIndex: 'date',
      render: (_, { date }) => `${dayjs(date).format('DD/MM/YYYY')}`,
    },
    {
      title: 'Time',
      dataIndex: 'time',
      render: (_, { time }) =>
        `${dayjs(time[0]).format('HH:mm')} - ${dayjs(time[1]).format('HH:mm')}`,
    },
    {
      width: 136,
      fixed: 'right',
      render: (_, { id }) => (
        <Button
          className="w-full max-w-[96px]"
          onClick={() => navigate(`${pathname}/${id}`)}
          size="small"
        >
          Edit
        </Button>
      ),
    },
  ];
  return (
    <PageContainer
      extra={
        <Link to="/admin/news/create">
          <Button type="primary">Create News</Button>
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
export default AdminNewsList;
