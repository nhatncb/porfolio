import ArrowLeftIcon from '@icons/arrow-left.svg';
import ArrowRightIcon from '@icons/arrow-right.svg';
import PlusIcon from '@icons/plus-circle.svg';
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
        <div className="flex flex-1">
          <div className="black-right-border black-bottom-border flex-1">
            <div>
              <div className="max-w-[1056px] p-16 mx-auto grid-cols-12 grid gap-x-6 gap-y-[88px] whitespace-pre-line">
                <div className="col-span-2">{detail?.verse1}</div>
                <div className="col-span-10" />
                <div className="col-span-2" />
                <div className="col-span-2">{detail?.verse2}</div>
                <div className="col-span-8"></div>
                <div className="col-span-4"></div>
                <div className="col-span-2" />
                <div className="col-span-6">{detail?.verse3}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-12 py-[46px] text-right black-bottom-border text-[32px] font-bold">
          {detail?.title}
        </div>
        <div className="flex py-6 px-[48px] justify-between">
          <Link className="flex" to="/writings/verses">
            <PlusIcon />
            <div className="ml-2 text-[12px] font-bold leading-[18px]">verse list</div>
          </Link>
          <div className="flex gap-6">
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
