import { AnimatePresence, motion } from "motion/react";
import Look1 from "../../assets/about/about1.jpg";
import Look2 from "../../assets/about/windowsViews.jpg";
import Look3 from "../../assets/about/windowsViews1.jpg";
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
  } as const;
  return (
    <>
      <motion.section
        className="flex min-h-[70vh] overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        id="About"
      >
        <motion.div
          variants={itemVariants}
          className="bg-DarkGreen flex w-full py-10"
        >
          <motion.div className="mx-3.5 flex w-full gap-4 sm:mx-16">
            <motion.div variants={itemVariants} className="mt-40 h-fit w-1/2">
              <div className="flex flex-col">
                <div>
                  <div className="inline-block">
                    <h1 className="text-CreamBackgournd text-[1.563rem] sm:text-[2rem] md:text-[3rem]">
                      About the cafe
                    </h1>
                    <hr className="bg-Orange h-1 w-full border-0" />
                  </div>
                </div>
                <div className="h-fit sm:w-2xs lg:w-[28rem]">
                  <p className="text-CreamBackgournd text-[1rem] leading-10 sm:text-[1.5rem] lg:leading-15">
                    At Brew District Cafe, great coffee is just the beginning.
                    Enjoy specialty coffee, fresh brunches, and homemade
                    desserts in a warm space to relax, connect, and enjoy
                    Bengaluru's welcoming spirit. Come for the coffee, stay for
                    the moments.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-40 flex h-full w-1/2 items-center justify-center overflow-hidden rounded-2xl sm:h-180"
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
      <div className="over flex h-[100%] flex-col items-center justify-center gap-5">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={cafeLook[currentIndex].url}

            className="h-full w-full rounded-2xl"
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
