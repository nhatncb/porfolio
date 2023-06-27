import React from 'react';

const StatementContent = () => {
  return (
    <div className="flex h-full">
      <div className="max-w-[498px] p-[24px] flex-1 flex items-center justify-center black-right-border">
        <div>
          <img alt="dnlx" src="/images/Profile.png" />
          <div className="mt-8">
            <div className="flex flex-col gap-1">
              <div className="text-[14px]">B: 1986, Ho Chi Minh City (HCMC), Vietnam</div>
              <div className="text-[14px]">E: dnlapxuan@gmail.com</div>
              <div className="text-[14px]">T: +84909305100</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex p-[24px] justify-center items-center">
        <div className="max-w-[594px]">
          <div className="text-xl">
            Do Nguyen Lap Xuan, aka Lap-Xuan Do-Nguyen, MA, is a recipient of the Scientia PhD
            scholarship at the University of New South Wales. She is{' '}
            <span className="font-bold">an artist & social practitioner</span> working with
            <span className="font-bold">performative fragments</span> of words, visualization,
            movement, and sound. Her works explore the{' '}
            <span className="font-bold">dimensions of voice</span> across the themes of identity,
            displacement, marginalisation, and liminality.
          </div>
          <div className="signature mt-20 text-right text-[32px]">Do Nguyen Lap Xuan</div>
        </div>
      </div>
    </div>
  );
};

export default StatementContent;
