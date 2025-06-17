import TeamHero from "../../components/team/teamHero/TeamHero";
import SectionTwo from "../../components/team/teamSectionTwo/SectionTwo";
import SectionThree from "../../components/team/teamSectionThree/SectionThree";
import SectionNine from "../../components/home/homeSectionNine/SectionNine";
const page = () => {
  const text = "Join us on the journey download our app for free today";
  const imgUrl = "/images/feature-sec-six.png";
  return (
    <>
      <TeamHero />
      <SectionTwo />
      <SectionThree />
      <SectionNine text={text} imgUrl={imgUrl} />
    </>
  );
};

export default page;
