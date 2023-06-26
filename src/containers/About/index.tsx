import './styles.css';

import DownloadIcon from '@icons/download.svg';
import HamburgetButton from 'component/HamburgerButton';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <div className="h-screen bg-white flex about-me-page">
      <div className="side-bar h-screen w-[72px] flex flex-col justify-between">
        <div className="flex flex-col gap-3 circle-logo"></div>
        <div></div>
        <HamburgetButton />
      </div>
      <div className="flex-1">
        <div className="header">
          <p className="m-0 page-title">About me</p>
        </div>
        <div className="flex black-bottom-border">
          <div className="px-[48px] py-[18px] flex-1 black-right-border">
            <Link to="/statement">
              <button className="outline-btn">do nguyen lap xuan</button>
            </Link>
            <Link to="/news">
              <button className="text-btn">news</button>
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
        <div className="content-container flex">
          <div className="profile-container flex justify-center black-right-border">
            <div>
              <img alt="dnlx" src="/images/Profile.png" />
              <div className="mt-8">
                <div className="flex flex-col gap-1">
                  <div className="text-[14px]">B: 1986, Ho Chi Minh City (HCMC), Vietnam</div>
                  <div className="text-[14px]">E: dnlapxuan@gmail.com</div>
                  <div className="text-[14px]">T: +84909305100</div>
                </div>
              </div>
            </div>
          </div>

          <div className="biography-container flex-1 flex justify-center">
            <div className="pt-[168px] max-w-[594px]">
              <div className="text-xl">
                Do Nguyen Lap Xuan, aka Lap-Xuan Do-Nguyen, MA, is a recipient of the Scientia PhD
                scholarship at the University of New South Wales. She is{' '}
                <span className="font-bold">an artist & social practitioner</span> working with
                <span className="font-bold">performative fragments</span> of words, visualization,
                movement, and sound. Her works explore the{' '}
                <span className="font-bold">dimensions of voice</span> across the themes of
                identity, displacement, marginalisation, and liminality.
              </div>
              <div className="signature mt-20 text-right text-[32px]">Do Nguyen Lap Xuan</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
