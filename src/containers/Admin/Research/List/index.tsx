import { PageContainer } from '@ant-design/pro-layout';
import type { ProColumns } from '@ant-design/pro-table';
import { Button } from 'antd';
import CustomTable from 'components/CustomTable';
import useList from 'hooks/useList';
import type { IResearchItem } from 'models/research/types';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const ResearchList = () => {
  const { list, pagination, isFetching } = useList<IResearchItem>({
    collectionName: 'research',
  });
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // columns
  const researchColumn: ProColumns<IResearchItem>[] = [
    {
      dataIndex: 'id',
      title: 'ID',
    },
    {
      title: 'Title',
      width: 280,
      dataIndex: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      width: 300,
    },
    {
      title: 'Keywords',
      dataIndex: 'keywords',
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
        <Link to="/admin/research/create">
          <Button type="primary">Create research</Button>
        </Link>
      }
    >
      <div className="py-8 px-6 bg-white">
        <CustomTable
          columns={researchColumn}
          dataSource={list}
          loading={isFetching}
          pagination={pagination}
        />
      </div>
    </PageContainer>
  );
};
export default ResearchList;
