import Forkknife from "@/assets/decoration/fork,knife,spoon .png";
import { MuttonKormas } from "@/assets/foods";
import { Veg, NonVeg } from "@/assets/vegAndNon-veg logo";
import { useIsMobile } from "@/hook/matchMedia";
import { cn } from "@/lib/utils";
import RestaurantButton from "@/ui/button/button";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";
// There is foods
import {
  ButterNaan,
  GarlicNaan,
  LacchaParatha,
  PeshawariNaan,
  TandooriRoti,
} from "@/assets/menuFoods/Breads";
import {
  ChickenHandi,
  DalMakhani,
  MuttonKorma,
  LambBiryani,
  LambRoganJosh,
  PaneerButterMasala,
  ButterChicken,
  HyderabadiChickenBiryani,
} from "@/assets/menuFoods/Main Course";
import {
  ChickenSeekhKebab,
  DahiKeKebab,
  GaloutiKebab,
  PaneerTikka,
  SamosaChat,
} from "@/assets/menuFoods/Starters";
import {
  ChickenTikka,
  MalaiChickenTikka,
  TandooriChicken,
  TandooriPaneerTikka,
  TandooriPrawns,
} from "@/assets/menuFoods/Tandoor";
import {
  MasalaChai,
  MangoLassi,
  KesarBadamMilk,
  SweetLassi,
  FreshLimeSoda,
} from "@/assets/menuFoods/Drinks";
import {
  Rasmalai,
  ShahiTukda,
  GajarKaHalwa,
  GulabJamun,
} from "@/assets/menuFoods/Desserts";

const AllFoods = [
  // ==================== BREADS ====================
  {
    FoodImage: ButterNaan,
    Title: "Butter Naan",
    Type: "Breads",
    FoodType: Veg,
    Description:
      "Soft and fluffy tandoor-baked naan brushed with melted butter for a rich and comforting finish.",
    Price: "12 AED",
  },
  {
    FoodImage: GarlicNaan,
    Title: "Garlic Naan",
    Type: "Breads",
    FoodType: Veg,
    Description:
      "Freshly baked naan topped with fragrant garlic, coriander, and a touch of butter.",
    Price: "14 AED",
  },
  {
    FoodImage: LacchaParatha,
    Title: "Laccha Paratha",
    Type: "Breads",
    FoodType: Veg,
    Description:
      "Flaky, layered Indian bread cooked until golden and crisp with a beautifully buttery texture.",
    Price: "15 AED",
  },
  {
    FoodImage: PeshawariNaan,
    Title: "Peshawari Naan",
    Type: "Breads",
    FoodType: Veg,
    Description:
      "Soft naan filled with nuts, coconut, and sweet aromatic flavors, finished beautifully in the tandoor.",
    Price: "18 AED",
  },
  {
    FoodImage: TandooriRoti,
    Title: "Tandoori Roti",
    Type: "Breads",
    FoodType: Veg,
    Description:
      "Traditional whole-wheat roti baked in the tandoor for a lightly charred and rustic finish.",
    Price: "9 AED",
  },

  // ==================== STARTERS ====================
  {
    FoodImage: ChickenSeekhKebab,
    Title: "Chicken Seekh Kebab",
    Type: "Starters",
    FoodType: NonVeg,
    Description:
      "Juicy minced chicken blended with aromatic herbs and spices, skewered and grilled over high heat.",
    Price: "32 AED",
  },
  {
    FoodImage: DahiKeKebab,
    Title: "Dahi Ke Kebab",
    Type: "Starters",
    FoodType: Veg,
    Description:
      "Delicate kebabs made with hung yogurt, herbs, and mild spices, crisp outside and creamy inside.",
    Price: "28 AED",
  },
  {
    FoodImage: GaloutiKebab,
    Title: "Galouti Kebab",
    Type: "Starters",
    FoodType: NonVeg,
    Description:
      "Melt-in-the-mouth minced meat kebabs infused with delicate Mughlai spices and traditional aromatics.",
    Price: "38 AED",
  },
  {
    FoodImage: PaneerTikka,
    Title: "Paneer Tikka",
    Type: "Starters",
    FoodType: Veg,
    Description:
      "Chunks of Indian cottage cheese marinated in spiced yogurt and grilled until lightly charred.",
    Price: "30 AED",
  },
  {
    FoodImage: SamosaChat,
    Title: "Samosa Chaat",
    Type: "Starters",
    FoodType: Veg,
    Description:
      "Crispy samosas topped with creamy yogurt, tangy chutneys, chickpeas, and aromatic chaat spices.",
    Price: "24 AED",
  },

  // ==================== DESSERTS ====================
  {
    FoodImage: Rasmalai,
    Title: "Rasmalai",
    Type: "Desserts",
    FoodType: Veg,
    Description:
      "Soft cottage-cheese dumplings soaked in chilled saffron-infused milk and finished with nuts.",
    Price: "22 AED",
  },
  {
    FoodImage: ShahiTukda,
    Title: "Shahi Tukda",
    Type: "Desserts",
    FoodType: Veg,
    Description:
      "Golden fried bread layered with rich rabri, saffron, cardamom, and crunchy nuts.",
    Price: "24 AED",
  },
  {
    FoodImage: GajarKaHalwa,
    Title: "Gajar Ka Halwa",
    Type: "Desserts",
    FoodType: Veg,
    Description:
      "Slow-cooked carrots prepared with milk, cardamom, and nuts for a rich and comforting classic.",
    Price: "22 AED",
  },
  {
    FoodImage: GulabJamun,
    Title: "Gulab Jamun",
    Type: "Desserts",
    FoodType: Veg,
    Description:
      "Soft golden dumplings soaked in warm rose and cardamom syrup, served as a timeless Indian favorite.",
    Price: "20 AED",
  },

  // ==================== TANDOOR ====================
  {
    FoodImage: ChickenTikka,
    Title: "Chicken Tikka",
    Type: "Tandoor",
    FoodType: NonVeg,
    Description:
      "Tender chicken pieces marinated in spiced yogurt and roasted in the tandoor for a smoky finish.",
    Price: "36 AED",
  },
  {
    FoodImage: MalaiChickenTikka,
    Title: "Malai Chicken Tikka",
    Type: "Tandoor",
    FoodType: NonVeg,
    Description:
      "Succulent chicken marinated with cream, cheese, herbs, and mild spices for a rich, delicate flavor.",
    Price: "39 AED",
  },
  {
    FoodImage: TandooriChicken,
    Title: "Tandoori Chicken",
    Type: "Tandoor",
    FoodType: NonVeg,
    Description:
      "Classic chicken marinated in yogurt and aromatic spices, then roasted in the traditional clay tandoor.",
    Price: "42 AED",
  },
  {
    FoodImage: TandooriPaneerTikka,
    Title: "Tandoori Paneer Tikka",
    Type: "Tandoor",
    FoodType: Veg,
    Description:
      "Paneer, peppers, and onions marinated in spiced yogurt and grilled over the tandoor for smoky flavor.",
    Price: "32 AED",
  },
  {
    FoodImage: TandooriPrawns,
    Title: "Tandoori Prawns",
    Type: "Tandoor",
    FoodType: NonVeg,
    Description:
      "Juicy prawns marinated with aromatic Indian spices and roasted in the tandoor for a smoky finish.",
    Price: "48 AED",
  },

  // ==================== DRINKS ====================
  {
    FoodImage: MasalaChai,
    Title: "Masala Chai",
    Type: "Drinks",
    FoodType: Veg,
    Description:
      "Traditional Indian tea brewed with milk, cardamom, cinnamon, ginger, and warming spices.",
    Price: "12 AED",
  },
  {
    FoodImage: MangoLassi,
    Title: "Mango Lassi",
    Type: "Drinks",
    FoodType: Veg,
    Description:
      "Creamy yogurt blended with ripe mangoes for a refreshing, naturally sweet Indian classic.",
    Price: "18 AED",
  },
  {
    FoodImage: KesarBadamMilk,
    Title: "Kesar Badam Milk",
    Type: "Drinks",
    FoodType: Veg,
    Description:
      "Chilled milk infused with saffron, almonds, and cardamom for a rich and aromatic drink.",
    Price: "20 AED",
  },
  {
    FoodImage: SweetLassi,
    Title: "Sweet Lassi",
    Type: "Drinks",
    FoodType: Veg,
    Description:
      "Smooth and refreshing yogurt drink lightly sweetened and served chilled.",
    Price: "16 AED",
  },
  {
    FoodImage: FreshLimeSoda,
    Title: "Fresh Lime Soda",
    Type: "Drinks",
    FoodType: Veg,
    Description:
      "Fresh lime juice topped with sparkling soda for a bright, crisp, and refreshing drink.",
    Price: "14 AED",
  },

  // ==================== MAIN COURSE ====================
  {
    FoodImage: DalMakhani,
    Title: "Dal Makhani",
    Type: "Main Course",
    FoodType: Veg,
    Description:
      "Slow-cooked black lentils simmered with butter, cream, and aromatic spices for a rich Punjabi classic.",
    Price: "32 AED",
  },
  {
    FoodImage: PaneerButterMasala,
    Title: "Paneer Butter Masala",
    Type: "Main Course",
    FoodType: Veg,
    Description:
      "Soft paneer cooked in a creamy tomato and butter gravy with gentle spices and aromatic herbs.",
    Price: "34 AED",
  },
  {
    FoodImage: ChickenHandi,
    Title: "Chicken Handi",
    Type: "Main Course",
    FoodType: NonVeg,
    Description:
      "Tender chicken slow-cooked with tomatoes, onions, herbs, and fragrant spices in a traditional handi.",
    Price: "42 AED",
  },
  {
    FoodImage: MuttonKorma,
    Title: "Mutton Korma",
    Type: "Main Course",
    FoodType: NonVeg,
    Description:
      "Tender mutton simmered in a luxurious yogurt-based gravy with fried onions and warm Mughlai spices.",
    Price: "48 AED",
  },
  {
    FoodImage: LambBiryani,
    Title: "Lamb Biryani",
    Type: "Main Course",
    FoodType: NonVeg,
    Description:
      "Fragrant basmati rice layered with tender lamb, saffron, herbs, and aromatic spices.",
    Price: "46 AED",
  },
  {
    FoodImage: LambRoganJosh,
    Title: "Lamb Rogan Josh",
    Type: "Main Course",
    FoodType: NonVeg,
    Description:
      "Slow-cooked lamb in a rich Kashmiri-style gravy infused with aromatic spices and a deep, warming flavor.",
    Price: "49 AED",
  },
  {
    FoodImage: ButterChicken,
    Title: "Butter Chicken",
    Type: "Main Course",
    FoodType: NonVeg,
    Description:
      "Tender chicken simmered in a rich tomato, butter, and cream gravy with delicate Indian spices.",
    Price: "44 AED",
  },
  {
    FoodImage: HyderabadiChickenBiryani,
    Title: "Hyderabadi Chicken Biryani",
    Type: "Main Course",
    FoodType: NonVeg,
    Description:
      "Aromatic basmati rice layered with spiced chicken, saffron, fried onions, and traditional Hyderabadi flavors.",
    Price: "42 AED",
  },
];

const NavTitle = [
  "All",
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
        <div className="my-10 flex h-fit w-full flex-wrap justify-between gap-5">
          {AllFoods.map((food, index) => (
            <FoodsCard
              Title={food.Title}
              key={index}
              Price={food.Price}
              Description={food.Description}
              FoodType={food.FoodType}
              FoodImage={food.FoodImage}
            />
          ))}
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
}

function FoodsCard({
  FoodImage,
  FoodType,
  Title,
  Price,
  Description,
}: FoodsCardProps) {
  return (
    <>
      <div className="bg-card-100 flex h-fit w-full flex-col sm:w-[48%] xl:w-[23%]">
        <img
          src={FoodImage}
          alt="MuttonKormas"
          className="h-[18.063rem] w-full object-fill hover:opacity-55"
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
      </div>
    </>
  );
}
