/* eslint-disable react/no-unescaped-entities */
import RigtIcon from 'assets/icons/black-arrow-right.svg';

const ArtisticEducation = () => {
  return (
    <>
      <div className="content-container flex-1 overflow-auto">
        <div className="p-10 flex flex-col justify-between h-full">
          <div className="flex justify-end">
            <div className="flex items-end flex-col">
              <div className="normal-text font-medium">
                Keywords: Performative Lecture, Artistic Education{' '}
              </div>
              <div className="grid grid-cols-[300px_300px] gap-6 mt-6 normal-text">
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
          <div>
            <div className="title-text font-semibold">While I'm thinking about you, and...</div>
            <div className="flex items-center mt-2 justify-between">
              <div className="text-[18px] leading-6 font-medium">
                A Collaboration on Performative Approach to Education
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[72px] font-medium normal-text px-[48px] black-top-border normal-text leading-4 justify-between items-center">
        by Đỗ Nguyễn Lập Xuân & Samira Jamouchi
        <div className="flex gap-3 svg-24 items-center svg-16">
          <RigtIcon />
          <div className="normal-text">view full</div>
        </div>
      </div>
    </>
  );
};

export default ArtisticEducation;
