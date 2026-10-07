import HeaderTitle from "@/components/headerTitle/headerTitle";
import { OpeningCard } from "@/components/opening/OpeningCard";
import { IconDeviceMobile, IconMapPin, IconMail } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import RestaurantButton from "@/ui/button/button";
import {
  InputBox,
  type Field,
  type BookingValues,
} from "@/ui/Inputbox/Inputbox";
import {
  IconUser,
  IconPhoneCall,
  IconUsers,
  IconCalendarMonth,
  IconClock,
  IconMessageCircle,
} from "@tabler/icons-react";
import { useState, type FormEvent } from "react";
const initialValues: BookingValues = {
  name: "",
  phone: "",
  email: "",
  guests: "2",
  date: "",
  time: "",
  message: "",
  catering: "",
};

function Contact() {
  const MenuHeader =
    "https://res.cloudinary.com/eqeizsgi/image/upload/v1791306200/MenuHeader.webp";
  const contactInfo = [
    {
      icon: (
        <IconDeviceMobile
          stroke={1}
          color="#ffffff"
          height="5.438rem"
          width="5.438rem"
        />
      ),
      title: "Phone Text",
      info: "+00 000000000",
    },
    {
      icon: (
        <IconMapPin
          stroke={1}
          color="#ffffff"
          height="5.438rem"
          width="5.438rem"
        />
      ),
      title: "Address",
      info: "+00 000000000",
    },
    {
      icon: (
        <IconMail
          stroke={1}
          color="#ffffff"
          height="5.438rem"
          width="5.438rem"
        />
      ),
      title: "E-Mail",
      info: "+00 000000000",
    },
  ];
  const [values, setValues] = useState<BookingValues>(initialValues);

  const handleChange = (name: keyof BookingValues, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Booking request:", values);
    // Connect your booking API here.
  };
  return (
    <>
      <section>
        <HeaderTitle img={MenuHeader} Title="Contact Us" />
        <div className="flex h-fit w-full flex-col items-stretch justify-between gap-5 px-4 py-10 md:flex-row md:px-16">
          <div className="flex h-fit w-full flex-col gap-4 md:w-1/2">
            <div className="flex h-fit w-full flex-col">
              <div>
                <h1
                  id="restaurantNames"
                  className="text-texts-200 mb-5 flex gap-3 text-4xl sm:text-6xl lg:text-7xl"
                >
                  Contact{" "}
                  <span id="restaurantNames" className="text-texts-300">
                    Info
                  </span>
                </h1>
              </div>
              <div className="flex h-fit w-fit flex-col gap-10">
                {contactInfo.map((info, index) => (
                  <ContactIfo
                    key={index}
                    icon={info.icon}
                    info={info.info}
                    title={info.title}
                  />
                ))}
              </div>
            </div>{" "}
            <div className="flex h-fit w-full flex-col">
              <div>
                <h1
                  id="restaurantNames"
                  className="text-texts-200 mb-5 flex gap-3 text-4xl sm:text-6xl lg:text-7xl"
                >
                  Contact{" "}
                  <span id="restaurantNames" className="text-texts-300">
                    Form
                  </span>
                </h1>
              </div>
              <div className="flex h-fit w-full flex-col gap-10">
                <form
                  onSubmit={handleSubmit}
                  className="flex w-full flex-col gap-6"
                >
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {formFields.map((field) => (
                      <div
                        key={field.name}
                        className={cn(
                          field.input === "textarea" && "sm:col-span-2",
                        )}
                      >
                        <InputBox
                          label={field.label}
                          type={field.type}
                          icon={field.icon}
                          placeholder={field.placeholder}
                          value={values[field.name]}
                          min={field.min}
                          max={field.max}
                          onChange={(value) => handleChange(field.name, value)}
                          input={field.input}
                          required={field.name !== "message"}
                        />
                      </div>
                    ))}
                  </div>

                  <RestaurantButton className="w-full text-xl sm:text-2xl">
                    <span id="NatoBold">Reserve Table</span>
                  </RestaurantButton>
                </form>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center self-stretch md:w-1/2">
            <OpeningCard className="h-full md:w-full" />
          </div>
        </div>
      </section>
    </>
  );
}

interface ContactIfoProps {
  icon: React.ReactNode;
  title: string;
  info: string;
}

function ContactIfo({ icon, title, info }: ContactIfoProps) {
  return (
    <>
      <div className="flex h-fit w-fit items-center justify-center gap-2">
        {icon}
        <div className="flex h-fit w-fit flex-col">
          <div className="h-fit w-fit">
            <h1 id="restaurantNames" className="text-texts-100 text-3xl">
              {title}
            </h1>
          </div>
          <div className="h-fit w-fit">
            <h1 id="restaurantNames" className="text-texts-200 text-3xl">
              {info}
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}
const formFields: Field[] = [
  {
    name: "name",
    label: "Your name",
    type: "text",
    icon: <IconUser />,
    placeholder: "John Doe",
    input: "input",
  },
  {
    name: "phone",
    label: "Phone number",
    type: "tel",
    icon: <IconPhoneCall />,
    placeholder: "+971 50 123 4567",
    input: "input",
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    icon: <IconMail />,
    placeholder: "you@example.com",
    input: "input",
  },
  {
    name: "guests",
    label: "Number of guests",
    type: "number",
    icon: <IconUsers />,
    min: 1,
    max: 20,
    input: "input",
  },
  {
    name: "date",
    label: "Reservation date",
    type: "date",
    icon: <IconCalendarMonth />,
    input: "input",
  },
  {
    name: "time",
    label: "Reservation time",
    type: "time",
    icon: <IconClock />,
    input: "input",
  },
  {
    name: "message",
    label: "Special requests",
    icon: <IconMessageCircle />,
    placeholder: "Any dietary requirements or special requests?",
    input: "textarea",
  },
];

export default Contact;
