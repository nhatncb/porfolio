import { animated, useSprings } from '@react-spring/web';
import React from 'react';

const StatementContent = () => {
  const [springs] = useSprings(
    3,
    (i) => ({
      from: { scale: 0.9, fontWeight: 'normal' },
      to: { scale: 1, fontWeight: 'bold' },
      delay: 500 * i,
      config: { duration: 500, damping: 200 },
    }),
    [],
  );
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
            Đỗ Nguyễn Lập Xuân, aka Lap-Xuan Do-Nguyen, MA, is a recipient of the Scientia PhD
            scholarship at the University of New South Wales. She is an{' '}
            <animated.span className="inline-block" style={{ ...springs[0] }}>
              artist & social practitioner
            </animated.span>{' '}
            working with{' '}
            <animated.span className="inline-block" style={{ ...springs[1] }}>
              performative fragments
            </animated.span>{' '}
            of words, visualization, movement, and sound. Her works explore the{' '}
            <animated.span className="inline-block" style={{ ...springs[2] }}>
              dimensions of voice
            </animated.span>{' '}
            across the themes of identity, displacement, marginalisation, and liminality.
          </div>
          <div className="signature mt-20 text-right text-[32px]">Do Nguyen Lap Xuan</div>
        </div>
      </div>
    </div>
  );
};

export default StatementContent;
