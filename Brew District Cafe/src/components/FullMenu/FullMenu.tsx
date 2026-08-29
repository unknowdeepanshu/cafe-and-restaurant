import cafe from "../../assets/FullMenu/Café Latte.jpg";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Line from "../../assets/supporting/line.svg";
import { useRef, useState } from "react";

function FullMenu() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const menuItems = [
    "Cafe Latte",
    "Cappuccino",
    "Espresso",
    "Americano",
    "Mocha",
    "Flat White",
    "Cold Brew",
  ];

  const [menuOffset, setMenuOffset] = useState(0);
  const [direction, setDirection] = useState(1);

  const previousProgress = useRef(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Detect scroll direction
    const diff = latest - previousProgress.current;

    if (Math.abs(diff) > 0.001) {
      setDirection(diff > 0 ? 1 : -1);
    }

    previousProgress.current = latest;

    // Change menu index
    const offset = Math.floor(latest * menuItems.length);

    setMenuOffset(offset);
  });

  const getItem = (position: any) => {
    return menuItems[(position + menuOffset) % menuItems.length];
  };

  const positions = [
    "top-[5%] left-[20%]",
    "top-[20%] left-[30%]",
    "top-[35%] left-[40%]",
    "top-[50%] left-[50%]",
    "top-[65%] left-[40%]",
    "top-[80%] left-[30%]",
    "top-[95%] left-[20%]",
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-CreamBackgournd mt-10 flex min-h-[50vh] w-full"
      id="Full Menu"
    >
      {/* LEFT */}
      <div className="relative flex w-1/2 items-center justify-center overflow-hidden">
        {/* CIRCLE */}
        <div className="absolute z-10 h-[26rem] w-full sm:h-full">
          <div className="flex h-full w-full gap-40">
            <div className="h-full w-full">
              <div className="relative flex h-full w-full items-center">
                <img src={Line} alt="Line" className="mr-161 h-full w-full" />
                <div className="absolute right-[-10%] ml-36 flex h-full w-full items-center sm:right-[-5%]">
                  <h1 className="text-[1.563rem] sm:text-[2rem] md:text-[3rem]">
                    Menu
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MENU */}
        <div className="absolute z-20 h-[26rem] w-full sm:h-full">
          <div className="relative -right-8 h-full w-full lg:-right-8">
            {positions.map((position, index) => {
              const item = getItem(index);

              return (
                <div key={index} className={`absolute ${position}`}>
                  <AnimatePresence
                    mode="popLayout"
                    initial={false}
                    custom={direction}
                  >
                    <motion.div
                      key={item}
                      custom={direction}
                      initial={{
                        y: direction > 0 ? 80 : -80,
                        opacity: 0,
                      }}
                      animate={{
                        y: 0,
                        opacity: 1,
                      }}
                      exit={{
                        y: direction > 0 ? -80 : 80,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="text-DarkGreen text-[1rem] whitespace-nowrap sm:text-[1.5rem] md:text-2xl lg:text-[2.5rem]"
                    >
                      {item}
                    </motion.div>
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <motion.div className="flex w-1/2 items-center justify-center p-3">
        <div className="flex items-center justify-center">
          <div className="bg-DarkGreen flex rounded-4xl">
            <div className="flex h-full items-center justify-center">
              <img
                src={cafe}
                alt="cafe"
                className="rounded-[2.5rem] object-cover p-4"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default FullMenu;
