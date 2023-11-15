import './styles.css';

import useList from 'hooks/useList';
import type { IVerseItem } from 'models/verses/types';

import VerseItem from './VerseItem';

const Verses = () => {
  const { list: data } = useList<IVerseItem>({ collectionName: 'verses', staleTime: Infinity });

  return (
    <div className="flex-1 content-container px-[48px] py-[42px] overflow-auto">
      {data.map((writing, index) => (
        <VerseItem data={writing} key={index} />
      ))}
    </div>
  );
};

export default Verses;
