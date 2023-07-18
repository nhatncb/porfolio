import { animated, useSprings } from '@react-spring/web';
import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MENUS = [
  {
    label: '#performance',
    to: '/artworks/performance',
  },
  {
    label: '#sculpture',
    to: '/artworks/sculpture',
  },
  {
    label: '#installation',
    to: '/artworks/installation',
  },
  {
    label: '#collaboration',
    to: '/artworks/collaboration',
  },
  {
    label: '#video',
    to: '/artworks/video',
  },
  {
    label: '#others',
    to: '/artworks/others',
  },
];

const Artworks = () => {
  const { pathname } = useLocation();

  const [springs] = useSprings(
    MENUS.length,
    (i) => ({
      borderColor: MENUS[i]?.to === pathname ? '#000' : 'transparent',
    }),
    [pathname],
  );

  return (
    <div className="h-screen bg-white flex">
      <div className="flex-1 flex flex-col">
        <div className="header h-[128px]">
          <p className="m-0 page-title">Artworks</p>
        </div>
        <div className="flex flex-shrink-0 black-bottom-border h-[72px]">
          <div className="flex flex-auto px-[48px] gap-3 black-right-border items-center">
            {springs.map((props, index) => (
              <Link key={MENUS[index]?.to} to={MENUS[index]?.to || ''}>
                <animated.button
                  className={`text-btn ${MENUS[index]?.to !== pathname ? 'hover-underline' : ''}`}
                  style={{ borderColor: props.borderColor }}
                >
                  {MENUS[index]?.label}
                </animated.button>
              </Link>
            ))}
          </div>
          <div className="basis-[156px] flex justify-center items-center gap-[12px]">
            <button>
              <ArrowLeftIcon />
            </button>
            <button>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div className="flex-1 flex content-container w-[calc(100vw_-_72px)] [&>*:nth-child(4)]:border-r-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Artworks;
