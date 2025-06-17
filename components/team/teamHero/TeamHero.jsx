import Image from "next/image";
import Navbar from "../../navbar/Navbar";
import MobileNav from "../../navbar/MobileNav";

import "./TeamHero.css";

const TeamHero = () => {
  return (
    <div className="team-hero-section-container">
      <Navbar imgUrl={`/images/logo-black.png`} textColor={`text-black`} />
      <MobileNav logoUrl={`/images/logo-black.png`} textColor={`text-black`} />

      <div className="mt-18 w-full flex justify-center items-center flex-col">
        <h1 className="text-black md:text-4xl text-2xl font-bold">
          Our medical team for a healthier you
        </h1>
        <p className="mt-2">
          Trust us to give you and your baby a healthier life
        </p>
      </div>
    </div>
  );
};

export default TeamHero;
