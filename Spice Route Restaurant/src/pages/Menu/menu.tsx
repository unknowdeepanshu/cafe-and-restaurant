import HeaderTitle from "@/components/headerTitle/headerTitle";

import FoodsfilterSection from "@/Sections/foodsfilterSection/foodsfilterSection";

function Menu() {
  const MenuHeader =
    "https://res.cloudinary.com/eqeizsgi/image/upload/v1791306200/MenuHeader.webp";
  return (
    <>
      <HeaderTitle img={MenuHeader} Title="Discover Our menu" />
      <FoodsfilterSection />
    </>
  );
}

export default Menu;
