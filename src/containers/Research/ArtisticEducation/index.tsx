/* eslint-disable react/no-unescaped-entities */
import RightDownloadIcon from 'assets/icons/right_download.svg';

const ArtisticEducation = () => {
  return (
    <>
      <div className="content-container flex-1 overflow-auto">
        <div className="p-12 flex flex-col justify-between h-full">
          <div className="flex justify-end">
            <div className="flex items-end flex-col">
              <div className="normal-text font-bold">by Do Nguyen Lap Xuan & Samira Jamouchi</div>
              <div className="grid grid-cols-[300px_300px] gap-6 mt-10 normal-text">
                <div className="max-w-[300px]">
                  This presentation is a (dis-)continuation of our on-going performative talk series
                  called: “When I think about you and…”.
                </div>
                <div className="max-w-[300px]">
                  We, Samira and Lap-Xuan, met at an artistic event in Vancouver in 2019 and since
                  that time we wished to explore possibilities for a collaborative work as
                  artist-researchers living on the opposite side of the planet: Vietnam and Norway.
                  This implies an absent/present relationship, as well as the notion of difference.
                </div>
              </div>
            </div>
          </div>
          <div className="font-bold">
            <div className="title-text">While I'm thinking about you, and...</div>
            <div className="flex items-center mt-2 justify-between">
              <div className="text-[18px] leading-6">
                A Collaboration on Performative Approach to Education
              </div>
              <div className="flex gap-3 svg-24 items-center">
                <RightDownloadIcon />
                <div className="normal-text">view more</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-[28px] px-[48px] black-top-border justify-end text-[12px] leading-4">
        Keywords: Performative Lecture, Artistic Education
      </div>
    </>
  );
};

export default ArtisticEducation;
