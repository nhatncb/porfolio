import LeftSideMenu from 'components/LeftSideMenu';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import useList from 'hooks/useList';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

dayjs.extend(utc);
dayjs.extend(timezone);

const App = () => {
  const { key } = useLocation();
  useList({
    collectionName: 'tag',
    staleTime: Infinity,
    order: 'asc',
  });
  useList({
    collectionName: 'research',
    staleTime: Infinity,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [key]);

  return <LeftSideMenu />;
};

export default App;
