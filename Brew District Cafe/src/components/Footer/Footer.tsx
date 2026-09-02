import {
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandX,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import Button from "../../ui/button/Button";

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
        className="bg-DarkGreen flex min-h-[30vh] w-full flex-col"
      >
        <motion.div
          variants={itemVariants}
          className="mx-3.5 my-5 flex h-full w-[90%] flex-col justify-around sm:mx-16"
        >
          <div className="my-10 flex min-h-9/12 flex-col justify-between gap-5 md:my-0 md:flex-row md:gap-5">
            <div className="text-CreamBackgournd flex flex-col gap-4">
              <h2 className="text-2xl lg:text-[2.5rem]">Brew District Cafe</h2>
              <p className="text-[1rem] lg:text-2xl">Follow us</p>
              <div className="flex gap-2">
                <a href="https://x.com/DipanshuVi6799">
                  <IconBrandInstagram
                    stroke={2}
                    className="h-5 w-5 lg:h-12 lg:w-16"
                  />
                </a>
                <a href="https://x.com/DipanshuVi6799">
                  <IconBrandFacebook
                    stroke={2}
                    className="h-5 w-5 lg:h-12 lg:w-16"
                  />
                </a>
                <a href="https://x.com/DipanshuVi6799">
                  <IconBrandX stroke={2} className="h-5 w-5 lg:h-12 lg:w-16" />
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6 md:flex-row lg:gap-10">
              <div className="text-CreamBackgournd flex w-full flex-col gap-2">
                <h2 className="text-[1rem] lg:text-2xl">Explore</h2>

                <div className="flex gap-4">
                  <ul className="flex flex-col gap-0.5">
                    {FooterNav.map((e, index) => (
                      <li key={index} className="flex items-center gap-2">
                        •
                        <a
                          href={`#${e}`}
                          className="w-full text-[0.5rem] lg:text-[1rem]"
                        >
                          {e}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-CreamBackgournd flex flex-col gap-2 md:w-[20rem]">
                <h2 className="text-[1rem] lg:text-2xl">Contacts</h2>
                <p className="text-[0.5rem] lg:w-3xs lg:text-[0.9rem]">
                  Follow us on Instagram for fresh brews, cafe moments and
                  something delicious.
                </p>
                <div className="flex flex-col gap-2 md:w-[20rem] md:flex-row">
                  <Button
                    text="Get Direaction"
                    brown={false}
                    link="https://x.com/DipanshuVi6799"
                  />

                  <Button
                    text="Call us"
                    brown={false}
                    link="https://x.com/DipanshuVi6799"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        <div className="my-3 flex items-center justify-center">
          <p className="text-CreamBackgournd text-[0.5rem] lg:text-[1rem]">
            © 2026 Brew District Cafe. Made by @DipanshuVi6799.
          </p>
        </div>
      </motion.section>
    </>
  );
}

export default Footer;
