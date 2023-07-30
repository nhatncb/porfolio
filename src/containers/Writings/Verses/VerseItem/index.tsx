import { Link } from 'react-router-dom';

const VerseItem = ({
  data,
}: {
  data: { time: string; title: string; author: string; id: string };
}) => {
  return (
    <Link
      className="flex black-bottom-border justify-between mb-9 items-end"
      to={`/writings/verses/${data.id}`}
    >
      <div className="flex gap-6 items-end">
        <div className="normal-text min-w-[84px]">{data.time}</div>
        <div className="text-[20px] font-semibold leading-[24px]">{data.title}</div>
      </div>
      <div>
        <div className="normal-text ">{data.author}</div>
      </div>
    </Link>
  );
};

export default VerseItem;
