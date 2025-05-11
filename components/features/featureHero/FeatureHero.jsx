import Image from "next/image";
import "./FeatureHero.css";
import Navbar from "../../navbar/Navbar";
import MobileNav from "../../navbar/MobileNav";
const FeatureHero = () => {
  return (
    <div className="feature-hero-container">
      <div className="feature-hero-navbar">
        <Navbar imgUrl={`/images/logo-white.png`} textColor={`text-white`} />
        <MobileNav
          logoUrl={`/images/logo-white.png`}
          textColor={`text-white`}
        />
      </div>

      <div className="w-full flex  feature-hero-contents  justify-between relative lg:mt-[5rem] md:mt-[3rem] mt-[2rem] lg:flex-row md:flex-row flex-col">
        <div className="lg:w-[40%] md:w-[40%] pr-14 w-full  flex flex-col ">
          <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-white">
            Easy access to Innovations and Solutions for You and your Baby
          </h1>
          <p className="mt-4 lg:text-lg md:text-md text-[14px] text-white">
            Trust the science for you and your loved ones health and medical
            wellbeing. For a better, easier and healtheir living.
          </p>
          <button className="w-[50%] mt-5 text-white rounded-full bg-[#FF981E] border border-gray-300 px-4 lg:py-4 md:py-4 py-3 font-bold text-center">
            Get Started
          </button>
        </div>

        <div className="lg:w-[60%] md:w-[60%] w-[100%] mt-14 lg:mt-0 md:mt-0 h-full flex justify-end relative">
          <Image
            src="/images/featurehero-1.png"
            alt="Feature Hero Image"
            width={500}
            height={500}
            className="w-[400px] h-[457px]  feature-hero-image feature-hero-img1 shadow-lg z-10 "
          />

          <Image
            src="/images/featurehero-2.png"
            alt="Feature Hero Image"
            width={500}
            height={500}
            className="h-[200px] w-[200px] feature-hero-image feature-hero-img2  border-6 border-[#FF981E]  right-[320px] top-[130px] absolute  shadow-lg z-10 rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureHero;
