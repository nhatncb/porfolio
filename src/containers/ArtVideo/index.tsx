import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import PlusIcon from 'assets/icons/plus-circle.svg';
import ReactPlayer from 'react-player';

const ArtVideo = () => {
  return (
    <div className="h-screen bg-white flex art-video-page">
      <div className="flex flex-col justify-between w-full">
        <div className="flex-1">
          <ReactPlayer
            height="100%"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
          />
        </div>
        <div className="bottom-0 w-full">
          <div className="flex black-top-border">
            <div className="w-full py-[45px] pl-[48px] max-w-[756px]">
              <div className="text-[32px] w-full">Where will we be after we depart?</div>
            </div>
            <div className="py-6">
              <div className="px-10 black-left-border">
                <div className="flex gap-3">
                  <div className="text-[11px] leading-4 font-bold">#sculpture</div>
                  <div className="text-[11px] leading-4 font-bold">#installation</div>
                </div>
                <div className="mt-2 leading-[18px] text-[12px]">
                  This work chronicles the personal experiences of a group of International Students
                  who were invited to create and perform a monologue to their future selves. These
                  individual portraits uncover the fragmented...
                </div>
                <div className="mt-[2px] font-bold text-[12px]">read more</div>
              </div>
            </div>
          </div>
          <div className="flex py-[45px] px-[48px] black-top-border justify-between">
            <div className="flex">
              <PlusIcon />
              <div className="ml-2 text-[12px] font-bold leading-[18px]">view artwork list</div>
            </div>
            <div className="flex gap-6 items-center">
              <div className="flex align-middle text-[11px] leading-[16px] font-bold gap-1">
                <div>material: bronze</div>
                <div>|</div>
                <div>location: Sydney, Australia</div>
                <div>|</div>
                <div>year: 2015</div>
              </div>
              <div className="flex gap-4">
                <ArrowLeftIcon />
                <ArrowRightIcon />
              </div>
            </div>
          </div>
        </div>
        {/* <div className={css({
        borderTop: '0.5px solid #000'
      })}>
        Eat Y Apple
      </div>
      <div className={css({
        pos: 'fixed',
        borderTop: '0.5px solid #000'
      })}>
        view artwork list
      </div> */}
      </div>
    </div>
  );
};

export default ArtVideo;
