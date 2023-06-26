import BookItem from './BookItem';

const bookList = [
  {
    title:
      'Facilitating Community Research for Social Change: Case Studies in Qualitative, Arts-Based and Visual Research',
    author: 'by Casey Burkholder, Funké Aladejebi, Joshua Schwab-Cartas',
    image: '/images/book_1.png',
    url1: 'amazon',
    url2: 'routledge',
  },
  {
    title: 'STATE YOUR PURPOSE:A Collaborative Banner Making Workshop Facilitated',
    author: 'by NAVA',
    image: '/images/book_2.png',
    url1: 'amazon',
    url2: 'routledge',
  },
];

const Books = () => {
  return (
    <div className="flex-1 flex content-container overflow-auto w-[calc(100vw_-_72px)]">
      {bookList.map((book, index) => (
        <BookItem data={book} key={index} />
      ))}
    </div>
  );
};

export default Books;
