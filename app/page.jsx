import Image from "next/image";
import HeroSection from ".././components/home/heroSection/HeroSection";
import HorizontalBadges from ".././components/home/horizontalBadges/HorizontalBadges";
import SectionThree from ".././components/home/homeSectionThree/SectionThree";
import HomeSectionFour from ".././components/home/homeSectionFour/HomeSectionFour";
import SectionFive from ".././components/home/homeSectionFive/SectionFive";
import SectionSix from ".././components/home/homeSectionSix/SectionSix";
import SectionSeven from ".././components/home/homeSectionSeven/SectionSeven";
import SectionEight from ".././components/home/homeSectionEight/SectionEight";
import SectionNine from ".././components/home/homeSectionNine/SectionNine";

export default function Home() {
  const text = "Join us on the journey download our app for free today";
  const imgUrl = "/images/feature-sec-six.png";
  return (
    <main className="flex flex-col items-center justify-between min-h-screen">
      <HeroSection />

      <HorizontalBadges />
      <SectionThree />
      <HomeSectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <SectionNine text={text} imgUrl={imgUrl} />
    </main>
  );
}
