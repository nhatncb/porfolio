import './styles.css';

import { Link, useLocation } from 'react-router-dom';

const aboutMeMenus = [
  {
    title: 'Do Nguyen Lap Xuan',
    url: '/statement',
  },
  {
    title: 'News',
    url: '/news',
  },
];

const artWorkMenus = [
  {
    title: 'Performance',
    url: '/artworks/performance',
  },
  {
    title: 'Sculpture',
    url: '/artworks/sculpture',
  },
  {
    title: 'Installation',
    url: '/artworks/installation',
  },
  {
    title: 'Collaboration',
    url: '/artworks/collaboration',
  },
  {
    title: 'Video',
    url: '/artworks/video',
  },
  {
    title: 'Others',
    url: '/artworks/others',
  },
];

const writingMenus = [
  {
    title: 'Verses',
    url: '/writings/verses',
  },
  {
    title: 'Essays',
    url: '/writings/essays',
  },
  {
    title: 'Books',
    url: '/writings/books',
  },
];

const researchMenus = [
  {
    title: 'The Transversality of Voice',
    url: '/research/transversality',
  },
  {
    title: 'Artistic Education',
    url: '/research/artistic-education',
  },
];

const categories = [
  { title: 'About Me', menus: aboutMeMenus, activeKeys: aboutMeMenus.map((menu) => menu.url) },
  { title: 'Artworks', menus: artWorkMenus, activeKeys: artWorkMenus.map((menu) => menu.url) },
  { title: 'Writings', menus: writingMenus, activeKeys: writingMenus.map((menu) => menu.url) },
  { title: 'Research', menus: researchMenus, activeKeys: researchMenus.map((menu) => menu.url) },
] as const;

const HamburgetButton = () => {
  const { pathname } = useLocation();
  return (
    <div className="drawer nav-container">
      <div className="drawer">
        <input className="drawer-toggle" id="my-drawer" type="checkbox" />
        <div className="drawer-content">
          {/* Page content here */}
          <label className="hamburger-lines" htmlFor="my-drawer">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </label>
        </div>
        <div className="drawer-side z-10">
          <label className="drawer-overlay" htmlFor="my-drawer"></label>
          <div className="items-container">
            {categories.map((category) => {
              const isActiveTitle = category.activeKeys.includes(pathname);
              return (
                <div className="mb-10" key={category.title}>
                  <div
                    className={`section-title mb-3 ${isActiveTitle ? 'font-bold' : 'blur-text'}`}
                  >
                    {category.title}
                  </div>
                  {category.menus.map((subMenu) => {
                    const isActivePath = pathname === subMenu.url;
                    return (
                      <Link
                        className={`${isActivePath ? 'font-bold' : 'blur-text'} text-lg mb-3 block`}
                        key={subMenu.title}
                        to={subMenu.url}
                      >
                        {subMenu.title}
                      </Link>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HamburgetButton;
