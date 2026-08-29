import drop from "../../assets/supporting/deopBelow.svg";
import Cappuccino from "../../assets/PopularItems/Cappuccino.jpg";
import AvcadoSandwich from "../../assets/PopularItems/avcadoSandwich.jpg";
import GrilledSandwich from "../../assets/PopularItems/grilledSandwich.jpg";
import { motion } from "motion/react";

function PopularSection() {
  const Items = [Cappuccino, AvcadoSandwich, GrilledSandwich];
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
        className="mb-10 flex flex-col md:mb-30"
        id="Popular Menu"
      >
        {/* Image at the top */}
        <motion.div
          variants={itemVariants}
          className="relative flex flex-col items-center"
        >
          <img src={drop} alt="drop" className="-m-2 w-full" />

          {/* Content */}
          <div className="absolute mt-4 flex flex-col items-center justify-center">
            <div className="inline-block">
              <h1 className="text-CreamBackgournd text-[1.563rem] sm:text-[2rem] md:text-[3rem]">
                Popular Menu Items
              </h1>

              <hr className="bg-Orange h-1 w-full border-0" />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mx-3.5 mt-10 sm:mx-16">
          <div className="mx-auto flex w-full justify-center gap-2">
            {Items.map((item, index) => (
              <div
                key={index}
                className="h-[6.938rem] w-[6.938rem] rounded-[1.313rem] sm:h-[15rem] sm:w-[20rem] sm:rounded-[2.625rem] lg:h-[30rem] lg:w-[36rem]"
              >
                <img
                  src={item}
                  alt=" Cappuccino"
                  className="h-full w-full rounded-[1.313rem] object-cover sm:rounded-[2.625rem]"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default PopularSection;
