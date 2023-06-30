import { data } from '../data';
import ArtworkItem from './ArtworkItem';

const ArtworkList = ({
  type = 'performance',
}: {
  type?: 'performance' | 'sculpture' | 'installation' | 'collaboration' | 'video' | 'others';
}) => {
  const list = data.filter((item) => item.tags.includes(type));
  return (
    <div className="flex-1 flex content-container overflow-auto w-[calc(100vw_-_72px)] [&>*:nth-child(4)]:border-r-0">
      {list.map((artwork, index) => (
        <ArtworkItem activeType={type} data={artwork} key={index} />
      ))}
    </div>
  );
};

export default ArtworkList;
