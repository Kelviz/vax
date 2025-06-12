import ProvisionHero from "../../components/provisions/provisionHero/ProvisionHero";
import SectionTwo from "../../components/provisions/provisionSectionTwo/SectionTwo";
import SectionThree from "../../components/provisions/provisionSectionThree/SectionThree";
import SectionFour from "../../components/provisions/provisionSectionFour/SectionFour";
import SectionFive from "../../components/provisions/provisionSectionFive/SectionFive";

const page = () => {
  return (
    <div className="provision-page">
      <ProvisionHero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  );
};

export default page;
