import Event from "@/assets/event.png";
import { useIsMobile } from "@/hook/matchMedia";

function PrivateEvents() {
  const { isMaxTablet } = useIsMobile();
  return (
    <>
      <section>
        <div className="relative h-screen">
          <img
            src={Event}
            alt="Event"
            className="absolute -z-30 h-full w-full"
          />
          <div className="absolute top-0 -z-20 flex h-full w-full items-center bg-black opacity-60"></div>
          <div className="flex h-full w-full items-center px-4 md:px-16">
            <div className="text-texts-200 text-3xl">
              <div className="bg-line-400 flex h-fit w-full flex-col justify-center rounded-3xl p-12 opacity-100 sm:p-20 md:h-[19.375rem] md:w-[40.25rem]">
                <h1
                  id="restaurantNames"
                  className="text-texts-100 text-4xl md:text-[3.875rem]"
                >
                  Celebrate With Us!
                </h1>
                <p
                  id="restaurantNames"
                  className="text-texts-200 text-base md:text-xl"
                >
                  Celebrate your special moments at Spice Route with authentic
                  North Indian and Mughlai cuisine in an elegant Dubai setting.
                  From birthdays and anniversaries to corporate dinners and
                  family gatherings, we create memorable experiences with
                  tailored menus and warm hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
}

export default PrivateEvents;
