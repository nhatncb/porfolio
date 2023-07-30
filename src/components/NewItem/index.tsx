import ClockIcon from 'assets/icons/clock.svg';
import MapPinIcon from 'assets/icons/map-pin.svg';
import React from 'react';

const NewItem = () => {
  return (
    <div className="flex">
      <div
        className="flex flex-col rounded-lg data-container black-border w-[124px] h-[124px]"
        style={{ border: '1px solid #000' }}
      >
        <div className="year-container normal-text text-white text-center bg-[black] py-[5px] px-[10px] rounded-tr-lg rounded-tl-lg font-medium">
          2023
        </div>
        <div className="flex-1">
          <div className="font-semibold text-center mt-4 leading-6">mar</div>
          <div className="font-semibold text-[28px] text-center mt-0.5 leading-9">16</div>
        </div>
      </div>
      <div className="info-container flex-1 ml-6">
        <div className="font-semibold line-clamp-2 text-[18px] leading-[24px]">
          NERA Conference - Roundtable Discussion: Parallel Session 4 - NW22 Roundtable Discussion
        </div>
        <div className="flex gap-2 mt-3">
          <ClockIcon />
          <div className="normal-text flex-1">Thursday, March 16th, 2023 at 12:45pm - 2:15pm</div>
        </div>
        <div className="flex gap-2 mt-2">
          <MapPinIcon />
          <div className="normal-text flex-1">
            P32 N020.109, seminarrom (20), The Auditorium Athene 2 at Pilestredet 46, OsloMet, Oslo,
            Norway
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItem;
