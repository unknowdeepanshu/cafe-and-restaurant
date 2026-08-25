import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandX,
} from "@tabler/icons-react";
import { motion } from "motion/react";
function Footer() {
  const FooterNav = [
    "About",
    "Popular Menu",
    "Full Menu",
    "Gallery",
    "Reviews",
  ];
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  } as const;
  return (
    <>
      <motion.section
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-DarkGreen flex min-h-[30vh] flex-col gap-20 md:flex-row"
      >
        <motion.div
          variants={itemVariants}
          className="mx-16 flex h-full flex-col justify-around"
        >
          <div className="md:flex-rows my-10 flex min-h-9/12 flex-col justify-between gap-5 md:my-0 md:gap-5">
            <div className="text-CreamBackgournd flex flex-col gap-4">
              <h2 className="text-2xl lg:text-[2.5rem]">Brew District Cafe</h2>
              <p className="text-[1rem] lg:text-2xl">Follow us</p>
              <div className="flex gap-2">
                <IconBrandInstagram
                  stroke={2}
                  className="h-5 w-5 lg:h-12 lg:w-16"
                />
                <IconBrandFacebook
                  stroke={2}
                  className="h-5 w-5 lg:h-12 lg:w-16"
                />
                <IconBrandX stroke={2} className="h-5 w-5 lg:h-12 lg:w-16" />
              </div>
            </div>
            <div className="flex flex-col gap-6 md:flex-row lg:gap-10">
              <div className="text-CreamBackgournd flex w-[7rem] flex-col gap-2">
                <h2 className="text-[1rem] lg:text-2xl">Explore</h2>

                <div className="flex gap-4">
                  <ul className="flex flex-col gap-2">
                    {FooterNav.map((e, index) => (
                      <li key={index} className="flex gap-2">
                        •{" "}
                        <a
                          href="#"
                          className="w-full text-[0.5rem] lg:text-[1rem]"
                        >
                          {e}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-CreamBackgournd flex flex-col gap-2">
                <h2 className="text-[1rem] lg:text-2xl">Contacts</h2>
                <p className="text-[0.5rem] lg:w-3xs lg:text-[0.9rem]">
                  Follow us on Instagram for fresh brews, cafe moments and
                  something delicious.
                </p>
                <div className="flex flex-col gap-2 md:flex-row">
                  <button className="bg-Orange text-CreamBackgournd h-7 w-30 rounded-[0.6rem] text-[0.9rem] md:h-8 md:w-30 md:text-[0.9rem] lg:h-10 lg:w-40 lg:text-[1.2rem]">
                    Get Direaction
                  </button>
                  <button className="bg-Orange text-CreamBackgournd h-7 w-30 rounded-[0.6rem] text-[0.9rem] md:h-8 md:w-30 md:text-[0.9rem] lg:h-10 lg:w-40 lg:text-[1.2rem]">
                    Call us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-CreamBackgournd text-[0.5rem] lg:text-[1rem]">
              © 2026 Brew District Cafe. All rights reserved.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Footer;
