import { DownOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { ProLayout } from '@ant-design/pro-layout';
import { useAuth0 } from '@auth0/auth0-react';
import type { MenuProps } from 'antd';
import { Dropdown, Modal, Spin, Typography } from 'antd';
import type { ArtisticEducationFormSchema } from 'containers/Admin/Research/ResearchContentEdit/schema';
import type { StatementFormSchema } from 'containers/Admin/Statement/Edit/schema';
import useFetch from 'hooks/useFetch';
// import SwitchLang from 'components/SwitchLang';
import { get } from 'lodash';
import useLogout from 'models/auth/useLogout';
import { Suspense, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { sideMenuRoutes } from 'router';
import { layoutToken } from 'styles/ant-theme';

const PageLayout = () => {
  const { user } = useAuth0();
  const { logout, context } = useLogout();
  // const { t } = useTranslation();
  const { pathname } = useLocation();
  useFetch<StatementFormSchema>({
    queryKey: ['statement', 'main'],
    collectionName: 'statement',
    id: 'main',
    staleTime: Infinity,
  });
  useFetch<ArtisticEducationFormSchema>({
    queryKey: ['research', 'transversality'],
    collectionName: 'research',
    id: 'transversality',
  });
  useFetch<ArtisticEducationFormSchema>({
    queryKey: ['research', 'artistic-education'],
    collectionName: 'research',
    id: 'artistic-education',
  });
  useEffect(() => {
    document.body.style.overflowY = 'unset';
    document.body.style.maxHeight = 'unset';
  }, []);

  useEffect(() => {
    Modal.destroyAll();
  }, [pathname]);

  const menu: MenuProps['items'] = [
    {
      key: 'logout',
      label: 'Logout',
      onClick: logout,
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <div id="pro-layout">
      <ProLayout
        ErrorBoundary={false}
        actionsRender={() => [
          <div key="dropdownn">
            <Dropdown className="mr-2" menu={{ items: menu }} trigger={['click']}>
              <div className="flex justify-center items-center cursor-pointer gap-2">
                <UserOutlined />
                <Typography.Text className="hidden lg:block">
                  {user?.email || user?.name}
                </Typography.Text>
                <DownOutlined />
              </div>
            </Dropdown>
          </div>,
        ]}
        breadcrumbRender={(routers) => {
          return (
            routers &&
            routers.map((route, index) => ({
              ...route,
              linkPath: undefined,
              title:
                index < routers.length - 1 ? (
                  <Link to={get(route, 'linkPath') || '/'}>{route.title}</Link>
                ) : (
                  route.title
                ),
            }))
          );
        }}
        // formatMessage={(message) => {
        //   return t(message.defaultMessage || '');
        // }}
        headerTitleRender={(logo) => logo}
        layout="mix"
        logo={<Link to="/">D</Link>}
        menuItemRender={(menuItem, defaultDom) => {
          return (
            <Link key={menuItem.path} to={menuItem.path || '/'}>
              {defaultDom}
            </Link>
          );
        }}
        route={{
          routes: sideMenuRoutes,
          location: {
            pathname,
          },
        }}
        siderWidth={256}
        token={layoutToken}
      >
        <Suspense
          fallback={
            <div className="flex justify-center p-4">
              <Spin />
            </div>
          }
        >
          <Outlet />
        </Suspense>
        {context}
      </ProLayout>
    </div>
  );
};

export default PageLayout;
