function Header() {
  return (
    <>
      <nav className="mx-16 mt-4 flex max-h-12 justify-between">
        <h1 id="logo" className="text-DarkGreen text-[2.5rem]">
          Brew District Cafe
        </h1>
        <button className="bg-Orange flex items-center justify-center rounded-[0.6rem] p-3">
          <a className="text-Brown-700 text-2xl">Get Directions</a>
        </button>
      </nav>
    </>
  );
}

export default Header;
