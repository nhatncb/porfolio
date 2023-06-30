import { animated, useSprings } from '@react-spring/web';
import { Link, Outlet, useLocation } from 'react-router-dom';

const MENUS = [
  {
    label: 'verses',
    to: '/writings/verses',
  },
  {
    label: 'essays',
    to: '/writings/essays',
  },
  {
    label: 'books',
    to: '/writings/books',
  },
];

const Writings = () => {
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
        <div className="header">
          <p className="m-0 page-title">Writings</p>
        </div>
        <div className="flex flex-shrink-0 black-bottom-border h-[72px]">
          <div className="px-[48px] flex-auto flex gap-[12px] items-center">
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

export default Writings;
