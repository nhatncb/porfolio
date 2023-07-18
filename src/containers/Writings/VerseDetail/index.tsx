import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import PlusIcon from 'assets/icons/plus-circle.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { data } from '../Verses/data';

const VerseDetail = () => {
  const { verseId } = useParams();
  const navigate = useNavigate();
  const detail = data.find((item) => item.id === verseId);

  const handleNavigate = (next?: boolean) => {
    const currentIndex = data.findIndex((item) => item.id === detail?.id);
    if (next) {
      if (currentIndex < data.length - 1) {
        navigate(`/writings/verses/${data[currentIndex + 1]?.id}`);
      }
      if (currentIndex === data.length - 1) {
        navigate(`/writings/verses/${data[0]?.id}`);
      }
    } else {
      if (currentIndex > 0) {
        navigate(`/writings/verses/${data[currentIndex - 1]?.id}`);
      }
      if (currentIndex === 0) {
        navigate(`/writings/verses/${data[data.length - 1]?.id}`);
      }
    }
  };
  return (
    <div className="h-screen bg-white flex flex-1">
      <div className="flex-1 flex flex-col">
        <div className="flex-1 black-bottom-border px-[48px] grid-cols-12 grid-rows-6	grid gap-[24px] whitespace-pre-line">
          <div className="row-start-2 col-start-2 col-span-2 relative">
            <span className="absolute top-0 left-0">{detail?.verse1}</span>
          </div>
          <div className="row-start-3 col-start-4 col-span-2 relative">
            <span className="absolute top-0 left-0">{detail?.verse2}</span>
          </div>
          <div className="row-start-4 col-start-6 col-span-2 relative">
            <span className="absolute top-0 left-0">{detail?.verse3}</span>
          </div>
        </div>
        <div className="h-[127px] px-12 py-[25px] flex justify-end items-center black-bottom-border text-[32px] font-bold">
          {detail?.title}
        </div>
        <div className="flex py-6 px-[48px] justify-between">
          <Link className="flex items-center svg-24 gap-3" to="/writings/verses">
            <PlusIcon />
            <div className="normal-text font-bold">verse list</div>
          </Link>
          <div className="flex gap-8">
            <div className="text-[12px] flex gap-1">
              <div>HCMC, Vietnam</div>
              <div>|</div>
              <div>2019</div>
            </div>
            <div className="flex gap-6 items-center">
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

export default VerseDetail;
