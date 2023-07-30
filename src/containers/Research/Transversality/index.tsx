import RigtIcon from 'assets/icons/black-arrow-right.svg';

const Transversality = () => {
  return (
    <>
      <div className="content-container flex-1 overflow-auto">
        <div className="p-10 flex flex-col justify-between h-full">
          <div className="flex justify-end">
            <div className="flex items-end flex-col">
              <div className="normal-text font-medium">
                Keywords: Encounter, Transversality, Emergent, Performative, Voice
              </div>
              <div className="grid grid-cols-[300px_300px_300px] gap-6 mt-6 normal-text">
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
          <div>
            <div className="title-text font-semibold">The Transversality of Voice</div>
            <div className="flex items-center mt-2 justify-between">
              <div className="text-[18px] leading-6 font-medium">
                A thesis in fulfilment of the requirements for the degree of Doctor of Philosophy
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[72px] normal-text font-medium px-[48px] black-top-border text-[12px] leading-4 justify-between items-center">
        by Đỗ Nguyễn Lập Xuân
        <div className="flex gap-3 svg-24 items-center svg-16">
          <RigtIcon />
          <div className="normal-text">view full</div>
        </div>
      </div>
    </>
  );
};

export default Transversality;
