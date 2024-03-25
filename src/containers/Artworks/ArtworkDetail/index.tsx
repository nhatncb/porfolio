import { animated, useSpring, useSprings } from '@react-spring/web';
import ArrowDownIcon from 'assets/icons/arrow-down.svg';
import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import PlusIcon from 'assets/icons/plus-circle.svg';
import dayjs from 'dayjs';
import useFetch from 'hooks/useFetch';
import useList from 'hooks/useList';
import type { IArtworkItem } from 'models/artwork/types';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import TruncateMarkup from 'react-truncate-markup';
import helpers from 'utils/helpers';

function useFirstRender() {
  const ref = useRef(true);
  const firstRender = ref.current;
  ref.current = false;
  return firstRender;
}

const ArtworkDetail = () => {
  const isFirstRender = useFirstRender();
  const ref = useRef<HTMLDivElement>(null);
  const { id = '', type = '' } = useParams();
  const { data: detail } = useFetch<IArtworkItem>({
    queryKey: ['artworks', id],
    collectionName: 'artworks',
    id,
  });
  const { list } = useList<IArtworkItem>({ collectionName: 'artworks', staleTime: Infinity });
  const images = detail?.contents || [];
  const navigate = useNavigate();
  const [activeArt, setActiveArt] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [springs] = useSprings(
    images.length,
    (index) => ({
      borderColor: index === activeArt ? '#000' : 'transparent',
      opacity: index === activeArt ? 1 : 0,
    }),
    [activeArt],
  );
  const [spring, api] = useSpring(() => ({ height: '127px' }), []);

  useEffect(() => {
    if (ref.current && !isFirstRender) {
      api.start({
        height: showMore ? `${(ref.current?.offsetHeight || 0) + 46}px` : '127px',
      });
    }
  }, [api, isFirstRender, ref, showMore]);

  const handleNavigate = (next?: boolean) => {
    const currentIndex = list.findIndex((item) => item.id === id);
    if (next) {
      if (currentIndex < list.length - 1) {
        navigate(`/artworks/${type}/${list[currentIndex + 1]?.id}`);
      }
      if (currentIndex === list.length - 1) {
        navigate(`/artworks/${type}/${list[0]?.id}`);
      }
    } else {
      if (currentIndex > 0) {
        navigate(`/artworks/${type}/${list[currentIndex - 1]?.id}`);
      }
      if (currentIndex === 0) {
        navigate(`/artworks/${type}/${list[list.length - 1]?.id}`);
      }
    }
  };
  const renderTagSection = () => {
    return (
      <div className="flex justify-between mt-[8px]">
        <div
          className="cursor-pointer font-medium normal-text flex gap-1"
          onClick={() => setShowMore(!showMore)}
        >
          <div className={`ease-in ${!showMore ? '' : 'rotate-180'}`}>
            <ArrowDownIcon />
          </div>
          {!showMore ? 'show more' : 'show less'}
        </div>
        <div className="flex gap-3">
          {detail?.tag.map((tag) => (
            <Link key={tag} to={`/artworks/${tag}`}>
              <div className="text-[12px] leading-4 font-medium">#{tag.toLowerCase()}</div>
            </Link>
          ))}
        </div>
      </div>
    );
  };
  const readMoreEllipsis = (
    <span>
      ...
      <br />
      {renderTagSection()}
    </span>
  );
  return (
    <div className="h-screen bg-white flex flex-1">
      <div className="flex flex-col justify-between w-full">
        <div
          className={`flex ${
            images.length > 1 ? 'py-16 px-12 pr-0' : 'p-0 flex-1'
          } overflow-hidden`}
        >
          {images && images[activeArt]?.type === 'IMAGE' && (
            <animated.div
              className="flex-1"
              key={activeArt}
              style={{
                opacity: springs[activeArt]?.opacity,
              }}
            >
              {images[activeArt] && (
                <img
                  alt=""
                  className="w-full h-full object-cover"
                  src={images[activeArt]?.data.url}
                />
              )}
            </animated.div>
          )}
          {images && images[activeArt]?.type === 'VIDEO' && (
            <animated.div
              className="flex-1"
              key={activeArt}
              style={{
                opacity: springs[activeArt]?.opacity,
              }}
            >
              <ReactPlayer
                height="100%"
                style={{ aspectRatio: 564 / 900 }}
                url={images[activeArt]?.data.url}
                width="100%"
              />
            </animated.div>
          )}
          {images.length > 1 && (
            <div className="flex flex-col pr-12 overflow-auto ml-[90px]">
              {springs.map((style, index) => {
                if (images[index]) {
                  return (
                    <animated.img
                      alt=""
                      className={`transparent-border p-2 not:(:first):-mt-[8.5px] -mb-[0.5px] cursor-pointer object-cover max-h-[132px] max-w-[212px]`}
                      height={132}
                      key={index}
                      onClick={() => setActiveArt(index)}
                      src={
                        detail?.contents[index]?.type === 'IMAGE'
                          ? detail?.contents[index]?.data.url
                          : helpers.getVideoThumbnail(detail?.contents[index]?.data.url || '')
                      }
                      style={{ borderColor: style.borderColor }}
                      width={212}
                    />
                  );
                }
                return null;
              })}
            </div>
          )}
        </div>
        <div className="bottom-0 w-full">
          <div className="flex">
            <div className="w-full flex items-center py-[27px] h-[127px] px-[48px] max-w-[648px] black-top-border">
              <div className="text-[28px] leading-8 font-semibold w-full">{detail?.name}</div>
            </div>
            <div className="relative w-full">
              <animated.div
                className={`bg-white w-full px-10 overflow-hidden absolute bottom-0 right-0 py-[23px] black-top-border black-left-border ${
                  showMore ? 'opacity-[0.85]' : 'opacity-1'
                }`}
                style={spring}
              >
                <div ref={ref}>
                  {showMore ? (
                    <>
                      <div className={`normal-text`}>{detail?.content}</div>
                      {renderTagSection()}
                    </>
                  ) : (
                    <TruncateMarkup ellipsis={readMoreEllipsis} lines={4}>
                      <div className={`normal-text`}>{detail?.content}</div>
                    </TruncateMarkup>
                  )}
                </div>
              </animated.div>
            </div>
          </div>
          <div className="flex py-[23.5px] px-[48px] black-top-border justify-between">
            <Link className="flex items-center gap-[6px]" to={`/artworks/${type}`}>
              <PlusIcon />
              <div className="normal-text font-semibold hover-underline">artwork list</div>
            </Link>
            <div className="flex gap-8 items-center">
              <div className="flex align-middle text-[12px] leading-[16px] gap-1">
                <div>material: {detail?.material}</div>
                <div>|</div>
                <div>location: {detail?.place}</div>
                <div>|</div>
                <div>year: {detail?.time && dayjs(detail?.time).format('YYYY')}</div>
              </div>
              <div className="flex gap-4">
                <button onClick={() => handleNavigate()}>
                  <ArrowLeftIcon />
                </button>
                <button onClick={() => handleNavigate(true)}>
                  <ArrowRightIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
