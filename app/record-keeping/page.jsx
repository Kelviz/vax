import RecordHero from "../../components/records/recordHero/RecordHero";
import SectionTwo from "../../components/records/recordSectionTwo/SectionTwo";
import SectionThree from "../../components/records/recordSectionThree/SectionThree";
import SectionFour from "../../components/records/recordSectionFour/SectionFour";
import SectionFive from "../../components/records/recordSectionFive/SectionFive";
import SectionSix from "../../components/records/recordSectionSix/SectionSix";
import SectionSeven from "../../components/records/recordSectionSeven/SectionSeven";
const Page = () => {
  return (
    <div className="w-full">
      <RecordHero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
    </div>
  );
};

export default Page;
