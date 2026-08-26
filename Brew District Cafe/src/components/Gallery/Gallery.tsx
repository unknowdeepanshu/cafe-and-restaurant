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
  return (
    <>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-16 mt-40 min-h-screen overflow-hidden"
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
          <div className="flex w-full gap-6">
            {/* Smaller image */}
            <div className="h-[20rem] w-1/3 overflow-hidden lg:h-[34rem]">
              <img
                src={CoffeeFront}
                alt="CoffeeFront"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Larger image */}
            <div className="h-[20rem] w-2/3 overflow-hidden lg:h-[34rem]">
              <img
                src={CafeTable}
                alt="Cafe table"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="flex w-full gap-6">
            <div className="h-[20rem] w-2/3 overflow-hidden lg:h-[34rem]">
              <img
                src={WindowView}
                alt="Window view"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="h-[20rem] w-1/3 overflow-hidden lg:h-[34rem]">
              <img
                src={DeskView}
                alt="Desk view"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 h-[34rem] overflow-hidden">
              <img
                src={CoffeeFront}
                alt="CoffeeFront"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="col-span-2 h-[34rem] overflow-hidden">
              <img
                src={CafeTable}
                alt="Cafe table"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Gallery;
