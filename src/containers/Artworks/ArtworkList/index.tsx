import useList from 'hooks/useList';
import type { IArtworkItem } from 'models/artwork/types';

import ArtworkItem from './ArtworkItem';

const ArtworkList = ({
  type = 'performance',
}: {
  type?: 'performance' | 'sculpture' | 'installation' | 'collaboration' | 'video' | 'others';
}) => {
  const { list: data } = useList<IArtworkItem>({ collectionName: 'artworks', staleTime: Infinity });
  const list = data.filter((item) => item.tag.includes(type.toUpperCase())).slice(0, 4);
  return (
    <>
      {list.map((artwork, index) => (
        <ArtworkItem activeType={type} data={artwork || {}} key={index} />
      ))}
    </>
  );
};

export default ArtworkList;
