import {
  ButterChicken,
  HyderabadiChicken,
  MuttonKorma,
  PaneerButterMasala,
  LambRoganJosh,
  LambBiryani,
} from "@/assets/foodshero";
import { useIsMobile } from "@/hook/matchMedia";
import RestaurantButton from "@/ui/button/button";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { IconArrowNarrowRight, IconArrowNarrowLeft } from "@tabler/icons-react";
function HeroSections() {
  const isMobile = useIsMobile();

  return (
    <>
      <section className="h-screen w-full overflow-hidden">
        {isMobile ? <MobileCarousel /> : <DesktopCarousel />}
      </section>
    </>
  );
}

export default HeroSections;
interface Images {
  imge: string;
  Title: string;
  subheading: string;
}
function DesktopCarousel() {
  const foodImage: Images[] = [
    {
      imge: ButterChicken,
      Title: "The Taste of India",
      subheading:
        "Authentic North Indian and Mughlai flavors, served with a modern touch.",
    },
    {
      imge: HyderabadiChicken,
      Title: "Flavors Worth Gathering For",
      subheading:
        "Rich spices, traditional recipes, and warm hospitality in the heart of Dubai.",
    },
    {
      imge: MuttonKorma,
      Title: "From the Tandoor, With Love",
      subheading:
        "Smoky, charred favorites prepared fresh for an unforgettable dining experience.",
    },
    {
      imge: PaneerButterMasala,
      Title: "A Feast of Indian Classics",
      subheading:
        "Discover timeless curries, fragrant biryanis, fresh breads, and indulgent desserts.",
    },
    {
      imge: LambRoganJosh,
      Title: "Tradition on Every Plate",
      subheading:
        "Recipes inspired by India’s rich culinary heritage, crafted for today’s table.",
    },
    {
      imge: LambBiryani,
      Title: "Make Tonight Memorable",
      subheading:
        "Gather around exceptional food, elegant surroundings, and genuine hospitality.",
    },
  ];
  const loopedFoodImage = [...foodImage, ...foodImage, ...foodImage];
  const divTagRef = useRef<HTMLDivElement | null>(null);

  const [nextNumber, setNextNumber] = useState(foodImage.length);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isResetting, setIsResetting] = useState(false);
  const NextImage = () => {
    setNextNumber((prev) => Math.min(prev + 1, foodImage.length * 2));
  };

  const BackImage = () => {
    setNextNumber((prev) => Math.max(prev - 1, 0));
  };
  useEffect(() => {
    const timeout = window.setTimeout(NextImage, 4000);

    return () => window.clearTimeout(timeout);
  }, [nextNumber]);
  const showImage = () => {
    const allImages = document.querySelectorAll("#singleImage");
    if (!divTagRef.current) return;

    const sectionRect = divTagRef.current.getBoundingClientRect();

    const centerX = sectionRect.left + sectionRect.width / 2;

    let closest: any = null;
    let closestDistance = Infinity;
    allImages.forEach((image, index) => {
      const imageRect = image.getBoundingClientRect();
      const imageCenterX = imageRect.left + imageRect.width / 2;
      const distance = Math.abs(imageCenterX - centerX);
      if (distance < closestDistance) {
        closestDistance = distance;
        closest = index;
      }
    });
    setActiveIndex(closest);
  };
  return (
    <>
      <motion.div
        ref={divTagRef}
        className="relative flex h-full w-full flex-col gap-1"
      >
        <motion.div
          className="flex h-full cursor-grab gap-1 active:cursor-grabbing"
          animate={{
            x: `-${nextNumber * (100 / 3)}%`,
          }}
          transition={{
            duration: isResetting ? 0 : 0.6,
            ease: "easeInOut",
          }}
          onUpdate={showImage}
          onAnimationComplete={() => {
            if (nextNumber === 0 || nextNumber === foodImage.length * 2) {
              setIsResetting(true);
              setNextNumber(foodImage.length);
              requestAnimationFrame(() => setIsResetting(false));
            }
          }}
          style={{ touchAction: "pan-y" }}
        >
          {loopedFoodImage.map((img, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0 }}
              key={`${img.Title}-${index}`}
              className="relative flex h-full w-1/2 shrink-0 items-center justify-center md:w-1/3"
              id="singleImage"
            >
              <img
                src={img.imge}
                alt={img.Title}
                className="absolute inset-0 h-full w-full object-fill"
              />
              <motion.span
                animate={{
                  opacity: activeIndex === index ? 0.8 : 0.5,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="absolute inset-0 bg-black"
              />
              <motion.div
                animate={{
                  opacity: activeIndex === index ? 1 : 0.5,
                  scale: activeIndex === index ? 1 : 0.8,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="absolute flex flex-col gap-2"
              >
                <h1 className="text-texts-200 text-center text-xl">
                  {img.Title}
                </h1>
                <h3 className="text-texts-100 text-center">{img.subheading}</h3>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute top-1/2 z-50 flex w-full items-center justify-between gap-10 p-2">
          <RestaurantButton
            className="rounded-4xl border p-1"
            onClick={BackImage}
          >
            <IconArrowNarrowLeft stroke={2} color="#ffffff" />
          </RestaurantButton>

          <RestaurantButton
            className="rounded-4xl border p-1"
            onClick={NextImage}
          >
            <IconArrowNarrowRight stroke={2} color="#ffffff" />
          </RestaurantButton>
        </div>
      </motion.div>
    </>
  );
}

function MobileCarousel() {
  const foodImage: Images[] = [
    {
      imge: ButterChicken,
      Title: "The Taste of India",
      subheading:
        "Authentic North Indian and Mughlai flavors, served with a modern touch.",
    },
    {
      imge: HyderabadiChicken,
      Title: "Flavors Worth Gathering For",
      subheading:
        "Rich spices, traditional recipes, and warm hospitality in the heart of Dubai.",
    },
    {
      imge: MuttonKorma,
      Title: "From the Tandoor, With Love",
      subheading:
        "Smoky, charred favorites prepared fresh for an unforgettable dining experience.",
    },
    {
      imge: PaneerButterMasala,
      Title: "A Feast of Indian Classics",
      subheading:
        "Discover timeless curries, fragrant biryanis, fresh breads, and indulgent desserts.",
    },
    {
      imge: LambRoganJosh,
      Title: "Tradition on Every Plate",
      subheading:
        "Recipes inspired by India’s rich culinary heritage, crafted for today’s table.",
    },
    {
      imge: LambBiryani,
      Title: "Make Tonight Memorable",
      subheading:
        "Gather around exceptional food, elegant surroundings, and genuine hospitality.",
    },
  ];
  const divTagRef = useRef<HTMLDivElement | null>(null);

  const [nextNumber, setNextNumber] = useState(0);
  const NextImage = () => {
    setNextNumber((prev) => (prev + 1) % foodImage.length);
  };

  const BackImage = () => {
    setNextNumber((prev) => (prev - 1 + foodImage.length) % foodImage.length);
  };

  return (
    <>
      <motion.div
        ref={divTagRef}
        className="relative flex h-full w-full flex-col gap-1"
      >
        <motion.div className="flex h-full w-full gap-1">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={nextNumber}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              exit={{ opacity: 0 }}
              drag="x"
              dragDirectionLock
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x <= -50) NextImage();
                if (info.offset.x >= 50) BackImage();
              }}
              className="relative flex h-full w-full shrink-0 items-center justify-center md:w-1/3"
              id="singleImage"
            >
              <img
                src={foodImage[nextNumber].imge}
                alt={foodImage[nextNumber].Title}
                className="absolute inset-0 h-full w-full object-fill"
              />
              <motion.span
                initial={{
                  opacity: 0.5,
                }}
                animate={{
                  opacity: 0.8,
                }}
                transition={{
                  duration: 0.6,
                }}
                className="absolute inset-0 bg-black"
              />
              <motion.div
                initial={{
                  opacity: 0.5,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                }}
                className="absolute flex flex-col gap-2"
              >
                <h1 className="text-texts-200 text-center text-xl">
                  {foodImage[nextNumber].Title}
                </h1>
                <h3 className="text-texts-100 text-center">
                  {foodImage[nextNumber].subheading}
                </h3>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="absolute top-1/2 z-50 flex w-full items-center justify-between gap-10 p-2">
          <RestaurantButton
            className="rounded-4xl border p-1"
            onClick={BackImage}
          >
            <IconArrowNarrowLeft stroke={2} color="#ffffff" />
          </RestaurantButton>

          <RestaurantButton
            className="rounded-4xl border p-1"
            onClick={NextImage}
          >
            <IconArrowNarrowRight stroke={2} color="#ffffff" />
          </RestaurantButton>
        </div>
      </motion.div>
    </>
  );
}
