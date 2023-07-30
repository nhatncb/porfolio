import { animated, useTransition } from '@react-spring/web';
import NewItem from 'components/NewItem';
import React from 'react';

const NewsContent = ({ data, page }: { data: any[]; page: number }) => {
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
            {data.map((_, index) => (
              <NewItem key={index} />
            ))}
          </>
        </animated.div>
      ))}
    </animated.div>
  );
};

export default NewsContent;
