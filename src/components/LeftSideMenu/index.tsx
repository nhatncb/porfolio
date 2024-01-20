import InfoIcon from 'assets/icons/info.svg';
import SignatureIcon from 'assets/icons/signature1.svg';
import HamburgetButton from 'components/HamburgerButton';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const LeftSideMenu = () => {
  const location = useLocation();
  if (location.pathname.startsWith('/admin')) {
    return <Outlet />;
  }
  const renderTopSection = () => {
    return <HamburgetButton />;
  };

  const renderMiddleSection = () => {
    return (
      <Link className="cursor-pointer" to="/">
        <SignatureIcon />
      </Link>
    );
  };
  return (
    <div className="h-screen bg-white flex art-picture-page">
      <div className="black-right-border py-[24px] h-screen w-[72px] flex-shrink-0 flex flex-col items-center justify-between">
        {renderTopSection()}
        {renderMiddleSection()}
        <Link className="cursor-pointer" to="/statement">
          <InfoIcon />
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default LeftSideMenu;
