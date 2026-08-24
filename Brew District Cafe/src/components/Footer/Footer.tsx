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
        className="bg-DarkGreen flex min-h-[30vh] flex-col gap-20"
      >
        <motion.div
          variants={itemVariants}
          className="mx-16 flex h-full flex-col justify-around"
        >
          <div className="flex min-h-9/12 justify-between">
            <div className="text-CreamBackgournd flex flex-col gap-4">
              <h2 className="text-4xl">Brew District Cafe</h2>
              <p className="text-2xl">Follow us</p>
              <div className="flex gap-2">
                <IconBrandInstagram stroke={2} className="h-12 w-16" />
                <IconBrandFacebook stroke={2} className="h-12 w-16" />
                <IconBrandX stroke={2} className="h-12 w-16" />
              </div>
            </div>
            <div className="flex gap-14">
              <div className="text-CreamBackgournd flex flex-col gap-2">
                <h2 className="text-2xl">Explore</h2>

                <div className="flex gap-4">
                  <ul className="flex flex-col gap-2">
                    {FooterNav.map((e, index) => (
                      <li key={index} className="flex gap-2">
                        • <a href="#">{e}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-CreamBackgournd flex flex-col gap-2">
                <h2 className="text-2xl">Contacts</h2>
                <p className="w-3xs text-[0.9rem]">
                  Follow us on Instagram for fresh brews, cafe moments and
                  something delicious.
                </p>
                <div className="flex gap-2">
                  <button className="bg-Orange flex h-9 items-center justify-center rounded-[0.4rem] p-5">
                    Get Direaction
                  </button>
                  <button className="bg-Orange flex h-9 items-center justify-center rounded-[0.4rem] p-5">
                    Call us
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <p className="text-CreamBackgournd text-[1rem]">
              © 2026 Brew District Cafe. All rights reserved.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default Footer;
