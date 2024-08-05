import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import { Button, Flex, Tag } from 'antd';
import CustomTable from 'components/CustomTable';
import DeleteButton from 'components/DeleteButton';
import useList from 'hooks/useList';
import type { IArtworkItem } from 'models/artwork/types';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const AdminArtworkList = () => {
  const { list, pagination, isFetching, refetch } = useList<IArtworkItem>({
    collectionName: 'artworks',
    orderByField: 'time',
  });
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // columns
  const AdvertiserColumn: ProColumns<IArtworkItem>[] = [
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
      title: 'Place',
      dataIndex: 'place',
      width: 300,
    },
    {
      title: 'Type',
      dataIndex: 'tag',
      width: 300,
      render: (_, { tag }) =>
        tag.map((item, index) => (
          <Tag color="blue" key={index}>
            {item}
          </Tag>
        )),
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
          <DeleteButton collectionName="artworks" id={id} onSuccess={refetch} />
        </Flex>
      ),
    },
  ];
  return (
    <PageContainer
      extra={
        <Link to="/admin/art-works/create">
          <Button type="primary">Create Arts</Button>
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
export default AdminArtworkList;
