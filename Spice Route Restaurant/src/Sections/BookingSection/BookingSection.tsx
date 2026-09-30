import BookingTable from "@/assets/bookingTable.png";
import { cn } from "@/lib/utils";
import RestaurantButton from "@/ui/button/button";
import {
  IconUser,
  IconPhoneCall,
  IconMail,
  IconUsers,
  IconCalendarMonth,
  IconClock,
  IconMessageCircle,
} from "@tabler/icons-react";
import { useState, type ReactNode, type FormEvent } from "react";

type BookingValues = {
  name: string;
  phone: string;
  email: string;
  guests: string;
  date: string;
  time: string;
  message: string;
};

const initialValues: BookingValues = {
  name: "",
  phone: "",
  email: "",
  guests: "2",
  date: "",
  time: "",
  message: "",
};

type Field = {
  name: keyof BookingValues;
  label: string;
  type?: "text" | "tel" | "email" | "number" | "date" | "time";
  icon: ReactNode;
  placeholder?: string;
  min?: number;
  max?: number;
  input: "input" | "textarea";
};

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

function BookingSection() {
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
    <section className="h-fit w-full">
      <div className="flex w-full flex-col-reverse lg:flex-row">
        {/* Booking form */}
        <div className="relative w-full lg:w-1/2">
          <hr className="border-line-300 absolute top-0 -z-1 w-full border-2" />
          <hr className="border-line-300 absolute bottom-0.5 -z-1 w-full border-2" />
          <div className="flex h-full w-full flex-col gap-8 p-5 sm:p-8 lg:p-10">
            <div className="flex flex-col items-center justify-center gap-2 text-center">
              <p className="text-texts-200 text-sm tracking-[0.2em] sm:text-base">
                --- ONLINE RESERVATION ---
              </p>

              <h1 className="text-texts-100 text-4xl sm:text-5xl md:text-6xl">
                Book A <span className="text-texts-300">Table</span>
              </h1>
            </div>

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

        {/* Booking image */}
        <div className="h-72 w-full sm:h-96 lg:h-auto lg:w-1/2">
          <img
            src={BookingTable}
            alt="A beautifully prepared restaurant table"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

interface InputBoxProps {
  label: string;
  type?: Field["type"];
  icon?: ReactNode;
  value: string;
  placeholder?: string;
  min?: number;
  max?: number;
  required?: boolean;
  onChange: (value: string) => void;
  input?: "input" | "textarea";
}

function InputBox({
  label,
  type = "text",
  icon,
  value,
  placeholder,
  min,
  max,
  required = false,
  onChange,
  input = "input",
}: InputBoxProps) {
  const id = `booking-${label.toLowerCase().replace(/\s+/g, "-")}`;

  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label htmlFor={id} className="text-texts-200 text-sm font-medium">
        {label}
      </label>

      <div
        className={cn(
          "border-line-200 focus-within:border-texts-300 focus-within:ring-texts-300/20 relative flex min-w-0 gap-2 rounded-lg border px-3 py-3 transition-colors focus-within:ring-2",
          input === "textarea" ? "items-start" : "items-center",
        )}
      >
        {icon && (
          <span
            className={cn(
              "text-texts-200 shrink-0 [&>svg]:h-5 [&>svg]:w-5",
              input === "textarea" && "pt-0.5",
            )}
          >
            {icon}
          </span>
        )}

        {input === "input" ? (
          <input
            id={id}
            type={type}
            value={value}
            placeholder={placeholder}
            min={min}
            max={max}
            required={required}
            onChange={(e) => onChange(e.target.value)}
            className="text-texts-200 placeholder:text-texts-200/50 w-full min-w-0 bg-transparent text-sm scheme-dark outline-none sm:text-base"
          />
        ) : (
          <textarea
            id={id}
            value={value}
            placeholder={placeholder}
            required={required}
            onChange={(e) => onChange(e.target.value)}
            rows={5}
            className="text-texts-200 placeholder:text-texts-200/50 w-full min-w-0 resize-y bg-transparent text-sm outline-none sm:text-base"
          />
        )}
      </div>
    </div>
  );
}

export default BookingSection;
