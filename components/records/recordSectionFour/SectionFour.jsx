import Image from "next/image";
import { BsCheckCircleFill } from "react-icons/bs";
import "./SectionFour.css";

const SectionFour = () => {
  return (
    <div className="record-section-four-container">
      <div className="w-full flex flex-col-reverse md:flex-row justify-between  gap-16">
        <div className="md:w-[50%] w-full  flex flex-col relative">

        <div className="w-full ">
        <Image 
            src="/images/record-sec-four-2.png"
            alt="record image"
            width={500}
            height={500}
            className="w-[20%] float-right md:w-[25%] "
          
          />
          </div>

          
          <Image 
            src="/images/record-sec-four-1.png"
            alt="record image"
            width={500}
            height={500}
            className="absolute left-0 top-[0px] w-[55%] lg:w-[55%] md:w-[56%]"
          
          />

          



          <Image 
            src="/images/record-sec-four-3.png"
            alt="record image"
            width={500}
            height={500}
            className="absolute w-[20%] md:w-[25%] left-0 bottom-0"
          
          />


      <div className="w-full md:mt-[70px] lg:mt-[90px] mt-[160px] record-sec-four-4">
        <Image 
            src="/images/record-sec-four-4.png"
            alt="record image"
            width={500}
            height={500}
            className="w-[55%] float-right lg:w-[55%] md:w-[56%]"
          
          />
          </div>


        </div>

        <div className="md:w-[50%] w-full flex flex-col  md:mt-[3rem] mt-0">
          <h2 className=" w-full lg:text-2xl md:text-xl text-xl md:text-left text-center font-bold">
            We also collaborate with other health providers{" "}
          </h2>
          <div className="flex flex-col lg:mt-12 md:mt-6 mt-10 gap-5">
            <p className="flex items-center gap-2">
              {" "}
              <BsCheckCircleFill className="text-[#4B4B4B] text-2xl" />{" "}
              Pharmacies
            </p>
            <p className="flex items-center gap-2"><BsCheckCircleFill className="text-[#4B4B4B] text-2xl" />{" "}Schools and Employers</p>
            <p className="flex items-center gap-2"><BsCheckCircleFill className="text-[#4B4B4B] text-2xl" />{" "}Public health Agencies</p>
            <p className="flex items-center gap-2"><BsCheckCircleFill className="text-[#4B4B4B] text-2xl" />{" "}Immunization information system with the state</p>
            <p className="flex items-center gap-2"><BsCheckCircleFill className="text-[#4B4B4B] text-2xl" />{" "}Maternities and other local health clinics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
