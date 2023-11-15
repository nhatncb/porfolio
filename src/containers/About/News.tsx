import { animated, useTransition } from '@react-spring/web';
import NewItem from 'components/NewItem';
import type { INewsItem } from 'models/news/types';
import React from 'react';

const NewsContent = ({ data, page }: { data: INewsItem[]; page: number }) => {
  const transitions = useTransition(page, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    exitBeforeEnter: true,
    config: { duration: 300 },
  });
  return (
    <animated.div className="flex flex-col h-full">
      {transitions((style) => (
        <animated.div
          className={`p-12 overflow-auto grid grid-cols-2 gap-x-12 gap-y-10 justify-center`}
          style={style}
        >
          <>
            {data.map((item, index) => (
              <NewItem data={item} key={index} />
            ))}
          </>
        </animated.div>
      ))}
    </animated.div>
  );
};

export default NewsContent;
