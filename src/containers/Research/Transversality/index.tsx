import RightDownloadIcon from 'assets/icons/thin-right-download.svg';

const Transversality = () => {
  return (
    <>
      <div className="content-container flex-1 overflow-auto">
        <div className="p-12 flex flex-col justify-between h-full">
          <div className="flex justify-between">
            <RightDownloadIcon />
            <div className="flex items-end flex-col">
              <div className="text-[14px] font-bold">
                Keywords: Encounter, Transversality, Emergent, Performative, Voice
              </div>
              <div className="grid grid-cols-[300px_300px_300px] gap-6 mt-10 text-[14px]">
                <div className="max-w-[300px]">
                  This arts-based research (ABR) investigates the diverse properties of voice that
                  emerged from artistic representations. ‘Voice’ in this context is used as a
                  metaphor for enunciation, identity and positioning. I argue that Voice is subtle
                  and ambiguous. Yet, language, silence and the in-between institutional
                  representations of communication have driven some of the ways we perceive the
                  limitations of Voice. Thus, the question of Voicelessness is often normalised at
                  the intersection of social theory and aesthetics.
                </div>
                <div className="max-w-[300px]">
                  In this practice-led research, I propose a performative approach to the subject
                  ‘I’ as a supposedly marginal being in the spectrum of infrastructure,
                  individuality, and interconnectedness; to explore datum—ambiguous dimensions of
                  the ‘Voice’ through moments of encounters. From the concept of “practice
                  encounters” of Connell, I used performance art as my platform to provide a
                  conceptual apparatus in social pedagogy to challenge singularity and awaken
                  awareness and often suppressed voices.{' '}
                </div>
                <div className="max-w-[300px]">
                  The research methodology of my practice is routed in socially-engaged art,
                  referenced elements from A/r/tographic, inspired by the psychoanalysis concept of
                  the transversality of Guattari, to suggest a potential artistic methodology to
                  examine the presence of Voice. The practice aims to detach from the formal agendas
                  to propose alternative entries in seeing the knowns and unknowns and, by doing so,
                  provide necessary steps for imagining different social-progress narratives.
                </div>
              </div>
            </div>
          </div>
          <div className="font-bold">
            <div className="text-[32px]">The Transversality of Voice</div>
            <div className="mt-3">
              A thesis in fulfilment of the requirements for the degree of Doctor of Philosophy
            </div>
          </div>
        </div>
      </div>
      <div className="flex py-[28px] px-[48px] black-top-border justify-end text-[12px] font-bold">
        by Đỗ Nguyễn Lập Xuân
      </div>
    </>
  );
};

export default Transversality;
