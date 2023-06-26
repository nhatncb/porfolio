import RightDownloadIcon from '@icons/right_download.svg';

const BookItem = ({
  data,
}: {
  data: { title: string; author: string; image: string; url1: string; url2: string };
}) => {
  return (
    <div className="min-w-[342px] max-w-[342px] black-right-border">
      <div className="pt-10 px-12">
        <div className="text-[20px] font-bold min-h-[96px] mb-6 line-clamp-3">{data.title}</div>
        <div className="text-[12px] font-bold mb-7 min-h-[32px] line-clamp-2">{data.author}</div>
        <div className="grid grid-cols-[50%_50%] black-top-border black-bottom-border py-3 mb-8">
          <div className="flex gap-1 text-[12px] font-bold leading-[18px] w-full black-right-border items-center justify-center min-h-8">
            <RightDownloadIcon />
            <div>{data.url1}</div>
          </div>
          <div className="flex gap-1 text-[12px] font-bold leading-[18px] w-full items-center justify-center min-h-8">
            <RightDownloadIcon />
            <div>{data.url2}</div>
          </div>
        </div>
        <img alt="" src={data.image} />
      </div>
    </div>
  );
};

export default BookItem;
