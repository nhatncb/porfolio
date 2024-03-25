import { animated, useSprings } from '@react-spring/web';
import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import useList from 'hooks/useList';
import type { IArtworkItem } from 'models/artwork/types';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import ArtworkList from './ArtworkList';

const Artworks = () => {
  const [slice, setSlice] = useState(0);
  const { type = 'performance' } = useParams();
  const { list: data } = useList<IArtworkItem>({ collectionName: 'artworks', staleTime: Infinity });
  const list = data.filter((item) => item.tag.includes(type.toUpperCase()));
  const sliceList = list.slice(slice * 4, (slice + 1) * 4);
  const handleNavigate = (next?: boolean) => {
    if (next) {
      if (slice < list.length / 4 - 1) {
        return setSlice((prev) => prev + 1);
      }
      if (slice >= list.length / 4 - 1) {
        return setSlice(0);
      }
    } else {
      if (slice > 0) {
        return setSlice((prev) => prev - 1);
      }
      if (slice === 0) {
        return setSlice(Math.floor(list.length / 4));
      }
    }
    return null;
  };
  const { list: tagList } = useList<{ name: string }>({
    collectionName: 'tag',
    staleTime: Infinity,
    order: 'asc',
  });
  const [springs] = useSprings(
    tagList.length,
    (i) => ({
      borderColor: tagList[i]?.name.toLowerCase() === type ? '#000' : 'transparent',
    }),
    [type],
  );

  return (
    <div className="h-screen bg-white flex">
      <div className="flex-1 flex flex-col">
        <div className="header h-[104px]">
          <p className="m-0 page-title">Artworks</p>
        </div>
        <div className="flex flex-shrink-0 black-bottom-border h-[72px]">
          <div className="flex flex-auto px-[48px] gap-4 black-right-border items-center">
            {springs.map((props, index) => (
              <Link
                key={tagList[index]?.name}
                to={`/artworks/${tagList[index]?.name.toLowerCase() || ''}`}
              >
                <animated.button
                  className={`text-btn ${
                    tagList[index]?.name.toLocaleLowerCase() !== type ? 'hover-underline' : ''
                  }`}
                  style={{ borderColor: props.borderColor }}
                >
                  #{tagList[index]?.name.toLocaleLowerCase()}
                </animated.button>
              </Link>
            ))}
          </div>
          <div className="basis-[160px] flex justify-center items-center gap-[12px]">
            <button onClick={() => handleNavigate()}>
              <ArrowLeftIcon />
            </button>
            <button onClick={() => handleNavigate(true)}>
              <ArrowRightIcon />
            </button>
          </div>
        </div>
        <div className="flex-1 flex content-container [&>*:nth-child(4)]:border-r-0">
          <ArtworkList data={sliceList} type={type} />
        </div>
      </div>
    </div>
  );
};

export default Artworks;
