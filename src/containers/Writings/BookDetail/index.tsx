import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import PlusIcon from 'assets/icons/plus-circle.svg';
import RightDownloadIcon from 'assets/icons/right_download.svg';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { data } from '../Books/data';

const BookDetail = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const detail = data.find((book) => book.id === bookId);

  const handleNavigate = (next?: boolean) => {
    const currentIndex = data.findIndex((book) => book.id === bookId);
    if (next) {
      if (currentIndex < data.length - 1) {
        navigate(`/writings/books/${data[currentIndex + 1]?.id}`);
      }
      if (currentIndex === data.length - 1) {
        navigate(`/writings/books/${data[0]?.id}`);
      }
    } else {
      if (currentIndex > 0) {
        navigate(`/writings/books/${data[currentIndex - 1]?.id}`);
      }
      if (currentIndex === 0) {
        navigate(`/writings/books/${data[data.length - 1]?.id}`);
      }
    }
  };

  return (
    <div className="h-screen bg-white flex flex-col flex-1">
      <div className="px-12 py-8 black-bottom-border">
        <p className="m-0 text-[32px] font-bold">{detail?.title}</p>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="black-right-border black-bottom-border flex flex-col flex-1">
          <div className="py-[27px] px-12 text-right black-bottom-border font-bold">
            {detail?.author}
          </div>
          <div className="p-16 whitespace-pre-line overflow-auto h-full">
            <span className="mx-auto max-w-[775px] block">{detail?.content}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="px-12 py-10 w-[456px] flex-1">
            <img alt="" className="w-full" src={detail?.image} />
          </div>
          <div className="grid grid-cols-[50%_50%] black-top-border black-bottom-border">
            <div className="flex gap-2 text-[12px] font-bold leading-[18px] w-full black-right-border items-center justify-center min-h-8 py-[27px] ">
              <RightDownloadIcon />
              <div>amazon</div>
            </div>
            <div className="flex gap-2 text-[12px] font-bold leading-[18px] w-full items-center justify-center min-h-8 py-[27px] ">
              <RightDownloadIcon />
              <div>amazon</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 flex py-6 px-[48px] justify-between">
        <Link className="flex items-center" to="/writings/books">
          <PlusIcon />
          <div className="ml-2 text-[12px] font-bold leading-[18px]">book list</div>
        </Link>
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
  );
};

export default BookDetail;
