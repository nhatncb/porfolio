import { PageContainer } from '@ant-design/pro-layout';
import { Outlet, useLocation, useNavigate } from 'react-router';

const AdminResearch = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const tabList = [
    {
      key: 'transversality',
      tab: 'The Transversality of Voice',
    },
    {
      key: 'artistic-education',
      tab: 'Artistic Education',
    },
  ];

  const handleTabChange = (key: string) => {
    navigate(`/admin/research/${key}`, { replace: true });
  };

  return (
    <PageContainer
      onTabChange={handleTabChange}
      tabActiveKey={pathname.split(`/`).pop()}
      tabList={tabList}
    >
      <Outlet />
    </PageContainer>
  );
};

export default AdminResearch;
