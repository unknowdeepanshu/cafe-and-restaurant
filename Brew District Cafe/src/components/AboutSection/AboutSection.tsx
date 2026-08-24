import { AnimatePresence, motion } from "motion/react";
import Look1 from "/about/about1.jpg";
import Look2 from "/about/windowsViews.jpg";
import Look3 from "/about/windowsViews1.jpg";
import { useEffect, useState } from "react";
function AboutSection() {
  const cafeLook = [{ url: Look1 }, { url: Look2 }, { url: Look3 }];
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
  };
  return (
    <>
      <motion.section
        className="flex min-h-[70vh]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={itemVariants}
          className="bg-DarkGreen flex w-full"
        >
          <motion.div className="mx-16 flex w-full">
            <motion.div variants={itemVariants} className="mt-40 h-fit w-1/2">
              <div className="flex flex-col">
                <div>
                  <div className="inline-block">
                    <h1 className="text-CreamBackgournd text-[2.5rem]">
                      About the cafe
                    </h1>
                    <hr className="bg-Orange h-1 w-full border-0" />
                  </div>
                </div>
                <div className="h-fit w-3xl">
                  <p className="text-CreamBackgournd text-2xl leading-15">
                    At Brew District Cafe, we believe a great cafe is more than
                    just good coffee. It’s a place to slow down, catch up, get
                    inspired, and enjoy the little moments.From carefully
                    crafted specialty coffee to fresh brunches and homemade
                    desserts, everything we serve is made with quality
                    ingredients and a lot of care. Whether you’re meeting
                    friends, taking a quiet break, or settling in with your
                    laptop, there’s always a warm seat waiting for you.Come by
                    for the coffee. Stay for the food, the conversations, and
                    the welcoming Bengaluru spirit.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-40 h-[45rem] w-1/2 overflow-hidden"
            >
              <ImagesShow cafeLook={cafeLook} />
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default AboutSection;
type ImageUrl = {
  url: string;
};
function ImagesShow({ cafeLook }: { cafeLook: ImageUrl[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cafeLook.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="over flex h-fit flex-col items-center gap-5">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={cafeLook[currentIndex].url}
            width="50%"
            className="h-full"
            alt="Cafe look"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
          />
        </AnimatePresence>
      </div>
    </>
  );
}
