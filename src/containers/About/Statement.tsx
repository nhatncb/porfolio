import { animated, useSprings } from '@react-spring/web';
import React from 'react';

const StatementContent = () => {
  const [springs] = useSprings(
    3,
    (i) => ({
      from: { opacity: 0 },
      to: { opacity: 1 },
      delay: i > 0 ? 1500 : 500,
      config: { duration: 500, damping: 200 },
    }),
    [],
  );
  return (
    <div className="flex h-full">
      <div className="max-w-[498px] p-[24px] flex-1 flex items-center justify-center black-right-border">
        <div>
          <img alt="dnlx" height={412} src="/images/Profile.png" width={268} />
          <div className="mt-8">
            <div className="flex flex-col gap-[2px]">
              <div className="normal-text">B: 1986, Ho Chi Minh City (HCMC), Vietnam</div>
              <div className="normal-text">E: dnlapxuan@gmail.com</div>
              <div className="normal-text">T: +84909305100</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex p-[24px] justify-center items-center">
        <div className="max-w-[594px] translate-y-[-45px]">
          <div className="text-xl">
            <animated.span className="inline-block" style={{ ...springs[0] }}>
              Đỗ Nguyễn Lập Xuân, aka Lap-Xuan Do-Nguyen, MA, is a recipient of the Scientia PhD
              scholarship at the University of New South Wales. She is an{' '}
              <animated.span className="inline-block font-bold" style={{ ...springs[1] }}>
                artist & social practitioner
              </animated.span>{' '}
              working with{' '}
              <animated.span className="inline-block font-bold" style={{ ...springs[1] }}>
                performative fragments
              </animated.span>{' '}
              of words, visualization, movement, and sound. Her works explore the{' '}
              <animated.span className="inline-block font-bold" style={{ ...springs[1] }}>
                dimensions of voice
              </animated.span>{' '}
              across the themes of identity, displacement, marginalisation, and liminality.
            </animated.span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatementContent;
