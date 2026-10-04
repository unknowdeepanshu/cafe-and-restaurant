import { useIsMobile } from "@/hook/matchMedia";
import { cn } from "@/lib/utils";
import RestaurantButton from "@/ui/button/button";
import { IconMenu2 } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

function Header() {
  const [open, setOpen] = useState(false);
  const { isMinTablet } = useIsMobile();
  const NavMenu = [
    { navName: "Home", navLink: "/" },
    { navName: "Menu", navLink: "/menu" },
    { navName: "About the Chef", navLink: "/aboutthechef" },
    { navName: "Gallery", navLink: "/gallery" },
    { navName: "Private Events", navLink: "/privateevents" },
    { navName: "Contact", navLink: "/contact" },
  ];
  useEffect(() => {
    if (isMinTablet) {
      setOpen(false);
    }
  }, [isMinTablet]);
  return (
    <>
      <header>
        <div className="absolute top-6 flex w-full items-center justify-between">
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
                  <NavLink
                    className={({ isActive }) =>
                      cn(
                        "text-texts-200 hover:text-texts-100 mx-2 text-[15px] transition-all duration-100 md:mx-5 lg:text-[1.125rem]",
                        isActive ? "text-texts-100" : "text-texts-200",
                      )
                    }
                    to={`${Nav.navLink}`}
                  >
                    {Nav.navName}
                  </NavLink>
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
                      <NavLink
                        className={({ isActive }) =>
                          cn(
                            "text-texts-200 hover:text-texts-100 mx-2 text-[15px] transition-all duration-100 md:mx-5 lg:text-[1.125rem]",
                            isActive ? "text-texts-100" : "text-texts-200",
                          )
                        }
                        to={`${Nav.navLink}`}
                      >
                        {Nav.navName}
                      </NavLink>
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
