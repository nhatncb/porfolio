import RightDownloadIcon from 'assets/icons/right_download.svg';
import { Link } from 'react-router-dom';

const BookItem = ({
  data,
}: {
  data: { title: string; author: string; image: string; url1: string; url2: string; id: string };
}) => {
  return (
    <div className="w-1/4 black-right-border h-fit">
      <div className="">
        <div className="pt-10 px-12 pb-9">
          <Link to={`/writings/books/${data.id}`}>
            <div className="text-[20px] leading-6 font-bold min-h-[120px] mb-6 line-clamp-5">
              {data.title}
            </div>
          </Link>
          <div className="text-[12px] font-bold min-h-[32px] line-clamp-2 leading-4">
            {data.author}
          </div>
        </div>
        <div className="grid grid-cols-[50%_50%] black-top-border black-bottom-border">
          <div className="py-[15px] flex gap-1 text-[12px] font-bold leading-[18px] w-full black-right-border items-center justify-center min-h-8">
            <RightDownloadIcon />
            <div>{data.url1}</div>
          </div>
          <div className="py-[15px] flex gap-1 text-[12px] font-bold leading-[18px] w-full items-center justify-center min-h-8">
            <RightDownloadIcon />
            <div>{data.url2}</div>
          </div>
        </div>
        <div className="px-12 mt-10">
          <Link to={`/writings/books/${data.id}`}>
            <img alt="" className="mx-auto h-auto" src={data.image} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookItem;
