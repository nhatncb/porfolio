import dayjs from 'dayjs';
import type { IArtworkItem } from 'models/artwork/types';
import { Link } from 'react-router-dom';

const ArtworkItem = ({
  data,
  activeType,
}: {
  data: IArtworkItem;
  activeType: 'performance' | 'sculpture' | 'installation' | 'collaboration' | 'video' | 'others';
}) => {
  return (
    <div className="flex-[0_0_25%] black-right-border">
      <div className="pt-[88px] px-6 flex flex-col justify-between h-full">
        <div className="px-[24px]">
          <Link to={`/artworks/${activeType}/${data.id}`}>
            <div className="text-[20px] leading-[24px] font-semibold min-h-[96px] mb-6 line-clamp-3">
              {data.name}
            </div>
          </Link>
          <div className="normal-text whitespace-pre">
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
