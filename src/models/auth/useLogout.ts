import { useAuth0 } from '@auth0/auth0-react';
import { Modal } from 'antd';
// import { useTranslation } from 'react-i18next';

const useLogout = () => {
  const { isAuthenticated, logout: logoutAuth0 } = useAuth0();
  // const { t } = useTranslation();

  const [modal, context] = Modal.useModal();

  const logout = async () => {
    if (isAuthenticated) {
      logoutAuth0({ logoutParams: { returnTo: `${window.location.origin}/` } });
    }
  };

  const showConfirmLogout = () => {
    modal.confirm({
      closable: true,
      icon: null,
      title: 'Logout',
      onOk: logout,
      cancelButtonProps: {
        type: 'primary',
        ghost: true,
      },
      okText: 'Yes',
      cancelText: 'No',
      content: 'Do you want to logout',
    });
  };
  return { logout: showConfirmLogout, context };
};

export default useLogout;
