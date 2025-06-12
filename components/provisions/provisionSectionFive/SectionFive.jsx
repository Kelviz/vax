import Image from "next/image";
import "./SectionFive.css";

const SectionFive = () => {
  return (
    <div className="provision-sec-five-container">
      <div className="w-full bg-[#148782] flex justify-between items-center gap-2 text-white px-2 py-4">
        <Image
          src="/images/provision-sec-five.png"
          alt="provision image"
          width={500}
          height={500}
          className="lg:w-[100px] md:w-[80px] w-[50px] m-0 p-0"
        />

        <p className="lg:text-2xl md:text-lg text-[12px] text-center">
          Your donation can save thousands of life. Be a hero today
        </p>

        <button className="bg-[#FF981E] lg:px-8 md:px-5 px-2 py-2 lg:py-4 md:py-4 font-bold text-[12px] lg:text-lg md:text-lg  text-white hover:opacity-95 transition-opacity delay-100">
          Donate
        </button>
      </div>
    </div>
  );
};

export default SectionFive;
