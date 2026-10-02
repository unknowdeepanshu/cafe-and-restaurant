import Forkknife from "@/assets/decoration/fork,knife,spoon .png";
import { MuttonKormas } from "@/assets/foods";
import { Veg } from "@/assets/vegAndNon-veg logo";
import { useIsMobile } from "@/hook/matchMedia";
import { cn } from "@/lib/utils";
import RestaurantButton from "@/ui/button/button";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";

const NavTitle = [
  "Starters",
  "Tandoor",
  "Main course",
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
  const [menu, setMenu] = useState(" ");
  useEffect(() => {
    console.log("this is menu name", menu);
  }, [menu]);
  return (
    <>
      <section className="h-fit w-full flex-col px-4 md:px-16">
        <MenuTab active={menu} SetActive={setMenu} />
        <div className="flex h-[80vh] w-full justify-between">
          <FoodsCard /> <FoodsCard /> <FoodsCard />
        </div>
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
  const { isTablet } = useIsMobile();
  return (
    <>
      <div className="flex h-fit w-full justify-between">
        {isTablet ? (
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
                        "hover:text-texts-100 cursor-pointer text-[1rem] xl:text-2xl",
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

function FoodsCard() {
  return (
    <>
      <div className="bg-card-100 flex h-fit w-[32%] flex-col">
        <img
          src={MuttonKormas}
          alt="MuttonKormas"
          className="h-full w-full opacity-55"
        />
        <div className="flex h-fit w-full flex-col gap-3 p-6">
          <div className="flex h-fit w-full justify-between">
            <span className="text-texts-100 text-2xl">Mutton korma</span>
            <img src={Veg} alt="Veg" className="h-7.5 w-7.5" />
          </div>
          <div className="flex h-fit w-full flex-col justify-between gap-3">
            <p className="text-texts-200 text-[1.25rem]">
              Mutton korma is a rich, aromatic, and traditional Indian meat
              curry made with yogurt, fried onions, and warm spices.
            </p>
            <div className="bg-texts-300 flex h-fit w-fit items-center justify-center p-4">
              <span id="NatoBold" className="text-texts-100 text-[1.313rem]">
                112 AED
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
