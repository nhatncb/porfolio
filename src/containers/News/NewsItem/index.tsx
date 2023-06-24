import MapPinIcon from '@icons/map-pin.svg';

const NewsItem = () => {
  return (
    <div className="flex ">
      <div className="flex flex-col rounded-lg data-container black-border w-[124px] h-[124px]">
        <div className="year-container text-white text-center bg-[black] py-1 px-[10px] rounded-tr-lg rounded-tl-lg">
          2023
        </div>
        <div className="flex-1">
          <div className="font-extrabold text-center mt-4 leading-6	">MAR</div>
          <div className="font-extrabold text-[28px] text-center mt-0.5 leading-9">16</div>
        </div>
      </div>
      <div className="info-container flex-1 ml-6">
        <div className="font-extrabold text-lg">
          NERA Conference - Roundtable Discussion: Parallel Session 4 - NW22 Roundtable Discussion
        </div>
        <div className="flex gap-2 mt-2.5">
          <MapPinIcon />
          <div className="font-bold text-sm flex-1">
            Thursday, March 16th, 2023 at 12:45pm - 2:15pm
          </div>
        </div>
        <div className="flex gap-2 mt-1.5">
          <MapPinIcon />
          <div className="font-bold text-sm flex-1">
            P32 N020.109, seminarrom (20), The Auditorium Athene 2 at Pilestredet 46, OsloMet, Oslo,
            Norway
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
