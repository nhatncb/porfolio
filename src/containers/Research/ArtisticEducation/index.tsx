import RightDownloadIcon from '@icons/thin-right-download.svg';

const ArtisticEducation = () => {
  return (
    <>
      <div className="content-container flex-1 overflow-auto">
        <div className="p-12 flex flex-col justify-between h-full">
          <div className="flex justify-between">
            <RightDownloadIcon />
            <div className="flex items-end flex-col">
              <div className="text-[14px] font-bold">
                Keywords: Performative Lecture, Artistic Education
              </div>
              <div className="grid grid-cols-[300px_300px] gap-6 mt-10 text-[14px]">
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
            <div className="text-[32px]">While I&apos;m thinking about you, and...</div>
            <div className="mt-3">A Collaboration on Performative Approach to Education</div>
          </div>
        </div>
      </div>
      <div className="flex py-[28px] px-[48px] black-top-border justify-end text-[12px] font-bold">
        by Đỗ Nguyễn Lập Xuân & Samira Jamouchi
      </div>
    </>
  );
};

export default ArtisticEducation;
