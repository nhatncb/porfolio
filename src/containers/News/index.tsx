import './styles.css';

import ArrowLeftIcon from '@icons/arrow-left.svg';
import ArrowRightIcon from '@icons/arrow-right.svg';
import DownloadIcon from '@icons/download.svg';
import Signature from '@icons/signature.svg';
import HamburgetButton from 'component/HamburgerButton';
import { Link } from 'react-router-dom';

import NewsItem from './NewsItem';

const NewsPage = () => {
  return (
    <div className="h-screen bg-white flex about-me-page">
      <div className="side-bar h-screen w-[72px] flex flex-col justify-between">
        <div />
        <Signature />
        <HamburgetButton />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="header">
          <p className="m-0 page-title">About</p>
        </div>
        <div className="flex black-bottom-border">
          <div className="px-[48px] py-[18px] flex-1 black-right-border">
            <Link to="/statement">
              <button className="text-btn">do nguyen lap xuan</button>
            </Link>
            <Link to="/news">
              <button className="outline-btn">news</button>
            </Link>
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
        <div className="content-container px-[48px] py-[68px] flex-1 overflow-auto	">
          <div className="grid grid-cols-2 gap-x-12 gap-y-16 flex">
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
          </div>
        </div>
        <div className="flex py-[24px] px-[48px] black-top-border justify-end">
          <div className="flex gap-4">
            <ArrowLeftIcon />
            <ArrowRightIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
