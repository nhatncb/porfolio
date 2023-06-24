import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { Outlet } from 'react-router-dom';

dayjs.extend(utc);
dayjs.extend(timezone);

const App = () => {
  const { key } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [key]);

  return <Outlet />;
};

export default App;
