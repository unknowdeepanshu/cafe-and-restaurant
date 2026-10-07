import { useState } from "react";
import { InputBox, type Field } from "@/ui/Inputbox/Inputbox";

import RestaurantButton from "@/ui/button/button";

const formFields: Field[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "John Doe",
    input: "input",
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    placeholder: "you@example.com",
    input: "input",
  },
  {
    name: "phone",
    label: "Phone number",
    type: "tel",
    placeholder: "+971 50 123 4567",
    input: "input",
  },
];
const dateAndTime: Field[] = [
  {
    name: "date",
    label: "Reservation date",
    type: "date",
    input: "input",
  },
  {
    name: "time",
    label: "Reservation time",
    type: "time",
    input: "input",
  },
];
const formFieldsData: Field[] = [
  {
    name: "message",
    label: "Special requests",
    placeholder: "Any dietary requirements or special requests?",
    input: "textarea",
  },
  {
    name: "guests",
    label: "Number of guests",
    type: "number",
    min: 1,
    max: 20,
    input: "input",
  },
  {
    name: "catering",
    label: "Will you need catering?",
    type: "text",
    placeholder: "yes or no",
    input: "input",
  },
];
function PrivateEvents() {
  const Event =
    "https://res.cloudinary.com/eqeizsgi/image/upload/v1791306192/event.webp";
  const [formData, setFormData] = useState<Record<string, string>>({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    message: "",
    guests: "",
    catering: "",
  });

  const handleFieldChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <section className="h-fit w-full">
        <div className="relative h-screen">
          <img
            src={Event}
            alt="Event"
            className="absolute -z-30 h-full w-full"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute top-0 -z-20 flex h-full w-full items-center bg-black opacity-60"></div>
          <div className="flex h-full w-full items-center px-4 md:px-16">
            <div className="text-texts-200 text-3xl">
              <div className="bg-line-400 flex h-fit w-full flex-col justify-center rounded-3xl p-12 opacity-100 sm:p-20 md:h-77.5 md:w-161">
                <h1
                  id="restaurantNames"
                  className="text-texts-100 text-4xl md:text-[3.875rem]"
                >
                  Celebrate With Us!
                </h1>
                <p
                  id="restaurantNames"
                  className="text-texts-200 text-base md:text-xl"
                >
                  Celebrate your special moments at Spice Route with authentic
                  North Indian and Mughlai cuisine in an elegant Dubai setting.
                  From birthdays and anniversaries to corporate dinners and
                  family gatherings, we create memorable experiences with
                  tailored menus and warm hospitality.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-fit flex-col gap-10 px-4 py-10 md:flex-row md:gap-0 md:px-16 md:py-40">
          <div className="flex h-full w-full flex-col gap-8 md:w-1/2">
            <h1 className="text-texts-100 text-5xl">Plan Your Event</h1>
            <p className="text-texts-200 w-[62%] text-[20px]">
              Tell us about your occasion, preferred date, number of guests, and
              any special requirements. Our team will get in touch to discuss
              the details.
            </p>
          </div>
          <div className="flex h-full w-full flex-col gap-10 md:w-1/2">
            {formFields.map((data) => (
              <InputBox
                key={data.name}
                icon={data.icon}
                input={data.input}
                type={data.type}
                label={data.label}
                placeholder={data.placeholder}
                min={data.min}
                max={data.max}
                value={formData[data.name]}
                onChange={(value) => handleFieldChange(data.name, value)}
              />
            ))}
            <div className="flex w-full gap-4">
              {dateAndTime.map((data) => (
                <div className="w-1/2" key={data.name}>
                  <InputBox
                    icon={data.icon}
                    input={data.input}
                    type={data.type}
                    label={data.label}
                    placeholder={data.placeholder}
                    min={data.min}
                    max={data.max}
                    value={formData[data.name]}
                    onChange={(value) => handleFieldChange(data.name, value)}
                  />
                </div>
              ))}
            </div>
            {formFieldsData.map((data) => (
              <InputBox
                key={data.name}
                icon={data.icon}
                input={data.input}
                type={data.type}
                label={data.label}
                placeholder={data.placeholder}
                min={data.min}
                max={data.max}
                value={formData[data.name]}
                onChange={(value) => handleFieldChange(data.name, value)}
              />
            ))}
            <RestaurantButton>Send event request</RestaurantButton>
          </div>
        </div>
      </section>
    </>
  );
}

export default PrivateEvents;
