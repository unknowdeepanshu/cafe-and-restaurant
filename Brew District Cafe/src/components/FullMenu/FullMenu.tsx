import Lines from "/supporting/line.svg";
import cafe from "/FullMenu/Café Latte.jpg";
import { motion } from "motion/react";

function FullMenu() {
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
        className="bg-CreamBackgournd mt-40 flex min-h-screen w-full"
      >
        <motion.div variants={itemVariants} className="flex w-1/2">
          <div className="relative">
            {/* <img src={Lines} alt="Lines" /> */}
            <h1 className="absolute top-[39%] text-[3.5rem]">Menu</h1>
            <TextScroller />
          </div>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex w-1/2 items-center justify-center"
        >
          <div className="flex items-center justify-center">
            <div className="bg-DarkGreen flex h-[39rem] w-2xl rounded-4xl">
              <div className="w-1/2">
                <div className="flex h-full items-center justify-center">
                  <img
                    src={cafe}
                    alt="cafe"
                    className="h-124 w-70 rounded-[2.5rem] object-cover"
                  />
                </div>
              </div>
              <div className="flex w-1/2 items-center justify-center">
                <p className="text-CreamBackgournd w-3xs text-4xl leading-12 tracking-[7%]">
                  Espresso, chocolate and steamed milk
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default FullMenu;

function TextScroller() {
  const texts = [
    "Specialty Coffee",
    "Fresh Brunch",
    "Homemade Desserts",
    "Good Conversations",
    "Bengaluru Cafe",
  ];

  return (
    <div className="relative flex h-[400px] w-[800px] items-end justify-center overflow-hidden">
      {/* Rotating circle */}
      <motion.div
        className="absolute left-[-400px] h-[1200px] w-[800px] rounded-full border-4 border-orange-400"
        // animate={{ rotate: 360 }}
        // transition={{
        //   duration: 20,
        //   ease: "linear",
        //   repeat: Infinity,
        // }}
      >
        {texts.map((text, index) => {
          const angle = (360 / texts.length) * index;

          return (
            <>
              <div
                key={index}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `rotate(${angle}deg) translateY(-380px) rotate(-${angle}deg)`,
                }}
              >
                {text}
              </div>
            </>
          );
        })}
      </motion.div>
    </div>
  );
}
