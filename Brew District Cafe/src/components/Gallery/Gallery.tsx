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
            <h1 className="text-DarkGreen text-[3.5rem]">Gallery</h1>
            <hr className="bg-Orange h-1 w-full border-0" />
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col gap-14"
        >
          <div className="flex h-full w-full justify-between gap-6">
            <img
              src={CoffeeFront}
              alt="CoffeeFront"
              className="h-[20rem] object-cover lg:h-[34rem]"
            />
            <img
              src={CafeTable}
              alt="Cafe table"
              className="h-[20rem] w-full object-cover lg:h-[34rem]"
            />
          </div>
          <div className="flex h-full w-full justify-between gap-6">
            <img
              src={WindowView}
              alt="Cafe table"
              className="h-[20rem] w-full object-cover lg:h-[34rem]"
            />
            <img
              src={DeskView}
              alt="CoffeeFront"
              className="h-[20rem] object-cover lg:h-[34rem]"
            />
          </div>
          <div className="flex h-full w-full justify-between gap-6">
            <img
              src={DeskVIew2}
              alt="CoffeeFront"
              className="h-[20rem] object-cover lg:h-[34rem]"
            />
            <img
              src={CoffeeCream}
              alt="Cafe table"
              className="h-[20rem] w-full object-cover lg:h-[34rem]"
            />
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Gallery;
