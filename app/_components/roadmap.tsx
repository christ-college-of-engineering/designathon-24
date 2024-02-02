import Image from "next/image";

const Roadmap = () => {
  return (
    <div className="h-96 bg-black w-full">
      <div
        className="relative bg-cover mix-blend-luminosity ml-11 mr-11"
        style={{
          backgroundImage: "url('/images/home1.png')",
          width: "1348px",
          height: "301.597px",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div>
            <div className="HackathonVenue text-center text-primary text-5xl font-normal font-secondary pb-4">
              hackathon venue
            </div>
            <div className="ChristCollegeOfEngineering text-right text-white text-6xl font-normal font-secondary pb-2">
              christ college of engineering
            </div>
            <div className="IrinjalakudaThrissurKerala text-center text-neutral-400 text-4xl font-normal font-secondary">
              irinjalakuda, thrissur, kerala
            </div>
          </div>
        </div>
      </div>
      <div>Roadmap</div>
    </div>
  );
};

export default Roadmap;
