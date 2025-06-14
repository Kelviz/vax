import CommunityHero from "../../components/community/communityHero/CommunityHero";
import SectionTwo from "../../components/community/communitySectionTwo/SectionTwo";
import SectionThree from "../../components/community/communitySectionThree/SectionThree";
import SectionFour from "../../components/community/communitySectionFour/SectionFour";
import SectionNine from "../../components/home/homeSectionNine/SectionNine";

const page = () => {
  const text = "Join our community. Ask, Share, Learn. Download our app now.";
  const imgUrl = "/images/feature-sec-six.png";
  return (
    <>
      <CommunityHero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionNine text={text} imgUrl={imgUrl} />
    </>
  );
};

export default page;
