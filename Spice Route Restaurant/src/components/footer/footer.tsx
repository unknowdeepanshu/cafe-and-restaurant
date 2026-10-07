import { SocialIcon } from "@/ui/scoiaMedia/socialIcon";

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
        <div className="flex h-full w-full flex-col-reverse md:flex-row">
          <div className="h-full w-full bg-amber-100 md:w-1/2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115564.36554137763!2d55.136126015691204!3d25.156426800723526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6948e247f935%3A0x2b84943d94948616!2sTIMELESS!5e0!3m2!1sen!2sin!4v1791206172559!5m2!1sen!2sin"
              className="h-full w-full"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          <div className="relative flex h-full w-full flex-col md:w-1/2">
            <img
              src={
                "https://res.cloudinary.com/eqeizsgi/image/upload/v1791306193/bookingTable.png"
              }
              alt="FooterImage"
              loading="lazy"
              decoding="async"
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
              <div className="flex h-full w-full justify-between px-3">
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
