import HeaderTitle from "@/components/headerTitle/headerTitle";
import MenuHeader from "@/assets/HeaderImages/MenuHeader.webp";
import FoodsfilterSection from "@/Sections/foodsfilterSection/foodsfilterSection";

function Menu() {
  return (
    <>
      <HeaderTitle img={MenuHeader} Title="Discover Our menu" />
      <FoodsfilterSection />
    </>
  );
}

export default Menu;
