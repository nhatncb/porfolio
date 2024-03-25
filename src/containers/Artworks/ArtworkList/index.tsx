import type { IArtworkItem } from 'models/artwork/types';

import ArtworkItem from './ArtworkItem';

const ArtworkList = ({
  type = 'performance',
  data = [],
}: {
  type?: string;
  data: IArtworkItem[];
}) => {
  return (
    <div className="grid grid-cols-4 w-full">
      {data.map((artwork) => (
        <ArtworkItem activeType={type} data={artwork || {}} key={artwork.id} />
      ))}
    </div>
  );
};

export default ArtworkList;
