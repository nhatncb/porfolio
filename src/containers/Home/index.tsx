import { animated, useSpring, useTransition } from '@react-spring/web';
import { useMove } from '@use-gesture/react';
import useGlobalState from 'hooks/useGlobalState';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import helpers from 'utils/helpers';

const HomePage = () => {
  const { bgIndex, setBgIndex } = useGlobalState();
  const [, api] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));
  const spring = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
    loop: {
      reverse: true,
    },
    config: { duration: 1500 },
  });
  const onMoveMouse = useMove(({ xy }) => {
    const [cx, cy] = xy;
    api.start({
      xy: [cx - window.innerWidth / 2, cy - window.innerHeight / 2],
    });
  });
  const transitions = useTransition(bgIndex, {
    key: bgIndex,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
    config: { duration: 800 },
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBgIndex(1);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [bgIndex, setBgIndex]);

  return (
    <animated.section className="bg-white flex-1 py-[24px] pr-[24px] relative" {...onMoveMouse()}>
      <Link to="/statement">
        {transitions((style, item) => (
          <animated.div className="w-full h-full" style={style}>
            <img
              className="w-full h-full object-cover"
              draggable={false}
              src={helpers.getAssetUrl(`/images/bg_home_${item}.png`)}
            />
            <animated.p
              className="flex items-center justify-center normal-text leading-4 text-[#ffffff] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000000]/20 w-[114px] h-[40px] rounded-[4px]"
              style={{
                ...spring,
              }}
            >
              tap to explore
            </animated.p>
          </animated.div>
        ))}
      </Link>
    </animated.section>
  );
};

export default HomePage;
