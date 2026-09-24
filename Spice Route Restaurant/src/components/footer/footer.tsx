import FooterImage from "@/assets/footer/tables.png";
import React from "react";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutube,
} from "@tabler/icons-react";
function Footer() {
  const scoliadMedia = [
    <IconBrandFacebook color="#ffffff" />,
    <IconBrandInstagram color="#ffffff" />,
    <IconBrandX color="#ffffff" />,
    <IconBrandYoutube color="#ffffff" />,
  ];
  return (
    <>
      <footer className="flex h-[70vh]">
        <div className="flex h-full w-full flex-col md:flex-row">
          <div className="h-full w-full bg-amber-400 md:w-1/2"></div>
          <div className="relative flex h-full w-full flex-col md:w-1/2">
            <img
              src={FooterImage}
              alt="FooterImage"
              className="absolute -z-10 h-full w-full opacity-30"
            />
            <div className="flex h-full w-full flex-col items-center justify-center gap-4">
              <h1
                id="Header"
                className="text-texts-100 text-center text-[2rem] lg:text-[4rem]"
              >
                Spice Route Restaurant
              </h1>
              <p className="text-texts-200 text-center text-[1.25rem] lg:text-[2.5rem]">
                Visit Us
              </p>
              <div className="flex h-fit w-full flex-col items-center justify-center gap-2">
                <h3 className="text-texts-100 text-center text-[1rem] lg:text-[1.375rem]">
                  Villa 18, Al Wasl Road, Jumeirah 1, Dubai, UAE
                </h3>
                <h3 className="text-texts-100 text-center text-[1rem] lg:text-[1.375rem]">
                  Booking Request+00 00000000
                </h3>
                <h3 className="text-texts-100 text-center text-[1rem] lg:text-[1.375rem]">
                  Daily - 8.00 am to 10.00 pm
                </h3>
                <div className="flex gap-4">
                  {scoliadMedia.map((icon, index) => (
                    <SocialIcon key={index} children={icon} />
                  ))}
                </div>
              </div>
            </div>
            <div className="flex h-fit w-full flex-col items-center justify-center gap-2">
              <hr className="bg-line-100 h-1 w-full"></hr>
              <div className="flex h-full w-full justify-between px-1">
                <h4 className="text-texts-100 block text-[0.938rem] lg:text-[1.063rem]">
                  © 2026 All Rights Reserved.
                </h4>

                <h4 className="text-texts-100 text-end text-[0.938rem] lg:text-[1.063rem]">
                  Developed by Dipanshu
                </h4>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
interface SocialIconProps {
  children: React.ReactNode;
}

function SocialIcon({ children }: SocialIconProps) {
  return (
    <>
      <div className="border-button-400 flex h-[1.188rem] w-[1.188rem] items-center justify-center rounded-4xl border p-4 lg:h-7.5 lg:w-7.5">
        <a href="#">{children}</a>
      </div>
    </>
  );
}
