import { Link, Outlet, useLocation } from 'react-router-dom';

const Research = () => {
  const { pathname } = useLocation();
  return (
    <div className="h-screen bg-white flex flex-1">
      <div className="flex-1 flex flex-col">
        <div className="header">
          <p className="m-0 page-title">Research</p>
        </div>
        <div className="black-bottom-border">
          <div className="px-[48px] py-[18px] flex-1 black-right-border">
            <Link to="/research/transversality">
              <button
                className={pathname === '/research/transversality' ? 'outline-btn' : 'text-btn'}
              >
                the transversality of voice
              </button>
            </Link>
            <Link to="/research/artistic-education">
              <button
                className={pathname === '/research/artistic-education' ? 'outline-btn' : 'text-btn'}
              >
                artistic education
              </button>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Research;
