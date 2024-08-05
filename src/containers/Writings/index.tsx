import { animated, useSprings } from '@react-spring/web';
import list from 'antd/es/list';
import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import useList from 'hooks/useList';
import type { IBookItem } from 'models/books/types';
import { useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

import Publications from './Publications';
import Verses from './Verses';

const MENUS = [
  {
    label: 'Writings',
    to: '/writings/verses',
  },
  // {
  //   label: 'essays',
  //   to: '/writings/essays',
  // },
  {
    label: 'Publications',
    to: '/writings/publications',
  },
];

const Writings = () => {
  const { type } = useParams();
  const { pathname } = useLocation();
  const [slice, setSlice] = useState(0);
  const { list: data } = useList<IBookItem>({
    collectionName: 'books',
    staleTime: Infinity,
    orderByField: 'time',
  });

  const [springs] = useSprings(
    MENUS.length,
    (i) => ({
      borderColor: MENUS[i]?.to === pathname ? '#000' : 'transparent',
    }),
    [pathname],
  );
  const sliceList = data.slice(slice * 4, (slice + 1) * 4);
  const handleNavigate = (next?: boolean) => {
    if (next) {
      if (slice < data.length / 4 - 1) {
        return setSlice((prev) => prev + 1);
      }
      if (slice >= data.length / 4 - 1) {
        return setSlice(0);
      }
    } else {
      if (slice > 0) {
        return setSlice((prev) => prev - 1);
      }
      if (slice === 0) {
        return setSlice(Math.floor(list.length / 4));
      }
    }
    return null;
  };

  return (
    <div className="h-screen bg-white flex flex-1">
      <div className="flex-1 flex flex-col">
        <div className="header h-[104px]">
          <p className="m-0 page-title">Works</p>
        </div>
        <div className="flex flex-shrink-0 black-bottom-border h-[72px]">
          <div className="px-[48px] flex-auto flex gap-4 items-center black-right-border">
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
          {type === 'publications' && (
            <div className="basis-[160px] flex justify-center items-center gap-[12px]">
              <button onClick={() => handleNavigate()}>
                <ArrowLeftIcon />
              </button>
              <button onClick={() => handleNavigate(true)}>
                <ArrowRightIcon />
              </button>
            </div>
          )}
        </div>
        {type === 'publications' && <Publications data={sliceList} />}
        {type === 'verses' && <Verses />}
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default Writings;
