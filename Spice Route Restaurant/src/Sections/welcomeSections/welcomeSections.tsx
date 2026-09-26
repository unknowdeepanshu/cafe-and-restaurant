import decortion from "@/assets/decoration/decoration.png";
import welcome from "@/assets/welcome-2 1.png";
function WelcomeSections() {
  return (
    <>
      <section className="relative flex h-[150vh] w-full items-center justify-center md:h-screen">
        <div className="flex h-full w-full flex-col gap-5 px-16 py-30 md:flex-row md:gap-0">
          <div className="flex w-full flex-col gap-8 md:w-1/2">
            <div>
              <h1
                id="Header"
                className="text-texts-200 text-4xl sm:text-6xl md:text-7xl"
              >
                Welcome to <br />
                <span id="restaurantNames" className="text-texts-300">
                  Spice Route Restaurant
                </span>
              </h1>
            </div>
            <div className="text-texts-200 flex w-full flex-col gap-3 md:text-2xl">
              <p className="w-full md:w-[67%]">
                Where the rich flavors of North India and Mughlai cuisine meet
                the warmth of Dubai. Enjoy timeless recipes, aromatic spices,
                and a modern dining experience crafted for memorable moments.
              </p>
              <hr className="border-line-100 w-1/3 rounded-2xl border-2 md:w-1/12" />
              <p id="NatoBold">
                The taste of India, served with a modern touch.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <img src={welcome} alt="welcome" className="h-full w-full" />
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

export default WelcomeSections;
