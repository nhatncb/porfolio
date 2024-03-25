import ClockIcon from 'assets/icons/clock.svg';
import MapPinIcon from 'assets/icons/map-pin.svg';
import dayjs from 'dayjs';
import type { INewsItem } from 'models/news/types';
import React from 'react';

const NewItem = ({ data }: { data: INewsItem }) => {
  return (
    <div className="flex">
      <div
        className="flex flex-col rounded-lg data-container black-border w-[124px] h-[124px] overflow-hidden "
        style={{ border: '1px solid #000' }}
      >
        <div className="year-container normal-text text-white text-center bg-[black] py-[5px] px-[10px] font-medium">
          {data.startDate ? dayjs(data.startDate).format('YYYY') : '-'}
        </div>
        <div className="flex-1">
          <div className="font-semibold text-center mt-4 leading-6">
            {data.startDate ? dayjs(data.startDate).format('MMM').toLowerCase() : '-'}
          </div>
          <div className="font-semibold text-[28px] text-center mt-0.5 leading-9">
            {data.startDate ? dayjs(data.startDate).format('DD') : '-'}
          </div>
        </div>
      </div>
      <div className="info-container flex-1 ml-6">
        <div className="font-semibold line-clamp-2 text-[18px] leading-[24px]">{data.name}</div>
        <div className="flex gap-2 mt-3">
          <ClockIcon />
          <div className="normal-text flex-1">
            {dayjs(data.startDate).format('dddd')}, {dayjs(data.startDate).format('MMM')}{' '}
            {dayjs(data.startDate).format('DD')}, {dayjs(data.startDate).format('YYYY')}{' '}
            {data.endDate && '-'} {dayjs(data.startDate).format('dddd')},{' '}
            {data.endDate && dayjs(data.endDate).format('MMM')}{' '}
            {data.endDate && dayjs(data.endDate).format('DD')}
            {data.endDate && ', '}
            {data.endDate && dayjs(data.endDate).format('YYYY')} at{' '}
            {dayjs(data.time[0]).format('HH:mmA').toLowerCase()} -{' '}
            {dayjs(data.time[1]).format('HH:mmA').toLowerCase()}
          </div>
        </div>
        <div className="flex gap-2 mt-2">
          <MapPinIcon />
          <div className="normal-text flex-1">{data.place}</div>
        </div>
        {data.description && <div className="normal-text flex-1 mt-3">{data.description}</div>}
      </div>
    </div>
  );
};

export default NewItem;
