import { Link } from 'react-router-dom';
import helpers from 'utils/helpers';

const HomePage = () => {
  return (
    <div className="h-screen bg-white flex">
      <div className="side-bar h-screen w-[72px]">{/* <HamburgetButton /> */}</div>
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
