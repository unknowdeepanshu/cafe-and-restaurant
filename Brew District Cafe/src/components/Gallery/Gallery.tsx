import CoffeeFront from "../../assets/Gallery/CafeFrontView.jpg";
import CafeTable from "../../assets/Gallery/cafeTable.jpg";
import WindowView from "../../assets/Gallery/windowView.jpg";
import DeskView from "../../assets/Gallery/deskView.jpg";
import CoffeeCream from "../../assets/Gallery/coffeeCream.jpg";
import DeskVIew2 from "../../assets/Gallery/deskVIew2.jpg";
import { motion } from "motion/react";
function Gallery() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  } as const;
  const Images = [
    { small: CoffeeFront, BigImage: CafeTable, value: false },
    { small: DeskView, BigImage: WindowView, value: true },
    { small: DeskVIew2, BigImage: CoffeeCream, value: false },
  ];
  return (
    <>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-3.5 mt-40 min-h-screen overflow-hidden sm:mx-16"
      >
        <motion.div variants={itemVariants}>
          <div className="inline-block">
            <h1 className="text-DarkGreen text-2xl lg:text-[2.5rem]">
              Gallery
            </h1>
            <hr className="bg-Orange h-1 w-full border-0" />
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col gap-14"
        >
          {Images.map((e, index) => (
            <Image
              key={index}
              BigImg={e.BigImage}
              samllImg={e.small}
              reverse={e.value}
            />
          ))}
        </motion.div>
      </motion.section>
    </>
  );
}

export default Gallery;

function Image({
  samllImg,
  BigImg,
  reverse,
}: {
  samllImg: string;
  BigImg: string;
  reverse: boolean;
}) {
  return (
    <>
      <div
        className={`flex ${reverse ? "flex-row-reverse" : " "} w-full gap-6`}
      >
        {/* Smaller image */}
        <div className="h-[20rem] w-1/3 overflow-hidden sm:h-[25rem] md:h-[29rem] lg:h-[34rem] xl:h-[50rem]">
          <img
            src={samllImg}
            alt="CoffeeFront"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Larger image */}
        <div className="h-[20rem] w-2/3 overflow-hidden sm:h-[25rem] md:h-[29rem] lg:h-[34rem] xl:h-[50rem]">
          <img
            src={BigImg}
            alt="Cafe table"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </>
  );
}
