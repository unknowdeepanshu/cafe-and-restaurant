import { motion } from "motion/react";
function OpeningHoursLocation() {
  const dayTime = [
    {
      day: "Monday",
      time: "Closed",
    },
    {
      day: "Tuesday",
      time: "08:00 - 15:00",
    },
    {
      day: "Wednesday",
      time: "08:00 - 18:00",
    },
    {
      day: "Thursday",
      time: "08:00 - 18:00",
    },
    {
      day: "Friday",
      time: "08:00 - 18:00",
    },
    {
      day: "Saturday",
      time: "08:00 - 18:00",
    },
    {
      day: "Sunday",
      time: "08:00 - 18:00",
    },
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
        className="mx-3.5 my-20 flex min-h-screen flex-col sm:mx-16"
      >
        <motion.div variants={itemVariants}>
          <div className="inline-block">
            <h1 className="text-DarkGreen text-[1.563rem] sm:text-[2rem] md:text-[3rem]">
              Opening Hours & Location
            </h1>
            <hr className="bg-Orange h-1 w-full border-0" />
          </div>
        </motion.div>
        <motion.div variants={itemVariants} className="mt-8 flex w-full gap-6">
          <div className="w-1/2">
            <div className="flex flex-col gap-14">
              {dayTime.map((e, index) => (
                <OpeningHours key={index} day={e.day} time={e.time} />
              ))}
            </div>
          </div>

          <div className="w-1/2">
            <div className="flex h-full w-full flex-col gap-14 rounded-3xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7853109.746863802!2d70.00425220465596!3d16.03815910203337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae141cc9568b2f%3A0x5ea273c914eac556!2sStarbucks%20-%20Indiranagar!5e0!3m2!1sen!2sin!4v1788337199980!5m2!1sen!2sin"
                style={{ border: 0 }}
                allow="fullscreen"
                loading="lazy"
                className="h-full w-full rounded-3xl"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}

export default OpeningHoursLocation;

function OpeningHours({ day, time }: { day: string; time: string }) {
  return (
    <>
      <div className="bg-Time flex h-15 items-center rounded-[3rem] sm:h-12 lg:h-16">
        <h3 className="bg-Orange text-CreamBackgournd flex h-full w-1/2 items-center justify-center rounded-[3rem] p-4 text-center text-[0.8rem] lg:text-4xl">
          {day}
        </h3>
        <h3 className="p-4 text-center text-[0.9rem] lg:text-4xl">{time}</h3>
      </div>
    </>
  );
}
