import ArrowLeft from '@icons/arrow-left.svg';
import ArrowRight from '@icons/arrow-right.svg';
import HamburgetButton from 'component/HamburgerButton';
import { Link } from 'react-router-dom';
import helpers from 'utils/helpers';

const HomePage = () => {
  return (
    <div className="h-screen bg-white flex">
      <div className="side-bar h-screen w-[72px] flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="-rotate-90">
            <ArrowRight />
          </div>
          <div className="-rotate-90">
            <ArrowLeft />
          </div>
        </div>
        <div className="[writing-mode:vertical-lr] rotate-180">Đỗ Nguyễn Lập Xuân</div>
        <HamburgetButton />
      </div>
      <Link className="flex-1 py-[24px] pr-[24px] relative" to="/">
        <img
          className="w-full h-full object-cover"
          draggable={false}
          src={helpers.getAssetUrl('/images/bg_home.png')}
        />
        <p className="flex items-center justify-center text-[12px] text-[#ffffff] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000000]/20 w-[98px] h-[40px] rounded-[4px]">
          tap to explore
        </p>
      </Link>
    </div>
  );
};

export default HomePage;
