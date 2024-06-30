import ArrowLeftIcon from 'assets/icons/arrow-left.svg';
import ArrowRightIcon from 'assets/icons/arrow-right.svg';
import BlackArrowRightIcon from 'assets/icons/black-arrow-right.svg';
import PlusIcon from 'assets/icons/plus-circle.svg';
import useList from 'hooks/useList';
import type { IBookItem } from 'models/books/types';
import { Link, useNavigate, useParams } from 'react-router-dom';
import helpers from 'utils/helpers';

const BookDetail = () => {
  const navigate = useNavigate();
  const { publicationId } = useParams();
  const { list: data } = useList<IBookItem>({ collectionName: 'books', staleTime: Infinity });
  const detail = data.find((book) => book.id === publicationId);

  const handleNavigate = (next?: boolean) => {
    const currentIndex = data.findIndex((book) => book.id === publicationId);
    if (next) {
      if (currentIndex < data.length - 1) {
        navigate(`/writings/publications/${data[currentIndex + 1]?.id}`);
      }
      if (currentIndex === data.length - 1) {
        navigate(`/writings/publications/${data[0]?.id}`);
      }
    } else {
      if (currentIndex > 0) {
        navigate(`/writings/publications/${data[currentIndex - 1]?.id}`);
      }
      if (currentIndex === 0) {
        navigate(`/writings/publications/${data[data.length - 1]?.id}`);
      }
    }
  };

  return (
    <div className="h-screen bg-white flex flex-col flex-1">
      <div className="px-12 py-8 black-bottom-border h-[136px] flex items-center">
        <p className="m-0 title-text font-semibold line-clamp-2">{detail?.name}</p>
      </div>
      <div className="flex flex-1 overflow-hidden">
        <div className="black-right-border black-bottom-border flex flex-col flex-1">
          <div className="py-[18px] px-12 black-bottom-border normal-text font-medium min-h-[57px]">
            {detail?.author}
          </div>
          <div className="p-16 whitespace-pre-line overflow-auto">
            <span className="mx-auto max-w-[775px] block normal-text !leading-[20px]">
              {detail?.aboutContent}
            </span>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="px-12 py-10 w-[456px] flex-1 overflow-auto">
            <img alt="" className="w-auto h-auto max-h-[100%] mx-auto" src={detail?.imageUrl.url} />
          </div>
          <div
            className={`grid ${
              detail?.buyUrls[1] ? 'grid-cols-[50%_50%]' : ''
            } black-top-border black-bottom-border`}
          >
            <div
              className={`flex gap-1 text-[12px] leading-[18px] w-full ${
                detail?.buyUrls[1] ? 'black-right-border' : ''
              }items-center justify-center min-h-8 py-[17px] svg-16 pointer`}
              onClick={() =>
                detail?.buyUrls[0]?.url && window.open(helpers.formatUrl(detail?.buyUrls[0]?.url))
              }
            >
              <BlackArrowRightIcon />
              <div className="normal-text font-medium">{detail?.buyUrls[0]?.displayUrl}</div>
            </div>
            {detail?.buyUrls[1] && (
              <div
                className="flex gap-1 text-[12px] leading-[18px] w-full items-center justify-center min-h-8 py-[17px] svg-16 pointer"
                onClick={() =>
                  detail?.buyUrls[1]?.url && window.open(helpers.formatUrl(detail?.buyUrls[1]?.url))
                }
              >
                <BlackArrowRightIcon />
                <div className="normal-text font-medium">{detail?.buyUrls[1]?.displayUrl}</div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex-shrink-0 flex py-6 px-[48px] justify-between">
        <Link className="flex items-center gap-[6px]" to="/writings/publications">
          <PlusIcon />
          <div className="normal-text font-medium">publication list</div>
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
