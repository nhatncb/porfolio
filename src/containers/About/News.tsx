import { animated, useTransition } from '@react-spring/web';
import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import NewItem from 'components/NewItem';
import React, { useState } from 'react';

const NewsContent = () => {
  const [page, setPage] = useState(1);
  const transitions = useTransition(page, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
    config: { duration: 300 },
  });
  return (
    <animated.div className="flex flex-col h-full">
      {transitions(() => (
        <animated.div
          className={`flex-1 p-12 overflow-auto grid grid-cols-2 gap-x-12 gap-y-16 justify-center ${
            page === 1 ? 'content-center' : ''
          }`}
          // style={style}
        >
          {page === 1 ? (
            <>
              <NewItem />
              <NewItem />
              <NewItem />
              <NewItem />
            </>
          ) : (
            <>
              <NewItem />
              <NewItem />
            </>
          )}
        </animated.div>
      ))}
      <div className="flex h-[72px] px-[48px] black-top-border justify-end items-center">
        <div className="flex gap-4">
          <button disabled={page === 1} onClick={() => setPage(page - 1)}>
            <ArrowLeftIcon />
          </button>
          <button disabled={page === 2} onClick={() => setPage(page + 1)}>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </animated.div>
  );
};

export default NewsContent;
