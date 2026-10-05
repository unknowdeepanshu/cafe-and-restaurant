import { cn } from "@/lib/utils";
import { IconDots, IconStarFilled } from "@tabler/icons-react";
import { motion } from "motion/react";

type ReviweCard = {
  img: string;
  Description: string;
  Name: string;
  activeIndex?: number;
  index: number;
};
function ReviweCard({
  img,
  Description,
  Name,
  activeIndex,
  index,
}: ReviweCard) {
  const indexNumber = index;
  return (
    <>
      <motion.div
        initial={
          activeIndex === indexNumber
            ? {
                scale: 0.8,
                opacity: 0,
              }
            : { opacity: 0, scale: 0.8 }
        }

        animate={
          activeIndex === indexNumber
            ? {
                scale: 1,
                opacity: 1,
              }
            : {
                scale: 0.8,
                opacity: 1,
              }
        }
        exit={
          activeIndex === indexNumber
            ? {
                scale: 0.8,
                opacity: 0,
              }
            : { opacity: 0, scale: 0.8 }
        }
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="h-fit w-full"
      >
        <div
          className={cn(
            "bg-card-100 relative flex h-105.5 w-full shrink-0 flex-col items-center justify-center rounded-4xl border-2 px-4",
            activeIndex === indexNumber ? "border-line-400" : "border-line-300",
          )}
        >
          <img
            src={img}
            alt="face"
            className="absolute top-[-12%] h-28 w-28 rounded-[50%]"
          />
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {[" ", " ", " ", " ", " "].map((_, index) => (
                <IconStarFilled key={index} color="#C28900" />
              ))}
            </div>
            <h2 className="text-texts-100"> {Name}</h2>
            <p className="text-texts-200">" {Description} "</p>
          </div>
          <IconDots stroke={3} color="#ffffff" className="absolute bottom-5" />
        </div>
      </motion.div>
    </>
  );
}
function MobileReviweCard({
  img,
  Description,
  Name,
  activeIndex,
  index,
}: ReviweCard) {
  let indexNumber = index;
  return (
    <>
      <motion.div
        initial={
          activeIndex === indexNumber
            ? {
                x: "200px",
              }
            : { x: "200px" }
        }

        animate={
          activeIndex === indexNumber
            ? {
                x: "0px",
              }
            : {}
        }
        exit={
          activeIndex === indexNumber
            ? {
                x: "-800px",
              }
            : { opacity: 0 }
        }
        transition={{
          duration: 0.5,
          ease: "linear",
        }}
        className="flex h-fit w-full items-center justify-center"
      >
        <div
          className={cn(
            "bg-card-100 relative flex h-105.5 w-[80%] shrink-0 flex-col items-center justify-center rounded-4xl border-2 px-4",
            activeIndex === indexNumber ? "border-line-400" : "border-line-300",
          )}
        >
          <img
            src={img}
            alt="face"
            className="absolute top-[-12%] h-28 w-28 rounded-[50%]"
          />
          <div className="flex flex-col items-center gap-4">
            <div className="flex gap-2">
              {[" ", " ", " ", " ", " "].map((_, index) => (
                <IconStarFilled key={index} color="#C28900" />
              ))}
            </div>
            <h2 className="text-texts-100"> {Name}</h2>
            <p className="text-texts-200">" {Description} "</p>
          </div>
          <IconDots stroke={3} color="#ffffff" className="absolute bottom-5" />
        </div>
      </motion.div>
    </>
  );
}
export { ReviweCard, MobileReviweCard };
