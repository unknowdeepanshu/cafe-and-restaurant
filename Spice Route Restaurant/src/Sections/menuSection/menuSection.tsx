import decortion from "@/assets/decoration/decoration.png";
import Kebab from "@/assets/menuThree/Lamb Seekh Kebab.jpg";
import Chat from "@/assets/menuThree/Samosa Chaat.jpg";
import Chicken from "@/assets/menuThree/Butter chicken.jpg";
import { motion } from "motion/react";
import { NavLink } from "react-router";

function MenuSection() {
  const foods = [
    {
      Image: Kebab,
      title: "🥙 Kebab",
      Description:
        "Tender, perfectly seasoned meat grilled over an open flame, delivering smoky char and rich Indian spices in every bite.",
    },
    {
      Image: Chat,
      title: "🥟 Samosa Chaat",
      Description:
        "Crispy golden samosas topped with tangy chutneys, creamy yogurt, and aromatic spices for the perfect sweet, spicy, and savory bite.",
    },
    {
      Image: Chicken,
      title: "🍛 Butter Chicken",
      Description:
        "Tender chicken simmered in a rich, creamy tomato gravy, delicately spiced and finished with butter for a classic North Indian favorite.",
    },
  ];
  return (
    <>
      <section className="relative flex h-fit w-full items-center justify-center">
        <div className="flex h-full w-full flex-col gap-5 py-30 md:gap-10">
          <div className="flex w-full flex-col items-center justify-center gap-8">
            <h1
              id="Header"
              className="text-texts-200 inline-block text-4xl sm:text-6xl md:text-7xl"
            >
              <span id="Header" className="text-texts-300">
                Menu
              </span>
              <hr className="border-line-100 w-full rounded-2xl border-2" />
            </h1>
          </div>
          <div className="flex h-full w-full flex-col">
            <div className="flex w-full flex-col gap-4 px-4 sm:flex-row sm:flex-wrap md:px-16 lg:flex-nowrap">
              {foods.map((ima, index) => (
                <ImageCard
                  ima={ima.Image}
                  title={ima.title}
                  desciption={ima.Description}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="flex h-full w-full items-center justify-center">
            <NavLink
              className="border-button-100 text-texts-200 bg-button-100 lg:text-texts-200 lg:hover:bg-button-100 rounded-md border-4 px-7 py-3 font-semibold shadow-[0_0_18px_rgba(201,164,92,0.25)] transition-all duration-300 md:text-[#0D0A08] lg:bg-transparent lg:shadow-none lg:hover:text-[#0D0A08] lg:hover:shadow-[0_0_18px_rgba(201,164,92,0.25)]"
              to="/menu"
            >
              Explore Menu
            </NavLink>
          </div>
        </div>
        <img
          src={decortion}
          alt="decortion"
          className="absolute top-0 right-0 -z-1 opacity-18"
        />
        <img
          src={decortion}
          alt="decortion"
          className="absolute bottom-0 left-0 -z-1 rotate-180 opacity-18"
        />
      </section>
    </>
  );
}

export default MenuSection;

function ImageCard({
  ima,
  title,
  desciption,
}: {
  ima: string;
  title: string;
  desciption: string;
}) {
  return (
    <>
      <div className="group aspect-4/5 h-auto w-full perspective-[1000px]">
        <motion.div className="relative h-full w-full transition-transform duration-500 transform-3d group-hover:rotate-y-180">
          <motion.img
            src={ima}
            alt="welcome"
            className="absolute inset-0 h-full w-full rounded-2xl object-cover backface-hidden"
          />
          <motion.div className="bg-card-100 absolute inset-0 flex rotate-y-180 flex-col items-center justify-center gap-4 rounded-2xl p-15 backface-hidden">
            <span className="text-texts-100 text-2xl">{title}</span>
            <p className="text-texts-200 text-[1rem]">{desciption}</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}
