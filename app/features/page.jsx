import React from "react";
import FeatureHero from "../../components/features/featureHero/FeatureHero";
import SectionTwo from "../../components/features/featureSectionTwo/SectionTwo";
import SectionThree from "../../components/features/featureSectionThree/SectionThree";
import SectionFour from "../../components/features/featureSectionFour/SectionFour";
import SectionFive from "../../components/features/featureSectionFive/SectionFive";
import SectionNine from "../../components/home/homeSectionNine/SectionNine";
const page = () => {
  const text = "Don’t miss out on these health benefits Download our app now.";
  const imgUrl = "/images/feature-sec-six.png";
  return (
    <div className="feature-page">
      <FeatureHero />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionNine text={text} imgUrl={imgUrl} />
    </div>
  );
};

export default page;
