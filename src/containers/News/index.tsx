import './styles.css';

import DownloadIcon from '@icons/download.svg';

import NewsItem from './NewsItem';

const NewsPage = () => {
  return (
    <div className="h-screen bg-white flex about-me-page">
      <div className="side-bar h-screen w-[72px]">{/* <HamburgetButton /> */}</div>
      <div className="flex-1">
        <div className="header">
          <p className="m-0 page-title">About me</p>
        </div>
        <div className="flex black-bottom-border">
          <div className="px-[48px] py-[18px] flex-1 black-right-border">
            <button className="text-btn">do nguyen lap xuan</button>
            <button className="outline-btn">news</button>
          </div>
          <div className=" right-nav-section">
            <div className="flex items-center">
              <span className="mr-2 flex items-center">
                <DownloadIcon />
              </span>
              <span>download csv</span>
            </div>
          </div>
        </div>
        <div className="content-container px-[48px] py-[68px]">
          <div className="grid grid-cols-2 gap-x-12">
            <NewsItem />
            <NewsItem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
