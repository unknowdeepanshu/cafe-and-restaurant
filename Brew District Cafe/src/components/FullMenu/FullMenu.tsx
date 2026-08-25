import cafe from "../../assets/FullMenu/Café Latte.jpg";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
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

  const getItem = (position) => {
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
      className="bg-CreamBackgournd mt-40 flex min-h-screen w-full"
    >
      {/* LEFT */}
      <div className="relative flex w-1/2 overflow-hidden">
        {/* CIRCLE */}
        <div className="absolute z-10 h-full w-full">
          <div className="flex h-full w-full gap-40">
            <div className="h-full w-full -translate-x-2/3">
              <div className="flex h-full w-full items-center rounded-full border-5 border-orange-400">
                <div className="m-36 flex h-full w-full items-center justify-end">
                  <h1 className="text-[3.5rem]">Menu</h1>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MENU */}
        <div className="absolute z-20 h-full w-full">
          <div className="relative h-full w-full">
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
                      className="text-DarkGreen text-6xl whitespace-nowrap"
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
      <motion.div className="flex w-1/2 items-center justify-center">
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
    </section>
  );
}

export default FullMenu;
