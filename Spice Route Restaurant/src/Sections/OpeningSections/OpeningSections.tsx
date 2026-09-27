import Time from "@/assets/timing.jpg";
import designLine from "@/assets/decoration/LINE-removebg.png";
import backLines from "@/assets/decoration/backgroundlines.png";
import Label from "@/ui/label/label";

function OpeningSections() {
  return (
    <>
      <section className="h-[200vh] md:h-screen">
        <div className="flex h-full w-full flex-col md:flex-row">
          <div className="h-1/2 w-full md:h-full md:w-1/2">
            <img src={Time} alt="Time" className="h-full w-full object-fill" />
          </div>
          <div className="flex h-1/2 w-full flex-col items-center p-4 md:h-full md:w-1/2">
            <img
              src={designLine}
              alt="designLine"
              className="h-20 w-full shrink-0 opacity-70"
            />

            <div className="relative flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-5 overflow-hidden">
              <img
                src={backLines}
                alt="backLines"
                className="absolute -z-1 h-full w-full object-fill opacity-70"
              />
              <h1
                id="Header"
                className="text-texts-100 flex flex-col items-center justify-center text-center text-4xl sm:text-6xl lg:text-7xl"
              >
                Opening <span className="text-texts-300 contents">Hours</span>
                <hr className="border-line-100 mt-3 min-w-9/12 rounded-2xl border-2" />
              </h1>
              <h3
                id="NatoBold"
                className="text-texts-200 text-center text-[1rem] md:text-2xl lg:text-4xl"
              >
                MONDAT - FRIDAY
              </h3>
              <h3 className="text-texts-200 text-center text-[1rem] md:text-2xl lg:text-4xl">
                7:30 AM - 9:30PM
                <hr className="border-line-100 mt-3 w-full rounded-2xl border-2" />
              </h3>
              <h3
                id="NatoBold"
                className="text-texts-200 text-center text-[1rem] md:text-2xl lg:text-4xl"
              >
                SATURDAY
              </h3>
              <h3 className="text-texts-200 text-center text-[1rem] md:text-2xl lg:text-4xl">
                8:00 AM - 9:00 PM
              </h3>
              <Label className="rounded-[0.625rem] text-[1rem]">
                CLOSED <span id="NatoBold">SUNDAY</span>
              </Label>
            </div>

            <img
              src={designLine}
              alt="designLine"
              className="h-20 w-full shrink-0 rotate-180 opacity-70"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default OpeningSections;
