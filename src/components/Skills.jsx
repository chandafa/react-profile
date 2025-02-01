const Skills = () => {
  return (
    <section id="skill">
      {/*Container */}
      <div className="w-full px-5 py-16 mx-auto max-w-7xl md:px-10 md:py-20">
        {/* Component */}
        <h2 className="text-3xl font-bold text-center md:text-5xl">Skill</h2>
        <p className="mt-4 mb-8 text-sm text-center text-gray-500 msm:text-base md:mb-12 lg:mb-16">Lorem ipsum dolor sit amet elit ut aliquam</p>
        <div className="flex flex-col items-center gap-8 sm:grid sm:grid-cols-3 sm:gap-12 md:grid-cols-5 md:gap-6">
          <div className="flex justify-center">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b03aedf8d5a0_Microsoft%20Logo.svg" alt="" className="inline-block" />
          </div>
          <div className="flex justify-center">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0620ef8d5a5_PayPal%20Logo.svg" alt="" className="inline-block" />
          </div>
          <div className="flex justify-center">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b00612f8d5a4_Google%20Logo.svg" alt="" className="inline-block" />
          </div>
          <div className="flex justify-center">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0582cf8d599_Chase%20Logo.svg" alt="" className="inline-block" />
          </div>
          <div className="flex justify-center">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0484ef8d59a_Walmart%20Logo.svg" alt="" className="inline-block" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
