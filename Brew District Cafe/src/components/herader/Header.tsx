import Button from "../../ui/button/Button";

function Header() {
  return (
    <>
      <nav className="mx-3.5 mt-4 flex max-h-12 justify-between sm:mx-16">
        <h1
          id="logo"
          className="text-DarkGreen text-[1.063rem] sm:text-2xl lg:text-[2.5rem]"
        >
          Brew District Cafe
        </h1>{" "}
        <Button text={"Get Directions"} Brown={true} />
      </nav>
    </>
  );
}

export default Header;
