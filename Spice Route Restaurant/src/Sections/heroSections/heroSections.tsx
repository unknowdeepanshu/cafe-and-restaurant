import {
  ButterChicken,
  HyderabadiChicken,
  MuttonKorma,
  PaneerButterMasala,
  LambRoganJosh,
  LambBiryani,
} from "@/assets/foodshero";
function HeroSections() {
  const foodImage = [
    ButterChicken,
    HyderabadiChicken,
    MuttonKorma,
    PaneerButterMasala,
    LambRoganJosh,
    LambBiryani,
  ];
  return (
    <>
      <section className="h-screen">
        <div className="flex h-full w-full gap-1 overflow-hidden">
          {foodImage.map((img, index) => (
            <span key={index} className="h-full w-full bg-black opacity-60">
              <img src={img} alt="some" className="h-fit w-full" />
            </span>
          ))}
        </div>
      </section>
    </>
  );
}

export default HeroSections;
