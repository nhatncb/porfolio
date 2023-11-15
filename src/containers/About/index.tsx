import { animated, useSprings } from '@react-spring/web';
import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import DownloadIcon from 'assets/icons/download.svg';
import useList from 'hooks/useList';
import type { INewsItem } from 'models/news/types';
import { useState } from 'react';
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
  const [page, setPage] = useState(1);
  const { list: data } = useList<INewsItem>({ collectionName: 'news', staleTime: Infinity });
  const news = data.slice(page === 1 ? (page - 1) * 8 : (page - 1) * 8 - 1, page - 1 + 8);
  const renderContent = (path: string) => {
    if (path === '/statement') {
      return <StatementContent />;
    }
    if (path === '/news') {
      return <NewsContent data={news} page={page} />;
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
  return (
    <div className="bg-white w-full flex flex-col">
      <div className="header h-[104px]">
        <p className="m-0 page-title">About</p>
      </div>
      <div className="flex flex-shrink-0 black-bottom-border h-[72px]">
        <div className="px-[48px] flex-auto flex gap-[16px] black-right-border items-center">
          {springs.map((props, index) => (
            <Link key={MENUS[index]?.to} to={MENUS[index]?.to || ''}>
              <animated.button
                className={`text-btn ${
                  MENUS[index]?.to !== location.pathname ? 'hover-underline' : ''
                }`}
                style={props}
              >
                {MENUS[index]?.label}
              </animated.button>
            </Link>
          ))}
        </div>
        {location.pathname === '/statement' ? (
          <div className={`basis-[215px] flex justify-center items-center`}>
            <button className="text-btn hover-underline">
              <span className="flex items-center gap-2 svg-24 normal-text">
                <DownloadIcon />
                download CV
              </span>
            </button>
          </div>
        ) : (
          <div className={`basis-[160px] flex justify-center items-center`}>
            <div className="flex gap-4">
              <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                <ArrowLeftIcon />
              </button>
              <button disabled={page === 2} onClick={() => setPage(page + 1)}>
                <ArrowRightIcon />
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="h-full">{renderContent(location.pathname)}</div>
    </div>
  );
};

export default AboutPage;
