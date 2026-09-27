import decortion from "@/assets/decoration/decoration.png";
import Kebab from "@/assets/menuThree/Lamb Seekh Kebab.jpg";
import Chat from "@/assets/menuThree/Samosa Chaat.jpg";
import Chicken from "@/assets/menuThree/Butter chicken.jpg";
import RestaurantButton from "@/ui/button/button";

function MenuSection() {
  return (
    <>
      <section className="relative flex h-fit w-full items-center justify-center">
        <div className="flex h-full w-full max-w-7xl flex-col gap-5 px-4 py-20 sm:px-8 md:gap-10 md:px-16 md:py-30">
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <h1
              id="Header"
              className="text-texts-200 inline-block text-4xl sm:text-6xl md:text-7xl"
            >
              <span id="Header" className="text-texts-300">
                Menu
              </span>
              <hr className="border-line-100 w-full rounded-2xl border-2" />
            </h1>
          </div>
          <div className="flex h-full w-full flex-col">
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:flex-wrap lg:flex-nowrap">
              {[Kebab, Chat, Chicken].map((ima, index) => (
                <img
                  src={ima}
                  key={index}
                  alt="welcome"
                  className="aspect-[4/5] h-auto w-full min-w-0 rounded-2xl object-cover lg:w-0 lg:flex-1"
                />
              ))}
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <RestaurantButton>Explore Menu</RestaurantButton>
          </div>
        </div>
        <img
          src={decortion}
          alt="decortion"
          className="absolute top-0 right-0 -z-1 opacity-18"
        />
        <img
          src={decortion}
          alt="decortion"
          className="absolute bottom-0 left-0 -z-1 rotate-180 opacity-18"
        />
      </section>
    </>
  );
}

export default MenuSection;
