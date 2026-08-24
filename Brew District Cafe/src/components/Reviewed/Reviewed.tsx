import { motion } from "motion/react";

function Reviewed() {
  const firtReviewed = ["1", "2", "1", "2", "2", "1", "2", "1", "2", "1", "1"];
  const secondReviewed = ["1", "2", "2", "2", "2", "2", "2", "2", "1", "2"];
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
        className="mx-16 my-40 flex min-h-[70vh] flex-col gap-20"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-3"
        >
          <div className="inline-block">
            <h1 className="text-DarkGreen text-[3.5rem]">
              What people are saying ?
            </h1>
            <hr className="bg-Orange h-1 w-full border-0" />
          </div>
          <span>
            <p className="w-252 text-2xl">
              Don't just take our word for it-see what our customers have to say
              about their experience!
            </p>
          </span>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="relative flex flex-col items-center justify-center gap-2 overflow-hidden"
        >
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />

          <motion.div
            className="flex w-max gap-6"
            animate={{
              transform: ["translateX(10%)", "translateX(-10%)"],
            }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* First set */}
            <div className="flex shrink-0 gap-6">
              {firtReviewed.map((e, index) => (
                <ReviewedBox key={index} />
              ))}
            </div>

            {/* Duplicate set */}
            <div className="flex shrink-0 gap-6">
              {firtReviewed.map((e, index) => (
                <ReviewedBox key={index} />
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex w-max gap-6"
            animate={{
              transform: ["translateX(0%)", "translateX(10%)"],
            }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* First set */}
            <div className="flex shrink-0 gap-6">
              {secondReviewed.map((e, index) => (
                <ReviewedBox key={index} />
              ))}
            </div>

            {/* Duplicate set */}
            <div className="flex shrink-0 gap-6">
              {secondReviewed.map((e, index) => (
                <ReviewedBox key={index} />
              ))}
            </div>
          </motion.div>
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />
        </motion.div>
      </motion.section>
    </>
  );
}

export default Reviewed;

function ReviewedBox() {
  return (
    <>
      <div className="bg-DarkGreen flex h-56 w-104 flex-col rounded-3xl">
        <div></div>
        <div></div>
      </div>
    </>
  );
}
