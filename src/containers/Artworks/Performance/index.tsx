import { data } from '../data';
import BookItem from './BookItem';

const Performance = ({
  type = 'performance',
}: {
  type?: 'performance' | 'sculpture' | 'installation' | 'collaboration' | 'video' | 'others';
}) => {
  const list = data.filter((item) => item.tags.includes(type));
  return (
    <div className="flex-1 flex content-container overflow-auto w-[calc(100vw_-_72px)]">
      {list.map((book, index) => (
        <BookItem data={book} key={index} />
      ))}
    </div>
  );
};

export default Performance;
