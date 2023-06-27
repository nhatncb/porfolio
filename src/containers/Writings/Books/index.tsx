import BookItem from './BookItem';
import { data } from './data';

const Books = () => {
  return (
    <div className="flex-1 flex content-container overflow-auto w-[calc(100vw_-_72px)]">
      {data.map((book, index) => (
        <BookItem data={book} key={index} />
      ))}
    </div>
  );
};

export default Books;
