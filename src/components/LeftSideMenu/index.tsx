import HamburgetButton from 'components/HamburgerButton';
import useGlobalState from 'hooks/useGlobalState';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const LeftSideMenu = () => {
  const { drawer, setDrawer } = useGlobalState();

  const renderTopSection = () => {
    if (drawer) {
      return <Link className="circle-logo" onClick={() => setDrawer(false)} to="/" />;
    }
    return <div />;
  };

  const renderMiddleSection = () => {
    if (drawer) {
      return <div />;
    }
    return (
      <div className="[writing-mode:vertical-lr] typewriter rotate-180 font-bold">
        Đỗ Nguyễn Lập Xuân
      </div>
    );
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
