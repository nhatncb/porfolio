import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import NewItem from 'components/NewItem';
import React from 'react';

const NewsContent = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 px-12 py-16 overflow-auto grid grid-cols-2 gap-x-12 gap-y-16 justify-center content-center">
        <NewItem />
        <NewItem />
        <NewItem />
        <NewItem />
        <NewItem />
        <NewItem />
      </div>
      <div className="flex h-[72px] px-[48px] black-top-border justify-end items-center">
        <div className="flex gap-4">
          <button>
            <ArrowLeftIcon />
          </button>
          <button>
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsContent;
