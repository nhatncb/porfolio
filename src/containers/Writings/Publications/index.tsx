import type { IBookItem } from 'models/books/types';

import PublicationItem from './PublicationItem';

const Publications = ({ data }: { data: IBookItem[] }) => {
  // const { list: data } = useList<IBookItem>({ collectionName: 'books', staleTime: Infinity });

  return (
    <div className="flex-1 flex content-container overflow-auto w-[calc(100vw_-_72px)]">
      {data.map((book, index) => (
        <PublicationItem data={book} key={index} />
      ))}
    </div>
  );
};

export default Publications;
