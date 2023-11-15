import { withAuthenticationRequired } from '@auth0/auth0-react';
import { Space, Spin } from 'antd';
import React from 'react';

export const AuthenticationGuard = ({ component }: { component: React.ComponentType<object> }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <Space className="h-screen w-screen justify-center">
        <Spin size="large" />
      </Space>
    ),
  });

  return <Component />;
};
