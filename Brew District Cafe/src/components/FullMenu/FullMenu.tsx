import FlatWhite from "../../assets/FullMenu/Café Latte.jpg";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import Line from "../../assets/supporting/line.svg";
import { useRef, useState } from "react";
import Americano from "../../assets/FullMenu/Americano.jpg";
import Cappuccino from "../../assets/FullMenu/Cappuccino.jpg";
import Espresso from "../../assets/FullMenu/Espresso.jpg";
import Mocha from "../../assets/FullMenu/Mocha.jpg";
import Coldbrew from "../../assets/FullMenu/cold brew.jpg";
import CafeLatte from "../../assets/FullMenu/Cafe Latte.jpg";
function FullMenu() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const menuItems = [
    { text: "Cafe Latte", Img: CafeLatte },
    { text: "Cappuccino", Img: Cappuccino },
    { text: "Espresso", Img: Espresso },
    { text: "Americano", Img: Americano },
    { text: "Mocha", Img: Mocha },
    { text: "Flat White", Img: FlatWhite },
    { text: "Cold Brew", Img: Coldbrew },
  ];
  // const menuItems = ["Cafe Latte"];
  const listY = useTransform(scrollYProgress, [0.3, 0.65], [-380, 200]);
  // const listY = useTransform(scrollYProgress, [0.3, 0.65], [-980, 600]);

  const [activeIndex, setActiveIndex] = useState(-1);
  const currentItem = menuItems[activeIndex >= 0 ? activeIndex : 0];
  useMotionValueEvent(listY, "change", () => {
    const container = sectionRefs.current;

    if (!container) return;

    const containerRect = container.getBoundingClientRect();

    const centerY = containerRect.top + containerRect.height / 2;

    const items = document.querySelectorAll("#list-item");

    let closestIndex = -1;
    let closestDistance = Infinity;

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();

      const itemCenter = rect.top + rect.height / 2;

      const distance = Math.abs(centerY - itemCenter);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
    // console.log("active", activeIndex);
  });
  return (
    <>
      <section
        ref={sectionRef}
        className="bg-CreamBackgournd relative h-[200vh]"
        id="Full Menu"
      >
        <div
          ref={sectionRefs}
          className="sticky top-0 flex h-screen overflow-hidden"
        >
          {/* LEFT */}
          <div className="relative flex w-1/2 items-center justify-center overflow-hidden">
            {/* CIRCLE */}
            <div className="w-1/2 sm:h-full">
              <div className="flex h-full w-full gap-40">
                <div className="h-full w-full">
                  <div className="relative flex h-full w-full items-center">
                    <img
                      src={Line}
                      alt="Line"
                      className="mr-161 h-full w-full"
                    />
                    <div className="absolute right-[-10%] ml-36 flex h-full w-full items-center sm:right-[-5%]">
                      <h1 className="text-DarkGreen text-[1.563rem] sm:text-[2rem] md:text-[3rem]">
                        Menu
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-full w-1/2 items-center">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                {/* MOVING LIST */}
                <motion.ul
                  style={{ y: listY }}
                  className="flex flex-col gap-10 pt-[30vh]"
                >
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={`${item}-${index}`}

                      animate={{
                        opacity: activeIndex === index ? 1 : 0.5,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      id="list-item"
                      className="text-DarkGreen text-[1rem] whitespace-nowrap sm:text-[1.5rem] md:text-2xl lg:text-[2.5rem]"
                    >
                      {item.text}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <motion.div className="flex w-1/2 items-center justify-center p-3">
            <div className="flex h-full w-full items-center justify-center">
              <div className="bg-DarkGreen flex h-full w-full rounded-4xl">
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    src={currentItem.Img}
                    alt={currentItem.text}
                    className="h-full rounded-[2.5rem] object-cover p-4"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default FullMenu;
