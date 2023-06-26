import ArrowLeft from '@icons/arrow-left.svg';
import ArrowRight from '@icons/arrow-right.svg';
import Signature from '@icons/signature.svg';
import HamburgetButton from 'components/HamburgerButton';
import { Outlet, useLocation } from 'react-router';

const LeftSideMenu = () => {
  const { pathname } = useLocation();

  const renderTopSection = () => {
    if (pathname === '/') {
      return (
        <div className="flex flex-col gap-3">
          <div className="-rotate-90">
            <ArrowRight />
          </div>
          <div className="-rotate-90">
            <ArrowLeft />
          </div>
        </div>
      );
    }
    if (pathname === '/statement') {
      return <div className="circle-logo" />;
    }
    return <div />;
  };

  const renderMiddleSection = () => {
    if (pathname === '/') {
      return <div className="[writing-mode:vertical-lr] rotate-180">Đỗ Nguyễn Lập Xuân</div>;
    }
    if (pathname === '/statement') {
      return <div />;
    }
    return <Signature />;
  };
  return (
    <div className="h-screen bg-white flex art-picture-page">
      <div className="side-bar h-screen w-[72px] flex flex-col justify-between">
        {renderTopSection()}
        {renderMiddleSection()}
        <HamburgetButton />
      </div>
      <Outlet />
    </div>
  );
};

export default LeftSideMenu;
