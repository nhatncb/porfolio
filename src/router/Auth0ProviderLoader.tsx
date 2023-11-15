import type { AppState } from '@auth0/auth0-react';
import { Auth0Provider } from '@auth0/auth0-react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ConfigProvider } from 'antd';
import locale from 'antd/es/locale/en_US';
import type { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import AntTheme from 'styles/ant-theme';
import { AUTH0_AUDIENCE, AUTH0_CLIENT_ID, AUTH0_DOMAIN, AUTH0_REDIRECT } from 'utils/config';

type Props = {
  children: ReactNode;
};
const Auth0ProviderLoader: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const onRedirectCallback = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };

  return (
    <Auth0Provider
      authorizationParams={{
        redirect_uri: AUTH0_REDIRECT,
        audience: AUTH0_AUDIENCE,
        logoUrl: `${window.location.origin}/images/logo.svg`,
        ui_locales: 'ja',
      }}
      cacheLocation="localstorage"
      clientId={AUTH0_CLIENT_ID}
      domain={AUTH0_DOMAIN}
      onRedirectCallback={onRedirectCallback}
      useRefreshTokens
    >
      <ConfigProvider autoInsertSpaceInButton={false} locale={locale} theme={AntTheme}>
        {children}
        <ReactQueryDevtools initialIsOpen={true} />
      </ConfigProvider>
    </Auth0Provider>
  );
};

export default Auth0ProviderLoader;
