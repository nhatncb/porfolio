import { Link, Outlet, useLocation } from 'react-router-dom';

const Writings = () => {
  const { pathname } = useLocation();
  return (
    <div className="h-screen bg-white flex flex-1">
      <div className="flex-1 flex flex-col">
        <div className="header">
          <p className="m-0 page-title">Writings</p>
        </div>
        <div className="black-bottom-border">
          <div className="px-[48px] py-[18px] flex-1 black-right-border flex gap-2">
            <Link to="/writings/verses">
              <button className={pathname === '/writings/verses' ? 'outline-btn' : 'text-btn'}>
                verses
              </button>
            </Link>
            <Link to="/writings/essays">
              <button className={pathname === '/writings/essays' ? 'outline-btn' : 'text-btn'}>
                essays
              </button>
            </Link>
            <Link to="/writings/books">
              <button className={pathname === '/writings/books' ? 'outline-btn' : 'text-btn'}>
                books
              </button>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Writings;
