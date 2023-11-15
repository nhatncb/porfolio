import useList from 'hooks/useList';
import type { IBookItem } from 'models/books/types';

import BookItem from './BookItem';

const Books = () => {
  const { list: data } = useList<IBookItem>({ collectionName: 'books', staleTime: Infinity });

  return (
    <div className="flex-1 flex content-container overflow-auto w-[calc(100vw_-_72px)]">
      {data.map((book, index) => (
        <BookItem data={book} key={index} />
      ))}
    </div>
  );
};

export default Books;
