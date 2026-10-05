import fork from "@/assets/decoration/fork.png";
import { face1, face2, face3, face4 } from "@/assets/face";
import {
  ReviweCard,
  MobileReviweCard,
} from "@/components/reviweCard/reviweCard";
import { useIsMobile } from "@/hook/matchMedia";
import Threedots from "@/ui/threedots/threedots";
import { AnimatePresence, motion } from "motion/react";
import { useState, useRef, useEffect } from "react";

function ReviewSections() {
  const { isMaxTablet } = useIsMobile();
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden">
        <div className="relative flex h-[37%] w-full items-center justify-center">
          <img
            src={fork}
            alt="fork"
            className="absolute top-0 left-0 h-[22.679rem] w-[22.679rem]"
          />{" "}
          <div className="flex w-fit flex-col items-center justify-center">
            <p id="Header" className="text-texts-200 text-[1rem] sm:text-2xl">
              What said about us
            </p>
            <h1
              id="Header"
              className="text-texts-100 inline-block text-3xl sm:text-6xl md:text-7xl"
            >
              Customer{" "}
              <span id="Header" className="text-texts-300">
                Reviews
              </span>
              {/* <hr className="border-line-100 w-full rounded-2xl border-2" /> */}
            </h1>
          </div>
        </div>
        {isMaxTablet ? <MobileCards /> : <DesktopCards />}
      </section>
    </>
  );
}

function DesktopCards() {
  const customerReviewed = [
    {
      img: face1,
      Name: "Aarav Mehta",
      Description:
        "The butter chicken was rich and delicious, and the naan was perfectly soft. A lovely place to enjoy authentic Indian food with family.",
    },
    {
      img: face2,
      Name: "Sara Khan",
      Description:
        "Loved the warm atmosphere and the variety of Mughlai dishes. The biryani was full of flavor, and the presentation made the experience special.",
    },
    {
      img: face3,
      Name: "Rahul Sharma",
      Description:
        "A wonderful dining experience. The tandoori dishes were flavorful, the service was welcoming, and the ambience was perfect for dinner.",
    },
    {
      img: face4,
      Name: "Maya Wilson",
      Description:
        "Beautiful ambience and excellent food. I especially enjoyed the paneer butter masala. It's a lovely spot for a relaxed evening with friends.",
    },
    {
      img: face1,
      Name: "Aarav Mehta",
      Description:
        "The butter chicken was rich and delicious, and the naan was perfectly soft. A lovely place to enjoy authentic Indian food with family.",
    },
    {
      img: face2,
      Name: "Sara Khan",
      Description:
        "Loved the warm atmosphere and the variety of Mughlai dishes. The biryani was full of flavor, and the presentation made the experience special.",
    },
    {
      img: face3,
      Name: "Rahul Sharma",
      Description:
        "A wonderful dining experience. The tandoori dishes were flavorful, the service was welcoming, and the ambience was perfect for dinner.",
    },
    {
      img: face4,
      Name: "Maya Wilson",
      Description:
        "Beautiful ambience and excellent food. I especially enjoyed the paneer butter masala. It's a lovely spot for a relaxed evening with friends.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [x, setX] = useState("0");
  const containerRef = useRef<HTMLDivElement | null>(null);

  const valueX = () => {
    if (activeIndex === 0) {
      return `${100 / 3}%`;
    } else {
      const currentCard = activeIndex - 1;
      return `-${currentCard * (100 / 3)}%`;
    }
  };

  const loadImageCenter = () => {
    const cards = document.querySelectorAll("#cardRefs");
    const container = containerRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    // console.log("this is cards", cards);
    cards.forEach((card, index) => {
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(cardCenter - centerX);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
      console.log("card center", cardCenter, "and index", index);
      console.log("container center", centerX);
    });
    // console.log("this is closest", closestIndex);
    setActiveIndex(closestIndex);
  };
  useEffect(() => {
    loadImageCenter();
  }, []);
  useEffect(() => {
    const valueXs = valueX();
    setX(valueXs);
    console.log("this x", x, "this active index", activeIndex);
  }, [activeIndex]);

  return (
    <>
      <motion.div
        ref={containerRef}
        className="relative flex justify-center gap-6"
      >
        <hr className="border-button-200 absolute top-1/2 -z-1 w-full border-2" />
        <motion.div
          animate={{ x: `${x}` }}
          className="relative flex w-full gap-9 px-4 md:px-6"
        >
          {customerReviewed.map((customer, index) => (
            <div
              key={index}
              id="cardRefs"
              className="w-[85%] shrink-0 snap-center md:w-[calc((100%-3rem)/3)]"
            >
              <ReviweCard
                index={index}
                Name={customer.Name}
                Description={customer.Description}
                img={customer.img}
                activeIndex={activeIndex}
              />
            </div>
          ))}
        </motion.div>
      </motion.div>

      <div className="flex h-10 items-center justify-center">
        {customerReviewed.map((_, index) => (
          <Threedots
            key={index}
            index={index}
            active={activeIndex}
            setActive={setActiveIndex}
          />
        ))}
      </div>
    </>
  );
}

function MobileCards() {
  const customerReviewed = [
    {
      img: face1,
      Name: "Aarav Mehta",
      Description:
        "The butter chicken was rich and delicious, and the naan was perfectly soft. A lovely place to enjoy authentic Indian food with family.",
    },
    {
      img: face2,
      Name: "Sara Khan",
      Description:
        "Loved the warm atmosphere and the variety of Mughlai dishes. The biryani was full of flavor, and the presentation made the experience special.",
    },
    {
      img: face3,
      Name: "Rahul Sharma",
      Description:
        "A wonderful dining experience. The tandoori dishes were flavorful, the service was welcoming, and the ambience was perfect for dinner.",
    },
    {
      img: face4,
      Name: "Maya Wilson",
      Description:
        "Beautiful ambience and excellent food. I especially enjoyed the paneer butter masala. It's a lovely spot for a relaxed evening with friends.",
    },
    {
      img: face1,
      Name: "Aarav Mehta",
      Description:
        "The butter chicken was rich and delicious, and the naan was perfectly soft. A lovely place to enjoy authentic Indian food with family.",
    },
    {
      img: face2,
      Name: "Sara Khan",
      Description:
        "Loved the warm atmosphere and the variety of Mughlai dishes. The biryani was full of flavor, and the presentation made the experience special.",
    },
    {
      img: face3,
      Name: "Rahul Sharma",
      Description:
        "A wonderful dining experience. The tandoori dishes were flavorful, the service was welcoming, and the ambience was perfect for dinner.",
    },
    {
      img: face4,
      Name: "Maya Wilson",
      Description:
        "Beautiful ambience and excellent food. I especially enjoyed the paneer butter masala. It's a lovely spot for a relaxed evening with friends.",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    console.log("Active review changed:", activeIndex);
  }, [activeIndex]);
  return (
    <>
      <motion.div className="relative flex justify-center gap-6">
        <hr className="border-button-200 absolute top-1/2 -z-1 w-full border-2" />
        <motion.div className="relative flex w-full gap-9 px-4 md:px-6">
          <div
            id="cardRefs"
            className="flex w-full items-center justify-center"
          >
            <AnimatePresence mode="wait" initial={false}>
              <MobileReviweCard
                key={activeIndex}
                index={activeIndex}
                Name={customerReviewed[activeIndex].Name}
                Description={customerReviewed[activeIndex].Description}
                img={customerReviewed[activeIndex].img}
                activeIndex={activeIndex}
              />
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>

      <div className="flex h-10 items-center justify-center">
        {customerReviewed.map((_, index) => (
          <Threedots
            key={index}
            index={index}
            active={activeIndex}
            setActive={setActiveIndex}
          />
        ))}
      </div>
    </>
  );
}

export default ReviewSections;
