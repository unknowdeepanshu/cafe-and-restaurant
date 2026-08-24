import {
  AboutSection,
  Footer,
  FullMenu,
  Gallery,
  HeroSection,
  OpeningHoursLocation,
  PopularSection,
  Reviewed,
} from "../components";

function App() {
  return (
    <>
      <div className="bg-CreamBackgournd flex min-h-screen">
        <div className="flex w-full flex-col">
          <HeroSection />
          <AboutSection />
          <PopularSection />
          <FullMenu />
          <Gallery />
          <Reviewed />
          <OpeningHoursLocation />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
