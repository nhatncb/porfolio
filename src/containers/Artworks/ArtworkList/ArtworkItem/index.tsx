import { Link } from 'react-router-dom';

const ArtworkItem = ({
  data,
  activeType,
}: {
  data: { title: string; place: string; image: string; time: string; tags: string[]; id: string };
  activeType: 'performance' | 'sculpture' | 'installation' | 'collaboration' | 'video' | 'others';
}) => {
  return (
    <div className="flex-[0_0_25%] black-right-border">
      <div className="pt-[88px] px-6 flex flex-col justify-between h-full">
        <div className="px-[24px]">
          <Link to={`/artworks/${activeType}/${data.id}`}>
            <div className="text-[20px] leading-[24px] font-bold min-h-[96px] mb-6 line-clamp-3">
              {data.title}
            </div>
          </Link>
          <div className="text-[14px] whitespace-pre">
            {data.place} {'\n'}
            {data.time}
          </div>
          <div className="mt-10">
            {data.tags.map((tag) => (
              <Link className="text-[12px] block font-bold" key={tag} to={`/artworks/${tag}`}>
                #{tag}
              </Link>
            ))}
          </div>
        </div>
        <img alt="" src={data.image} />
      </div>
    </div>
  );
};

export default ArtworkItem;
