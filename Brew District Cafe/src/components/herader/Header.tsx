function Header() {
  return (
    <>
      <nav className="mx-16 mt-4 flex max-h-12 justify-between">
        <h1 id="logo" className="text-DarkGreen text-2xl lg:text-[2.5rem]">
          Brew District Cafe
        </h1>{" "}
        <button className="bg-Orange text-Brown-700 h-7 w-30 rounded-[0.6rem] text-[0.9rem] md:h-8 md:w-30 md:text-[0.9rem] lg:h-10 lg:w-40 lg:text-[1.2rem]">
          <a className="text-Brown-700">Get Directions</a>
        </button>
      </nav>
    </>
  );
}

export default Header;
