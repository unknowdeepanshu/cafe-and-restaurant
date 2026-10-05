import Time from "@/assets/timing.jpg";
import { OpeningCard } from "@/components/opening/OpeningCard";

function OpeningSections() {
  return (
    <>
      <section className="h-[200vh] md:h-screen">
        <div className="flex h-full w-full flex-col md:flex-row">
          <div className="h-1/2 w-full md:h-full md:w-1/2">
            <img src={Time} alt="Time" className="h-full w-full object-fill" />
          </div>
          <OpeningCard />
        </div>
      </section>
    </>
  );
}

export default OpeningSections;
