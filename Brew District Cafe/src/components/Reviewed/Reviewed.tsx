import { motion } from "motion/react";
import Face from "../../assets/reviewed/face.jpg";
import Face1 from "../../assets/reviewed/face1.jpg";
import Face2 from "../../assets/reviewed/face2.jpg";
import Face3 from "../../assets/reviewed/face3.jpg";
import Face4 from "../../assets/reviewed/face4.jpg";
import Face5 from "../../assets/reviewed/face5.jpg";
import Face6 from "../../assets/reviewed/face6.jpg";
import Face7 from "../../assets/reviewed/face7.jpg";
import Face8 from "../../assets/reviewed/face8.jpg";
import Face9 from "../../assets/reviewed/face9.jpg";
import Face10 from "../../assets/reviewed/face10.jpg";
import Face11 from "../../assets/reviewed/face11.jpg";

function Reviewed() {
  const firtReviewed = [
    {
      face: Face,
      Name: "Aarav Mehta",
      location: "Bengaluru",
      content:
        "The cappuccino was smooth and perfectly balanced. Really loved the warm atmosphere too.",
    },
    {
      face: Face1,
      Name: "Riya Sharma",
      location: "Riya Sharma",
      content:
        "Such a cozy place for an evening coffee. The Café Latte was excellent and the staff were friendly.",
    },
    {
      face: Face2,
      Name: "Kabir Nair",
      location: "Koramangala, Bengaluru",
      content:
        "Great coffee, beautiful interiors, and a relaxed vibe. Definitely coming back.",
    },
    {
      face: Face3,
      Name: "Ananya Rao",
      location: "HSR Layout, Bengaluru",
      content:
        "I tried the Mocha and absolutely loved it. Not too sweet and the chocolate flavor was perfect.",
    },
    {
      face: Face4,
      Name: "Vihaan Kapoor",
      location: "Whitefield, Bengaluru",
      content:
        "One of my favorite spots for a quiet coffee break. The espresso was rich and flavorful.",
    },
    {
      face: Face5,
      Name: "Vihaan Kapoor",
      location: "Whitefield, Bengaluru",
      content:
        "One of my favorite spots for a quiet coffee break. The espresso was rich and flavorful.",
    },
    {
      face: Face6,
      Name: "Meera Iyer",
      location: "Jayanagar, Bengaluru",
      content:
        "The Flat White was amazing. Simple menu, great coffee, and a really welcoming atmosphere.",
    },
    {
      face: Face7,
      Name: "Arjun Malhotra",
      location: "Bengaluru",
      content:
        "Loved the Cold Brew. Refreshing, smooth, and exactly what I needed on a warm afternoon.",
    },
    {
      face: Face8,
      Name: "Sana Khan",
      location: "Indiranagar, Bengaluru",
      content:
        "Beautiful little café with a premium feel without being too formal. The coffee was fantastic.",
    },
    {
      face: Face9,
      Name: "Rahul Verma",
      location: "Koramangala, Bengaluru",
      content:
        "The Americano was strong and smooth. Great place to sit, relax, and get some work done.",
    },
    {
      face: Face10,
      Name: "Ishita Menon",
      location: "Bengaluru",
      content:
        "Really enjoyed the experience here. The staff were welcoming and the Cappuccino was delicious.",
    },
    {
      face: Face11,
      Name: "Dev Patel",
      location: "Whitefield, Bengaluru",
      content:
        "Brew District has a lovely atmosphere and genuinely good coffee. The Café Latte is a must-try.",
    },
  ];
  const secondReviewed = [
    {
      face: Face,
      Name: "Aarav Mehta",
      location: "Bengaluru",
      content:
        "The cappuccino was smooth and perfectly balanced. Really loved the warm atmosphere too.",
    },
    {
      face: Face1,
      Name: "Riya Sharma",
      location: "Riya Sharma",
      content:
        "Such a cozy place for an evening coffee. The Café Latte was excellent and the staff were friendly.",
    },
    {
      face: Face2,
      Name: "Kabir Nair",
      location: "Koramangala, Bengaluru",
      content:
        "Great coffee, beautiful interiors, and a relaxed vibe. Definitely coming back.",
    },
    {
      face: Face3,
      Name: "Ananya Rao",
      location: "HSR Layout, Bengaluru",
      content:
        "I tried the Mocha and absolutely loved it. Not too sweet and the chocolate flavor was perfect.",
    },
    {
      face: Face4,
      Name: "Vihaan Kapoor",
      location: "Whitefield, Bengaluru",
      content:
        "One of my favorite spots for a quiet coffee break. The espresso was rich and flavorful.",
    },
    {
      face: Face5,
      Name: "Vihaan Kapoor",
      location: "Whitefield, Bengaluru",
      content:
        "One of my favorite spots for a quiet coffee break. The espresso was rich and flavorful.",
    },
    {
      face: Face6,
      Name: "Meera Iyer",
      location: "Jayanagar, Bengaluru",
      content:
        "The Flat White was amazing. Simple menu, great coffee, and a really welcoming atmosphere.",
    },
    {
      face: Face7,
      Name: "Arjun Malhotra",
      location: "Bengaluru",
      content:
        "Loved the Cold Brew. Refreshing, smooth, and exactly what I needed on a warm afternoon.",
    },
    {
      face: Face8,
      Name: "Sana Khan",
      location: "Indiranagar, Bengaluru",
      content:
        "Beautiful little café with a premium feel without being too formal. The coffee was fantastic.",
    },
    {
      face: Face9,
      Name: "Rahul Verma",
      location: "Koramangala, Bengaluru",
      content:
        "The Americano was strong and smooth. Great place to sit, relax, and get some work done.",
    },
    {
      face: Face10,
      Name: "Ishita Menon",
      location: "Bengaluru",
      content:
        "Really enjoyed the experience here. The staff were welcoming and the Cappuccino was delicious.",
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
        className="mx-16 my-40 flex min-h-[70vh] flex-col gap-20"
      >
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-center gap-3"
        >
          <div className="inline-block">
            <h1 className="text-DarkGreen text-2xl lg:text-[3.5rem]">
              What people are saying ?
            </h1>
            <hr className="bg-Orange h-1 w-full border-0" />
          </div>
          <span>
            <p className="text-[0.5rem] lg:w-252 lg:text-2xl">
              Don't just take our word for it-see what our customers have to say
              about their experience!
            </p>
          </span>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="relative flex flex-col items-center justify-center gap-2 overflow-hidden"
        >
          <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />

          <motion.div
            className="flex w-max gap-6"
            animate={{
              transform: ["translateX(10%)", "translateX(-10%)"],
            }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* First set */}
            <div className="flex shrink-0 gap-6">
              {firtReviewed.map((e, index) => (
                <ReviewedBox
                  face={e.face}
                  Name={e.Name}
                  content={e.content}
                  location={e.location}
                  key={index}
                />
              ))}
            </div>

            {/* Duplicate set */}
            <div className="flex shrink-0 gap-6">
              {firtReviewed.map((e, index) => (
                <ReviewedBox
                  face={e.face}
                  Name={e.Name}
                  content={e.content}
                  location={e.location}
                  key={index}
                />
              ))}
            </div>
          </motion.div>
          <motion.div
            className="flex w-max gap-6"
            animate={{
              transform: ["translateX(0%)", "translateX(10%)"],
            }}
            transition={{
              duration: 40,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {/* First set */}
            <div className="flex shrink-0 gap-6">
              {secondReviewed.map((e, index) => (
                <ReviewedBox
                  face={e.face}
                  Name={e.Name}
                  content={e.content}
                  location={e.location}
                  key={index}
                />
              ))}
            </div>

            {/* Duplicate set */}
            <div className="flex shrink-0 gap-6">
              {secondReviewed.map((e, index) => (
                <ReviewedBox
                  face={e.face}
                  Name={e.Name}
                  content={e.content}
                  location={e.location}
                  key={index}
                />
              ))}
            </div>
          </motion.div>
          <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />
        </motion.div>
      </motion.section>
    </>
  );
}

export default Reviewed;

function ReviewedBox({
  face,
  Name,
  location,
  content,
}: {
  face: string;
  Name: string;
  location: string;
  content: string;
}) {
  return (
    <>
      <div className="bg-DarkGreen flex flex-col rounded-3xl p-5 lg:h-56 lg:w-104">
        <div className="text-CreamBackgournd h-full w-96 text-[1rem] leading-[2rem] tracking-[4%]">
          <p className="h-full">"{content}"</p>
        </div>
        <div className="flex gap-4">
          <img src={face} alt="face" className="h-10 w-10 rounded-3xl" />
          <div>
            <h4 className="text-CreamBackgournd text-[1rem]">{Name}</h4>
            <p className="text-CreamBackgournd text-[0.7rem]">{location}</p>
          </div>
        </div>
      </div>
    </>
  );
}
