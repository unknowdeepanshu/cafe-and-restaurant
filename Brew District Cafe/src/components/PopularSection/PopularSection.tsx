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
        className="flex min-h-[100vh] flex-col"
      >
        {/* Image at the top */}
        <motion.div variants={itemVariants} className="h-1/2">
          <img src={drop} alt="drop" className="-mt-3 w-full" />

          {/* Content */}
          <div className="-mt-70 flex flex-col items-center justify-center">
            <div className="inline-block">
              <h1 className="text-CreamBackgournd text-[3.5rem]">
                Popular Menu Items
              </h1>

              <hr className="bg-Orange h-1 w-full border-0" />
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="mx-16 mt-70 h-1/2">
          <div className="mx-auto flex justify-center gap-6">
            {Items.map((item, index) => (
              <div key={index} className="h-[30rem] w-[36rem] rounded-2xl">
                <img
                  src={item}
                  alt=" Cappuccino"
                  className="h-full w-full rounded-[2.5rem] object-cover"
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
