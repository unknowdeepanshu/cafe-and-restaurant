import Forkknife from "@/assets/decoration/fork,knife,spoon .webp";
import { useIsMobile } from "@/hook/matchMedia";
import { cn } from "@/lib/utils";
import RestaurantButton from "@/ui/button/button";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useState } from "react";
import { getFoodsByType } from "./foods";

const NavTitle = [
  "All",
  "Starters",
  "Tandoor",
  "Main Course",
  "Breads",
  "Desserts",
  "Drinks",
];

const menuListVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    },
  },

  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const menuItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: "easeOut",
    },
  },

  exit: {
    y: -10,
    transition: {
      duration: 0.15,
      ease: "easeIn",
    },
  },
};

function FoodsfilterSection() {
  const [menu, setMenu] = useState("All");
  const allTypeFoods = getFoodsByType(menu);
  return (
    <>
      <section className="h-fit w-full flex-col px-4 md:px-16">
        <MenuTab active={menu} SetActive={setMenu} />
        <motion.div className="my-10 flex h-fit w-full flex-wrap justify-between gap-5">
          <AnimatePresence initial={false} mode="popLayout">
            {allTypeFoods.map((food, index) => (
              <FoodsCard
                Title={food.Title}
                key={food.Title}
                index={index}
                Price={food.Price}
                Description={food.Description}
                FoodType={food.FoodType}
                FoodImage={food.FoodImage}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}

export default FoodsfilterSection;

interface MenuTabProps {
  active?: string;
  SetActive?: (menu: string) => void;
}

function MenuTab({ active, SetActive }: MenuTabProps) {
  const [open, setOpen] = useState(false);
  const { isMaxTablet } = useIsMobile();
  return (
    <>
      <div className="flex h-fit w-full justify-between">
        {isMaxTablet ? (
          <>
            <div className="flex h-full w-full flex-col items-center justify-center py-10">
              <RestaurantButton
                className="w-full"
                onClick={() => setOpen((prev) => !prev)}
              >
                Menu Category
              </RestaurantButton>
              <AnimatePresence>
                {open ? (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuListVariants}
                    className="border-line-300 mt-2 flex h-fit w-full items-center justify-center border-2"
                  >
                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 p-2 lg:gap-8 lg:p-5">
                      {NavTitle.map((title, index) => (
                        <motion.span
                          onClick={() => {
                            SetActive?.(title);
                          }}
                          key={index}
                          id="Header"
                          variants={menuItemVariants}
                          className={cn(
                            "hover:text-texts-100 cursor-pointer text-2xl",
                            active === title
                              ? "text-texts-100"
                              : "text-texts-200",
                          )}
                        >
                          {title}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </>
        ) : (
          <>
            <img src={Forkknife} alt="Forkknife" className="h-[10%] w-[10%]" />
            <div className="flex h-fit w-fit items-center justify-center p-10">
              <div className="border-line-300 flex h-fit w-full items-center justify-center border-2">
                <div className="flex h-full w-full gap-2 p-2 lg:gap-8 lg:p-5">
                  {NavTitle.map((title, index) => (
                    <span
                      onClick={() => {
                        SetActive?.(title);
                      }}
                      key={index}
                      id="Header"
                      className={cn(
                        "hover:text-texts-100 cursor-pointer text-[0.9rem] xl:text-2xl",
                        active === title ? "text-texts-100" : "text-texts-200",
                      )}
                    >
                      {title}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <img src={Forkknife} alt="Forkknife" className="h-[10%] w-[10%]" />
          </>
        )}
      </div>
    </>
  );
}

interface FoodsCardProps {
  FoodImage: string;
  Title: string;
  FoodType: string;
  Description: string;
  Price: string;
  index: number;
}

function FoodsCard({
  FoodImage,
  FoodType,
  Title,
  Price,
  Description,
  index,
}: FoodsCardProps) {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 16, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -16, scale: 0.98 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay: index * 0.06,
        }}
        className="bg-card-100 flex h-fit w-full flex-col sm:w-[48%] xl:w-[23%]"
      >
        <img
          src={FoodImage}
          alt={`${Title}`}
          className="h-[18.063rem] w-full object-fill hover:opacity-55"
          loading="lazy"
          decoding="async"
        />
        <div className="flex h-fit w-full flex-col gap-3 p-6">
          <div className="flex h-fit w-full justify-between">
            <span className="text-texts-100 text-[0.9rem] xl:text-2xl">
              {Title}
            </span>
            <img src={FoodType} alt="Veg" className="h-[10%] w-[10%]" />
          </div>
          <div className="flex h-fit w-full flex-col justify-between gap-3">
            <p className="text-texts-200 text-[0.9rem] xl:text-[1.25rem]">
              {Description}
            </p>
            <div className="bg-texts-300 flex h-fit w-fit items-center justify-center p-1 xl:p-4">
              <span
                id="NatoBold"
                className="text-texts-100 text-[0.9rem] xl:text-[1.313rem]"
              >
                {Price}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
