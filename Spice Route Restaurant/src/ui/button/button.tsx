import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}
function RestaurantButton({ className, children, ...props }: ButtonProps) {
  return (
    <>
      <button
        className={cn(
          "border-button-100 text-texts-200 bg-button-100 lg:text-texts-200 lg:hover:bg-button-100 rounded-md border-4 px-7 py-3 font-semibold shadow-[0_0_18px_rgba(201,164,92,0.25)] transition-all duration-300 md:text-[#0D0A08] lg:bg-transparent lg:shadow-none lg:hover:text-[#0D0A08] lg:hover:shadow-[0_0_18px_rgba(201,164,92,0.25)]",
          className,
        )}
        id="Button"
        {...props}
      >
        {children}
      </button>
    </>
  );
}

export default RestaurantButton;
