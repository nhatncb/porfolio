import './styles.css';

import VerseItem from './VerseItem';

const writingList = [
  {
    time: '2019',
    title: 'in(ter)',
    author: 'Đỗ Nguyễn Lập Xuân',
  },
  {
    time: '2019',
    title: 'why butterfly?',
    author: 'Đỗ Nguyễn Lập Xuân',
  },
  {
    time: '2019',
    title: 'why on earth',
    author: 'Đỗ Nguyễn Lập Xuân',
  },
  {
    time: '2019',
    title: 'another real life',
    author: 'Đỗ Nguyễn Lập Xuân',
  },
];

const Verses = () => {
  return (
    <div className="flex-1 content-container px-[48px] py-[42px] overflow-auto">
      {writingList.map((writing, index) => (
        <VerseItem data={writing} key={index} />
      ))}
    </div>
  );
};

export default Verses;
