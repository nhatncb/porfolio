import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import HamburgetButton from 'components/HamburgerButton';
import useGlobalState from 'hooks/useGlobalState';
import { Outlet, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const LeftSideMenu = () => {
  const location = useLocation();
  const { drawer, setDrawer, setBgIndex } = useGlobalState();

  const renderTopSection = () => {
    if (drawer || location.pathname !== '/') {
      return <Link className="circle-logo" onClick={() => setDrawer(false)} to="/" />;
    }
    if (location.pathname === '/') {
      return (
        <div className="flex flex-col gap-4">
          <button className="rotate-90" onClick={() => setBgIndex(-1)}>
            <ArrowLeftIcon />
          </button>
          <button className="rotate-90" onClick={() => setBgIndex(1)}>
            <ArrowRightIcon />
          </button>
        </div>
      );
    }
    return <div />;
  };

  const renderMiddleSection = () => {
    if (!drawer && location.pathname === '/') {
      return (
        <div className="[writing-mode:vertical-lr] typewriter rotate-180 font-bold">
          Đỗ Nguyễn Lập Xuân
        </div>
      );
    }
    return <div />;
  };
  return (
    <div className="h-screen bg-white flex art-picture-page">
      <div className="black-right-border py-[24px] h-screen w-[72px] flex-shrink-0 flex flex-col items-center justify-between">
        {renderTopSection()}
        {renderMiddleSection()}
        <HamburgetButton />
      </div>
      <Outlet />
    </div>
  );
};

export default LeftSideMenu;
