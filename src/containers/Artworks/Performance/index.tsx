import BookItem from './BookItem';

const bookList = [
  {
    title: 'In Time for Spring Delay',
    place: 'Baq, Paris, France | Oslo, Norway',
    time: '2023',
    image: '/images/art_work_1.png',
    tags: ['performance', 'collaboration'],
  },
  {
    title: "While I'm thinking about you and (our) differences",
    place: 'NERA | OsloMet, Oslo, Norway',
    time: '2023',
    image: '/images/art_work_2.png',
    tags: ['performance', 'collaboration'],
  },
  {
    title: "While I'm thinking about you and (our) togetherness",
    place: 'INSEA online | Baeza, Spain',
    time: '2021',
    image: '/images/art_work_3.png',
    tags: ['performance', 'collaboration'],
  },
  {
    title: 'While I’m thinking about you and what you are doing',
    place: 'MoT+++ | HCMC, Vietnam',
    time: '2019',
    image: '/images/art_work_4.png',
    tags: ['performance', 'installation'],
  },
];

const Performance = () => {
  return (
    <div className="flex-1 flex content-container overflow-auto w-[calc(100vw_-_72px)]">
      {bookList.map((book, index) => (
        <BookItem data={book} key={index} />
      ))}
    </div>
  );
};

export default Performance;
