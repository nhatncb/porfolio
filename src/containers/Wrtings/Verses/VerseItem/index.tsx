const VerseItem = ({ data }: { data: { time: string; title: string; author: string } }) => {
  return (
    <div className="flex black-bottom-border justify-between mb-9 items-end">
      <div className="flex gap-6 items-end">
        <div className="text-[14px] leading-[18px] min-w-[84px]">{data.time}</div>
        <div className="text-[20px] font-bold leading-[24px]">{data.title}</div>
      </div>
      <div>
        <div className="text-[14px] leading-[18px] ">{data.author}</div>
      </div>
    </div>
  );
};

export default VerseItem;
