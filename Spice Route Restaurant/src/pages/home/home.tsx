import {
  HeroSections,
  WelcomeSections,
  OpeningSections,
  MenuSection,
  ChefSections,
  ReviewSections,
  BookingSection,
} from "@/Sections";

function Home() {
  return (
    <>
      <HeroSections />
      <WelcomeSections />
      <OpeningSections />
      <MenuSection />
      <ChefSections />
      <ReviewSections />
      <BookingSection />
    </>
  );
}

export default Home;
