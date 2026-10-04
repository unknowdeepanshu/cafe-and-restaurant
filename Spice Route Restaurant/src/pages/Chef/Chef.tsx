import HeaderTitle from "@/components/headerTitle/headerTitle";
import Ketchen from "@/assets/kitchen.png";
import {
  ExecutiveChefs,
  HeadChefs,
  TandoorChefs,
  CurryChefs,
  DesserChefs,
} from "@/assets/chef";
import RestaurantButton from "@/ui/button/button";
import { SocialIcon } from "@/ui/scoiaMedia/socialIcon";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
  IconPlus,
} from "@tabler/icons-react";
import { useIsMobile } from "@/hook/matchMedia";

const scoliadMedia = [
  <IconBrandFacebook color="#ffffff" />,
  <IconBrandInstagram color="#ffffff" />,
  <IconBrandX color="#ffffff" />,
  <IconBrandYoutube color="#ffffff" />,
];
function Chef() {
  const chefList = [
    {
      ChefImg: ExecutiveChefs,
      Chefposition: "Executive Chef",
      ChefName: "Arjun Mehra",
    },
    {
      ChefImg: HeadChefs,
      Chefposition: "Head Chef",
      ChefName: "Kabir Khan",
    },
    {
      ChefImg: TandoorChefs,
      Chefposition: "Tandoor Chef",
      ChefName: "Rohan Malhotra",
    },
  ];
  const Chefs = [
    {
      ChefImg: CurryChefs,
      Chefposition: "Curry Chef",
      ChefName: "Sameer Kapoor",
    },
    {
      ChefImg: DesserChefs,
      Chefposition: "Dessert Chef",
      ChefName: "Vikram Sethi",
    },
  ];
  const { isLargeDesktop } = useIsMobile();
  return (
    <>
      <section>
        <HeaderTitle img={Ketchen} Title="Our Chefs" />
        <div className="flex h-fit w-full flex-wrap justify-between gap-5 px-4 py-10 md:px-16">
          <div className="h-fit w-full items-center justify-center">
            <h1
              id="Header"
              className="text-texts-200 text-center text-4xl sm:text-6xl md:text-7xl"
            >
              Meet Our{" "}
              <span id="restaurantNames" className="text-texts-300">
                Chefs
              </span>
            </h1>
          </div>

          {isLargeDesktop ? (
            <>
              <div className="flex h-fit w-full flex-wrap justify-center gap-4 md:justify-between">
                {chefList.map((chef, index) => (
                  <Chefcard
                    key={index}
                    img={chef.ChefImg}
                    ChefPosition={chef.Chefposition}
                    ChefName={chef.ChefName}
                  />
                ))}
              </div>
              <div className="flex h-fit w-full flex-wrap justify-center gap-4 md:justify-around">
                {Chefs.map((chef, index) => (
                  <Chefcard
                    key={index}
                    img={chef.ChefImg}
                    ChefPosition={chef.Chefposition}
                    ChefName={chef.ChefName}
                  />
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="flex h-fit w-full flex-wrap justify-center gap-4 md:justify-center lg:justify-between">
                {chefList.map((chef, index) => (
                  <Chefcard
                    key={index}
                    img={chef.ChefImg}
                    ChefPosition={chef.Chefposition}
                    ChefName={chef.ChefName}
                  />
                ))}
                {Chefs.map((chef, index) => (
                  <Chefcard
                    key={index}
                    img={chef.ChefImg}
                    ChefPosition={chef.Chefposition}
                    ChefName={chef.ChefName}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default Chef;

interface ChefcardPropd {
  img: string;
  ChefName: string;
  ChefPosition: string;
}

function Chefcard({ img, ChefPosition, ChefName }: ChefcardPropd) {
  return (
    <>
      <div className="flex h-fit w-fit">
        <div className="bg-card-100 flex h-fit w-fit flex-col gap-4 rounded-3xl p-4">
          <img
            src={img}
            alt={ChefPosition}
            className="h-fit w-104 rounded-3xl opacity-85"
          />
          <div className="flex h-fit w-full flex-col gap-4">
            <div className="flex h-fit w-full flex-col gap-2">
              <h1 className="text-texts-200 text-[29px]">{ChefName}</h1>
              <h3 className="text-texts-100 text-[20px]">{ChefPosition}</h3>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                {scoliadMedia.map((icon, index) => (
                  <SocialIcon key={index} children={icon} />
                ))}
              </div>
              <RestaurantButton className="flex gap-2 p-2">
                Follow
                <IconPlus stroke={3} />
              </RestaurantButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
