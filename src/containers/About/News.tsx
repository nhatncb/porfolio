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
    <div className="flex flex-col h-full">
      {transitions((style) => (
        <animated.div
          className="flex-1 px-12 py-16 overflow-auto grid grid-cols-2 gap-x-12 gap-y-16 justify-center content-center"
          style={style}
        >
          <NewItem />
          <NewItem />
          <NewItem />
          <NewItem />
          <NewItem />
          <NewItem />
        </animated.div>
      ))}
      <div className="flex h-[72px] px-[48px] black-top-border justify-end items-center">
        <div className="flex gap-4">
          <button onClick={() => setPage(page - 1)}>
            <ArrowLeftIcon />
          </button>
          <button onClick={() => setPage(page + 1)}>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
