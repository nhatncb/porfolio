import { animated, useSprings } from '@react-spring/web';
import useList from 'hooks/useList';
import type { IResearchItem } from 'models/research/types';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Research = () => {
  const { list: researchList } = useList<IResearchItem>({
    collectionName: 'research',
    staleTime: Infinity,
  });
  const MENUS = researchList.map((item) => ({
    label: item.title,
    to: `/research/${item.id}`,
  }));

  const { pathname } = useLocation();
  const [springs] = useSprings(
    researchList.length,
    (i) => ({
      borderColor: MENUS[i]?.to === pathname ? '#000' : 'transparent',
    }),
    [pathname],
  );
  return (
    <div className="h-screen bg-white flex flex-1">
      <div className="flex-1 flex flex-col">
        <div className="header h-[104px]">
          <p className="m-0 page-title">Research</p>
        </div>
        <div className="black-bottom-border">
          <div className="px-[48px] py-[18px] flex-1 gap-4 flex min-h-[72px] w-[calc(100vw_-_72px)] overflow-auto	">
            {springs.map((props, index) => (
              <Link
                className="max-w-[160px] flex-shrink-0"
                key={MENUS[index]?.to}
                to={MENUS[index]?.to || ''}
              >
                <animated.button
                  className={`text-btn ${MENUS[index]?.to !== pathname ? 'hover-underline' : ''}`}
                  style={props}
                >
                  <div className="line-clamp-1">{MENUS[index]?.label}</div>
                </animated.button>
              </Link>
            ))}
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Research;
