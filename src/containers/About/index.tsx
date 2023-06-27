import { animated, useSprings, useTransition } from '@react-spring/web';
import DownloadIcon from 'assets/icons/download.svg';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

import NewsContent from './News';
import StatementContent from './Statement';

const MENUS = [
  {
    label: 'statement',
    to: '/statement',
  },
  {
    label: 'news',
    to: '/news',
  },
];

const AboutPage = () => {
  const location = useLocation();

  const renderContent = (path: string) => {
    if (path === '/statement') {
      return <StatementContent />;
    }
    if (path === '/news') {
      return <NewsContent />;
    }
    return <></>;
  };

  const [springs] = useSprings(
    MENUS.length,
    (i) => ({
      borderColor: MENUS[i]?.to === location.pathname ? '#000' : 'transparent',
    }),
    [location.pathname],
  );

  const transitions = useTransition(location.pathname, {
    key: location.pathname,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
    config: { duration: 300 },
  });

  return (
    <div className="bg-white w-full flex flex-col">
      <div className="header">
        <p className="m-0 page-title">About</p>
      </div>
      <div className="flex flex-shrink-0 black-bottom-border h-[72px]">
        <div className="px-[48px] flex-auto flex gap-[12px] black-right-border items-center">
          {springs.map((props, index) => (
            <Link key={MENUS[index]?.to} to={MENUS[index]?.to || ''}>
              <animated.button className="text-btn hover-underline" style={props}>
                {MENUS[index]?.label}
              </animated.button>
            </Link>
          ))}
        </div>
        <div className="basis-[193px] flex justify-center items-center">
          <button className="text-btn hover-underline">
            <span className="flex items-center gap-[8px]">
              <DownloadIcon />
              download csv
            </span>
          </button>
        </div>
      </div>
      {transitions((style, item) => {
        return (
          <animated.div className="h-full" style={style}>
            {renderContent(item)}
          </animated.div>
        );
      })}
    </div>
  );
};

export default AboutPage;
