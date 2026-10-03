import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
type Field = {
  name: keyof BookingValues;
  label: string;
  type?: "text" | "tel" | "email" | "number" | "date" | "time";
  icon?: ReactNode;
  placeholder?: string;
  min?: number;
  max?: number;
  input: "input" | "textarea";
};
type BookingValues = {
  name: string;
  phone: string;
  email: string;
  guests: string;
  date: string;
  time: string;
  message: string;
  catering: string;
};

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
export { InputBox, type Field, type BookingValues };
