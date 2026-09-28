import {
  CurryChef,
  DesserChef,
  TandoorChef,
  HeadChef,
  ExecutiveChef,
} from "@/assets/chefImage";
import { ChefCard, ChefCardMobile } from "@/components/ChefCard/ChefCard";
import { useIsMobile } from "@/hook/matchMedia";

function ChefSections() {
  const { isMobile, isTablet } = useIsMobile();
  return (
    <>
      <section className="h-fit">
        {isMobile ? (
          <MobileViewChef />
        ) : isTablet ? (
          <DesktopViewChef />
        ) : (
          <TabletViewChef />
        )}
      </section>
    </>
  );
}

function DesktopViewChef() {
  const leftChef = [
    {
      ChefImg: CurryChef,
      position: "Curry Chef",
      ChefName: "Chef Sameer Kapoor",
      Description:
        "Chef Sameer creates elegant vegetarian dishes inspired by the flavours of Punjab and Delhi. His specialties include paneer tikka, dal makhani and seasonal vegetable curries prepared with carefully balanced spices.",
    },
    {
      ChefImg: DesserChef,
      position: "Dessert Chef",
      ChefName: "Chef Vikram Sethi",
      Description:
        "Chef Vikram leads the kitchen with a focus on traditional recipes and consistent quality. His menu favourites include lamb rogan josh, mutton biryani and classic Indian desserts made with a contemporary touch.",
    },
  ];
  const rightChef = [
    {
      ChefImg: ExecutiveChef,
      position: "Executive Chef",
      ChefName: "Chef Arjun Mehra",
      Description:
        "Chef Arjun brings over 15 years of experience in North Indian cuisine. Known for his rich butter chicken, smoky kebabs and traditional cooking techniques, he creates dishes that feel familiar, comforting and full of flavour.",
    },
    {
      ChefImg: HeadChef,
      position: "Head Chef",
      ChefName: "Chef Kabir Khan",
      Description:
        "With a passion for Mughlai cuisine, Chef Kabir specialises in slow-cooked curries, aromatic biryanis and tender kebabs. His cooking combines royal Indian recipes with a refined modern presentation.",
    },
    {
      ChefImg: TandoorChef,
      position: "Tandoor Chef",
      ChefName: "Chef Rohan Malhotra",
      Description:
        "Chef Rohan is known for his expertise in tandoor cooking. From soft naan to perfectly charred chicken tikka, he focuses on bold spices, fresh ingredients and the unmistakable flavour of clay-oven cooking.",
    },
  ];

  return (
    <>
      <div className="flex h-full w-full px-16 py-30">
        <div className="w-1/2">
          <div className="flex w-full lg:h-[31.688rem]">
            <h1
              id="Header"
              className="text-texts-300 w-1/2 text-[6.813rem] leading-[8.125rem] lg:text-[13.063rem] lg:leading-[10.125rem]"
            >
              Meet The Chef
            </h1>
          </div>
          <div className="border-line-100 flex h-fit w-full flex-col justify-between border-l-4">
            {leftChef.map((Chef, index) => (
              <ChefCard key={index} Chef={Chef} />
            ))}
          </div>
        </div>
        <div className="w-1/2">
          {" "}
          <div className="border-line-100 flex h-fit w-full flex-col justify-between border-l-4">
            {rightChef.map((Chef, index) => (
              <ChefCard key={index} Chef={Chef} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function TabletViewChef() {
  const chefList = [
    {
      ChefImg: ExecutiveChef,
      position: "Executive Chef",
      ChefName: "Chef Arjun Mehra",
      Description:
        "Chef Arjun brings over 15 years of experience in North Indian cuisine. Known for his rich butter chicken, smoky kebabs and traditional cooking techniques, he creates dishes that feel familiar, comforting and full of flavour.",
    },
    {
      ChefImg: HeadChef,
      position: "Head Chef",
      ChefName: "Chef Kabir Khan",
      Description:
        "With a passion for Mughlai cuisine, Chef Kabir specialises in slow-cooked curries, aromatic biryanis and tender kebabs. His cooking combines royal Indian recipes with a refined modern presentation.",
    },
    {
      ChefImg: TandoorChef,
      position: "Tandoor Chef",
      ChefName: "Chef Rohan Malhotra",
      Description:
        "Chef Rohan is known for his expertise in tandoor cooking. From soft naan to perfectly charred chicken tikka, he focuses on bold spices, fresh ingredients and the unmistakable flavour of clay-oven cooking.",
    },
    {
      ChefImg: CurryChef,
      position: "Curry Chef",
      ChefName: "Chef Sameer Kapoor",
      Description:
        "Chef Sameer creates elegant vegetarian dishes inspired by the flavours of Punjab and Delhi. His specialties include paneer tikka, dal makhani and seasonal vegetable curries prepared with carefully balanced spices.",
    },
    {
      ChefImg: DesserChef,
      position: "Dessert Chef",
      ChefName: "Chef Vikram Sethi",
      Description:
        "Chef Vikram leads the kitchen with a focus on traditional recipes and consistent quality. His menu favourites include lamb rogan josh, mutton biryani and classic Indian desserts made with a contemporary touch.",
    },
  ];
  return (
    <>
      <div className="flex h-full w-full px-4 py-30 md:px-16">
        <div className="w-full">
          <div className="flex h-fit w-full items-center justify-center">
            <h1
              id="Header"
              className="text-texts-300 w-full text-center text-7xl"
            >
              Meet The Chef
            </h1>
          </div>
          <div className="border-line-100 flex h-fit w-full flex-col justify-between border-l-4">
            {chefList.map((Chef, index) => (
              <ChefCard key={index} Chef={Chef} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
function MobileViewChef() {
  const chefList = [
    {
      ChefImg: ExecutiveChef,
      position: "Executive Chef",
      ChefName: "Chef Arjun Mehra",
      Description:
        "Chef Arjun brings over 15 years of experience in North Indian cuisine. Known for his rich butter chicken, smoky kebabs and traditional cooking techniques, he creates dishes that feel familiar, comforting and full of flavour.",
    },
    {
      ChefImg: HeadChef,
      position: "Head Chef",
      ChefName: "Chef Kabir Khan",
      Description:
        "With a passion for Mughlai cuisine, Chef Kabir specialises in slow-cooked curries, aromatic biryanis and tender kebabs. His cooking combines royal Indian recipes with a refined modern presentation.",
    },
    {
      ChefImg: TandoorChef,
      position: "Tandoor Chef",
      ChefName: "Chef Rohan Malhotra",
      Description:
        "Chef Rohan is known for his expertise in tandoor cooking. From soft naan to perfectly charred chicken tikka, he focuses on bold spices, fresh ingredients and the unmistakable flavour of clay-oven cooking.",
    },
    {
      ChefImg: CurryChef,
      position: "Curry Chef",
      ChefName: "Chef Sameer Kapoor",
      Description:
        "Chef Sameer creates elegant vegetarian dishes inspired by the flavours of Punjab and Delhi. His specialties include paneer tikka, dal makhani and seasonal vegetable curries prepared with carefully balanced spices.",
    },
    {
      ChefImg: DesserChef,
      position: "Dessert Chef",
      ChefName: "Chef Vikram Sethi",
      Description:
        "Chef Vikram leads the kitchen with a focus on traditional recipes and consistent quality. His menu favourites include lamb rogan josh, mutton biryani and classic Indian desserts made with a contemporary touch.",
    },
  ];
  return (
    <>
      <div className="flex h-full w-full px-4 py-30 md:px-16">
        <div className="w-full">
          <div className="flex h-fit w-full items-center justify-center">
            <h1
              id="Header"
              className="text-texts-300 w-full text-center text-7xl"
            >
              Meet The Chef
            </h1>
          </div>
          <div className="border-line-100 flex h-fit w-full flex-col justify-between border-l-4">
            {chefList.map((Chef, index) => (
              <ChefCardMobile key={index} Chef={Chef} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ChefSections;
