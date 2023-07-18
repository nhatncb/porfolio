import { animated, useSprings } from '@react-spring/web';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MENUS = [
  {
    label: 'the transversality of voice',
    to: '/research/transversality',
  },
  {
    label: 'artistic education',
    to: '/research/artistic-education',
  },
];

const Research = () => {
  const { pathname } = useLocation();
  const [springs] = useSprings(
    MENUS.length,
    (i) => ({
      borderColor: MENUS[i]?.to === pathname ? '#000' : 'transparent',
    }),
    [pathname],
  );
  return (
    <div className="h-screen bg-white flex flex-1">
      <div className="flex-1 flex flex-col">
        <div className="header h-[128px]">
          <p className="m-0 page-title">Research</p>
        </div>
        <div className="black-bottom-border">
          <div className="px-[48px] py-[18px] flex-1 black-right-border gap-2 flex">
            {springs.map((props, index) => (
              <Link key={MENUS[index]?.to} to={MENUS[index]?.to || ''}>
                <animated.button
                  className={`text-btn ${MENUS[index]?.to !== pathname ? 'hover-underline' : ''}`}
                  style={props}
                >
                  {MENUS[index]?.label}
                </animated.button>
              </Link>
            ))}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Research;
