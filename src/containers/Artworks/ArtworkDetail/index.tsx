import { animated, useSprings } from '@react-spring/web';
import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import PlusIcon from 'assets/icons/plus-circle.svg';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import { useNavigate, useParams } from 'react-router';
import TruncateMarkup from 'react-truncate-markup';

import { data } from '../data';

const ArtworkDetail = () => {
  const { id, type = '' } = useParams();
  const detail = data.find((item) => item.id === id);
  const list = data.filter((item) => item.tags.includes(type));
  const arts = detail?.arts || [];
  const navigate = useNavigate();
  const [activeArt, setActiveArt] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [springs] = useSprings(
    arts.length,
    (index) => ({
      borderColor: index === activeArt ? '#000' : 'transparent',
      opacity: index === activeArt ? 1 : 0,
    }),
    [activeArt],
  );

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
      <div className="flex justify-between mt-[10px]">
        <div
          className="cursor-pointer leading-4 font-bold text-[12px]"
          onClick={() => setShowMore(!showMore)}
        >
          {!showMore ? 'read more' : 'show less'}
        </div>
        <div className="flex gap-3">
          {detail?.tags.map((tag) => (
            <div className="text-[12px] leading-4 font-bold" key={tag}>
              #{tag}
            </div>
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
        <div className={`flex ${arts.length > 1 ? 'py-16 px-12' : 'p-0 flex-1'} overflow-hidden`}>
          <animated.div
            key={activeArt}
            style={{
              opacity: springs[activeArt]?.opacity,
            }}
          >
            {arts[activeArt]?.type === 'image' ? (
              <img
                alt=""
                src={arts[activeArt]?.url}
                style={{
                  width: arts.length > 1 ? 900 : '100vw',
                }}
              />
            ) : (
              <ReactPlayer height="100%" url={arts[activeArt]?.url} width="calc(100vw - 71px)" />
            )}
          </animated.div>
          {arts.length > 1 && (
            <div className="flex flex-col pr-12 overflow-auto ml-[90px]">
              {springs.map((style, index) => {
                if (arts[index]?.type === 'image') {
                  return (
                    <animated.img
                      alt=""
                      className={`transparent-border p-2 not:(:first):-mt-[8.5px] -mb-[0.5px]`}
                      height={132}
                      key={index}
                      onClick={() => setActiveArt(index)}
                      src={arts[index]?.url}
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
            <div className="w-full py-[45px] px-[48px] max-w-[648px] black-top-border">
              <div className="text-[32px] w-full leading-9">{detail?.title}</div>
            </div>
            <div className="relative w-full">
              <animated.div
                className={`min-h-[127px] bg-white w-full px-10 ${
                  showMore ? 'opacity-[0.85]' : 'opacity-1 h-full'
                } ${
                  showMore ? 'absolute' : ''
                } bottom-0 right-0 py-[23px] black-top-border black-left-border`}
              >
                <div>
                  {showMore ? (
                    <>
                      <div className={`leading-[18px] text-[12px]`}>{detail?.content}</div>
                      {renderTagSection()}
                    </>
                  ) : (
                    <TruncateMarkup ellipsis={readMoreEllipsis} lines={4}>
                      <div className={`leading-[18px] text-[12px]`}>{detail?.content}</div>
                    </TruncateMarkup>
                  )}
                </div>
              </animated.div>
            </div>
          </div>
          <div className="flex py-[45px] px-[48px] black-top-border justify-between">
            <div className="flex">
              <PlusIcon />
              <div className="ml-2 text-[12px] font-bold leading-[18px] hover-underline">
                view artwork list
              </div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="flex align-middle text-[11px] leading-[16px] gap-1">
                <div>material: bronze</div>
                <div>|</div>
                <div>location: Sydney, Australia</div>
                <div>|</div>
                <div>year: 2015</div>
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
