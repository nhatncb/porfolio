import './styles.css';

import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import CloseIcon from 'assets/icons/close.svg';
import PlusIcon from 'assets/icons/plus-circle.svg';

const ArtPicture = () => {
  return (
    <div className="h-screen bg-white flex art-picture-page">
      <div className="flex flex-col justify-between w-full">
        <div className="flex py-16 pr-12 pl-[90px]">
          <div className="mr-[90px]">
            <img alt="" src="/images/DSC_0412_1.png" />
          </div>
          <div className="flex flex-col pr-12 gap-2">
            <img alt="" height={132} src="/images/DSC_0412_1.png" width={212} />
            <img alt="" height={132} src="/images/DSC_0412_2.png" width={212} />
            <img alt="" height={132} src="/images/DSC_0412_3.png" width={212} />
          </div>
        </div>
        <div className="bottom-0 w-full">
          <div className="flex black-top-border">
            <div className="w-full py-[45px] pl-[48px] max-w-[756px]">
              <div className="text-[32px] w-full">Eat Y Apple</div>
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
                <div
                  className="mt-[2px] font-bold text-[12px]"
                  onClick={() => {
                    (window as any).art_picture.showModal();
                  }}
                >
                  read more
                </div>
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
      </div>
      <dialog className="modal" id="art_picture">
        <form className="modal-box" method="dialog">
          <div className="close-icon" onClick={() => (window as any).art_picture.close()}>
            <CloseIcon />
          </div>
          <div className="flex gap-3 justify-end">
            <div className="text-[11px] leading-4 font-bold">#sculpture</div>
            <div className="text-[11px] leading-4 font-bold">#installation</div>
          </div>
          <div className="text-[24px] mt-10 font-[700]">Eat Y Apple</div>
          <div className="text-[12px] mt-8 text-[12px]">
            This work chronicles the personal experiences of a group of International Students who
            were invited to create and perform a monologue to their future selves. These individual
            portraits uncover the fragmented and often forgotten sides of educational migration: the
            decisions, the anticipation and the ensuing conflicts of identity. By weaving individual
            stories into a public conversation, the work discloses the physical and spiritual
            landscapes inhabited by our international student communities.
          </div>
        </form>
      </dialog>
    </div>
  );
};

export default ArtPicture;
