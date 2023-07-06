import { data } from '../data';
import ArtworkItem from './ArtworkItem';

const ArtworkList = ({
  type = 'performance',
}: {
  type?: 'performance' | 'sculpture' | 'installation' | 'collaboration' | 'video' | 'others';
}) => {
  const list = data.filter((item) => item.tags.includes(type)).slice(0, 4);
  return (
    <>
      {list.map((artwork, index) => (
        <ArtworkItem activeType={type} data={artwork} key={index} />
      ))}
    </>
  );
};

export default ArtworkList;
