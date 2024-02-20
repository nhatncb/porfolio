import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import { Button } from 'antd';
import CustomTable from 'components/CustomTable';
import useList from 'hooks/useList';
import type { IBookItem } from 'models/books/types';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const AdminBookList = () => {
  const { list, pagination, isFetching } = useList<IBookItem>({ collectionName: 'books' });
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // columns
  const AdvertiserColumn: ProColumns<IBookItem>[] = [
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
        <Link to="/admin/books/create">
          <Button type="primary">Create Books</Button>
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
export default AdminBookList;
