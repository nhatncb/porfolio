import { Link, Outlet, useLocation } from 'react-router-dom';

const Artworks = () => {
  const { pathname } = useLocation();
  return (
    <div className="h-screen bg-white flex">
      <div className="flex-1 flex flex-col">
        <div className="header">
          <p className="m-0 page-title">Artworks</p>
        </div>
        <div className="black-bottom-border">
          <div className="flex px-[48px] py-[18px] flex-1 black-right-border gap-3">
            <Link to="/artworks/performance">
              <button className={pathname === '/artworks/performance' ? 'outline-btn' : 'text-btn'}>
                #performance
              </button>
            </Link>
            <Link to="/artworks/sculpture">
              <button className={pathname === '/artworks/sculpture' ? 'outline-btn' : 'text-btn'}>
                #sculpture
              </button>
            </Link>
            <Link to="/artworks/installation">
              <button
                className={pathname === '/artworks/installation' ? 'outline-btn' : 'text-btn'}
              >
                #installation
              </button>
            </Link>
            <Link to="/artworks/collaboration">
              <button
                className={pathname === '/artworks/collaboration' ? 'outline-btn' : 'text-btn'}
              >
                #collaboration
              </button>
            </Link>
            <Link to="/artworks/video">
              <button className={pathname === '/artworks/video' ? 'outline-btn' : 'text-btn'}>
                #video
              </button>
            </Link>
            <Link to="/artworks/others">
              <button className={pathname === '/artworks/others' ? 'outline-btn' : 'text-btn'}>
                #others
              </button>
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Artworks;
