import type { OAuthError } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';
import { useMutation } from '@tanstack/react-query';
import api from 'utils/api';

const useAuth0Api = () => {
  const { getAccessTokenSilently, logout } = useAuth0();
  const { mutateAsync: getAccessToken } = useMutation<unknown, OAuthError>({
    mutationFn: () => getAccessTokenSilently(),
    onError: (error) => {
      if (error?.error === 'invalid_grant') {
        logout({ logoutParams: { returnTo: window.location.origin } });
      }
    },
  });

  const auth0Api = async () => {
    const token = await getAccessToken();
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
    return api;
  };

  return { auth0Api };
};

export default useAuth0Api;
