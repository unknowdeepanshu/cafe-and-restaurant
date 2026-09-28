import { cn } from "@/lib/utils";
interface PositionChef extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
}

function PositionChef({ className, children, ...props }: PositionChef) {
  return (
    <div
      className={cn(
        "bg-button-500 border-button-400 text-texts-100 inline-block w-fit rounded-3xl border-3 p-1 px-4 text-center lg:text-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default PositionChef;
