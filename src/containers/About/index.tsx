import './styles.css';

import DownloadIcon from '@icons/download.svg';

const AboutPage = () => {
  return (
    <div className="h-screen bg-white flex about-me-page">
      <div className="side-bar h-screen w-[72px]">{/* <HamburgetButton /> */}</div>
      <div className="flex-1">
        <div className="header">
          <p className="m-0 page-title">About me</p>
        </div>
        <div className="flex black-bottom-border">
          <div className="px-[48px] py-[18px] flex-1 black-right-border">
            <button className="outline-btn">do nguyen lap xuan</button>
            <button className="text-btn">news</button>
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
                  <div className="text-xs font-bold	">B: 1986, Ho Chi Minh City (HCMC), Vietnam</div>
                  <div className="text-xs font-bold	">E: dnlapxuan@gmail.com</div>
                  <div className="text-xs font-bold	">T: +84909305100</div>
                </div>
              </div>
            </div>
          </div>

          <div className="biography-container flex-1 flex justify-center">
            <div className="pt-[168px] max-w-[594px]">
              <div className="text-xl">
                Do Nguyen Lap Xuan, aka Lap-Xuan Do-Nguyen, MA, is a recipient of the Scientia PhD
                scholarship at the University of New South Wales. She is an artist & social
                practitioner working with performative fragments of words, visualization, movement,
                and sound. Her works explore the dimensions of voice across the themes of identity,
                displacement, marginalisation, and liminality.
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
