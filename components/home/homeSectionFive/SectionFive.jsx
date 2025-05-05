import Image from "next/image";
import "./SectionFive.css";

const SectionFive = () => {
  return (
    <div className="section-five-container">
      <h1 className="font-bold lg:text-3xl md:lg:text-3xl text-2xl">
        How it works
      </h1>
      <div className="section-five-content mt-8">
        <div className="w-[30%] section-five-container-image lg:w-[20%] md:w-[37%] flex flex-col items-center justify-center">
          <Image
            src="/images/Rectangle-phone.png"
            alt="Section five 1 Image"
            width={500}
            height={500}
            className="w-[100%] section-five-image"
          />

          <p className="mt-3 text-white text-center">Download our App</p>
        </div>

        <div className="w-[15%] flex section-five-dots  items-center gap-2 justify-center">
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
        </div>

        <div className="w-[30%] section-five-container-image lg:w-[20%] md:w-[37%] flex flex-col items-center justify-center">
          <Image
            src="/images/Rectangle-phone.png"
            alt="Section five 1 Image"
            width={500}
            height={500}
            className="w-[100%] section-five-image"
          />

          <p className="mt-3 text-white text-center">Book an appointment</p>
        </div>

        <div className="w-[15%] flex section-five-dots  items-center gap-2 justify-center">
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
          <div className="w-[8px] h-[8px] rounded-full bg-[#FF981E]"></div>
        </div>

        <div className="w-[30%] section-five-container-image lg:w-[20%] md:w-[37%] flex flex-col items-center justify-center">
          <Image
            src="/images/Rectangle-phone.png"
            alt="Section five 1 Image"
            width={500}
            height={500}
            className="w-[100%] section-five-image"
          />

          <p className="mt-3 text-white text-center">Track next vaccination</p>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
