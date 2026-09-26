import RestaurantButton from "@/ui/button/button";
import { IconMenu2 } from "@tabler/icons-react";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);
  const NavMenu = [
    "Home",
    "Menu",
    "About",
    "Gallery",
    "Private Events",
    "Contact",
  ];

  return (
    <>
      <header>
        <div className="absolute top-6 flex w-full items-center justify-between md:justify-around">
          <h1
            id="restaurantNames"
            className="text-texts-100 w-3xs text-2xl md:w-36"
          >
            Spice Route Restaurant
          </h1>

          <nav className="hidden w-fit md:flex">
            <ul className="flex items-center">
              {NavMenu.map((Nav, index) => (
                <li key={index}>
                  <a
                    className="text-texts-200 hover:text-texts-100 mx-2 text-[15px] transition-all duration-100 md:mx-5 lg:text-[1.125rem]"
                    href={`#${Nav}`}
                  >
                    {Nav}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <RestaurantButton className="hidden md:flex">
            Book a Table
          </RestaurantButton>
          <button
            className="flex md:hidden"
            aria-label="Open navigation menu"
            onClick={() => setOpen((prev) => !prev)}
          >
            <IconMenu2 stroke={3} color="white" />
          </button>
        </div>
        {open && (
          <div
            className="fixed top-0 left-0 z-50 h-full w-full"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                setOpen(false);
              }
            }}
          >
            <div
              className="bg-card-100 flex h-full w-1/2 flex-col justify-around gap-10 px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="w-fit">
                <ul className="flex flex-col gap-10">
                  {NavMenu.map((Nav, index) => (
                    <li key={index}>
                      <a
                        className="text-texts-200 hover:text-texts-100 mx-2 text-[1.125rem] transition-all duration-100"
                        href={`#${Nav}`}
                      >
                        {Nav}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <RestaurantButton>Book a Table</RestaurantButton>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;
