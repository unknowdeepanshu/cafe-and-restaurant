import Header from "../herader/Header";
import ellipseSvg from "../../assets/supporting/Ellipse1.svg";
import Coffee from "../../assets/hero/coffee.png";
import { motion } from "motion/react";

function HeroSection() {
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
        className="flex min-h-[70vh] flex-col"
      >
        <Header />
        <div className="relative mt-20 flex h-full flex-col items-center justify-around">
          <motion.div
            variants={itemVariants}
            className="flex h-1/2 flex-col items-center justify-center gap-5"
          >
            <h1 className="text-Brown-200 text-6xl">
              Coffee made for good conversations
            </h1>
            <p className="w-2xl text-center text-3xl leading-7">
              Specialty coffee, fresh brunch and homemade desserts in the heart
              of Bengaluru.
            </p>
            <div className="flex gap-6">
              <button className="bg-Orange text-Brown-700 h-10 w-40 rounded-[0.6rem] text-[1.2rem]">
                View Menu
              </button>

              <button className="bg-Orange text-Brown-700 h-10 w-40 rounded-[0.6rem] text-[1.2rem]">
                Get Direactions
              </button>
            </div>
          </motion.div>

          <motion.img
            variants={itemVariants}
            src={Coffee}
            alt="Coffee"
            className="z-20"
            width="40%"
          />
          <motion.div
            variants={itemVariants}
            className="relative flex h-1/2 w-full flex-col"
          >
            <img
              src={ellipseSvg}
              alt="Ellipse"
              className="absolute -bottom-1 z-10"
              width="100%"
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}

export default HeroSection;
