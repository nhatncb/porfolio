import dayjs from 'dayjs';
import type { IArtworkItem } from 'models/artwork/types';
import { Link } from 'react-router-dom';

const ArtworkItem = ({ data, activeType }: { data: IArtworkItem; activeType: string }) => {
  return (
    <div className="black-right-border">
      <div className="pt-[88px] px-6 flex flex-col justify-between h-full">
        <div className="px-[24px]">
          <Link to={`/artworks/${activeType}/${data.id}`}>
            <div className="text-[20px] leading-[24px] font-semibold min-h-[78px] mb-6 line-clamp-3">
              {data.name}
            </div>
          </Link>
          <div className="normal-text">
            {data.place} {'\n'}
            {dayjs(data.time).format('YYYY')}
          </div>
          <div className="mt-10">
            {data.tag.map((tag) => (
              <Link
                className="text-[12px] leading-4 block font-medium"
                key={tag}
                to={`/artworks/${tag}`}
              >
                #{tag.toLowerCase()}
              </Link>
            ))}
          </div>
        </div>
        <img alt="" src={data.thumbnailImage} />
      </div>
    </div>
  );
};

export default ArtworkItem;
