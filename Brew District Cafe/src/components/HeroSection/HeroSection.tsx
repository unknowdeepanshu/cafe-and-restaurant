import Header from "../herader/Header";
import Coffee from "../../assets/hero/coffee.png";
import { motion } from "motion/react";
import Button from "../../ui/button/Button";
import ellipseSvg from "../../assets/supporting/Ellipse1.svg";

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
        <div className="relative mt-20 flex h-full flex-col items-center justify-end gap-10">
          <motion.div
            variants={itemVariants}
            className="flex h-1/2 flex-col items-center justify-center gap-5"
          >
            <h1 className="text-Brown-200 text-center text-[1.7rem] sm:text-[3rem]">
              Coffee made for good conversations
            </h1>
            <p className="w-96 text-center text-[1rem] leading-7 sm:w-full sm:text-[1.5rem]">
              Specialty coffee, fresh brunch and homemade desserts in the heart
              of Bengaluru.
            </p>
            <div className="flex gap-6">
              <Button text="View Menu" brown={true} />
              <Button
                text="Opening time"
                brown={true}
                link="#OpeningHoursLocation"
              />
            </div>
          </motion.div>
          <div className="relative mt-5 flex w-full justify-center sm:mt-40">
            <motion.img
              variants={itemVariants}
              src={Coffee}
              alt="Coffee"
              className="absolute -top-20 z-20 w-[50%] sm:-top-40 sm:w-[50%] md:-top-50 md:w-[40%]"
            />
            <motion.div
              variants={itemVariants}
              className="relative flex h-full w-full justify-around"
            >
              <img
                src={ellipseSvg}
                alt="Ellipse"
                className="-mb-1"
                width="100%"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default HeroSection;
