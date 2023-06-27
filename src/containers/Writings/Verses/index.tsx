import './styles.css';

import { data } from './data';
import VerseItem from './VerseItem';

const Verses = () => {
  return (
    <div className="flex-1 content-container px-[48px] py-[42px] overflow-auto">
      {data.map((writing, index) => (
        <VerseItem data={writing} key={index} />
      ))}
    </div>
  );
};

export default Verses;
