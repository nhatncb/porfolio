import { animated, to, useSpring } from '@react-spring/web';
import { useMove } from '@use-gesture/react';
import { Link } from 'react-router-dom';
import helpers from 'utils/helpers';

const HomePage = () => {
  const [props, api] = useSpring(() => ({
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

  return (
    <animated.section className="bg-white flex-1 py-[24px] pr-[24px] relative" {...onMoveMouse()}>
      <Link to="/statement">
        <img
          className="w-full h-full object-cover"
          draggable={false}
          src={helpers.getAssetUrl('/images/bg_home.png')}
        />
        <animated.p
          className="flex items-center justify-center text-[12px] text-[#ffffff] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#000000]/20 w-[98px] h-[40px] rounded-[4px]"
          style={{
            ...spring,
            transform: to(props.xy, (x, y) => {
              return `translate3d(${x / 20}px,${y / 20}px,0)`;
            }),
          }}
        >
          tap to explore
        </animated.p>
      </Link>
    </animated.section>
  );
};

export default HomePage;
