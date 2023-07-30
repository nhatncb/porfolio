import ArrowRight from 'assets/icons/black-arrow-right.svg';
import { Link } from 'react-router-dom';

const BookItem = ({
  data,
}: {
  data: { title: string; author: string; image: string; url1: string; url2: string; id: string };
}) => {
  return (
    <div className="w-1/4 black-right-border h-max">
      <div className="">
        <div className="py-10 px-12">
          <Link to={`/writings/books/${data.id}`}>
            <div className="text-[20px] leading-6 font-semibold min-h-[120px] mb-4 line-clamp-5">
              {data.title}
            </div>
          </Link>
          <div className="normal-text min-h-[36px] line-clamp-2 font-medium">{data.author}</div>
        </div>
        <div className="grid grid-cols-[50%_50%] black-top-border black-bottom-border">
          <div className="svg-16 py-[19px] flex gap-1 text-[12px] leading-[18px] w-full black-right-border items-center justify-center min-h-8 svg-24">
            <ArrowRight />
            <div className="normal-text font-medium">{data.url1}</div>
          </div>
          <div className="svg-16 py-[19px] flex gap-1 text-[12px] leading-[18px] w-full items-center justify-center min-h-8 svg-24">
            <ArrowRight />
            <div className="normal-text font-medium">{data.url2}</div>
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
