import { cn } from "@/lib/utils";
interface LabelProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
function Label({ className, children, ...props }: LabelProps) {
  return (
    <>
      <div
        className={cn("bg-line-400 text-texts-100 w-fit px-7 py-3", className)}
        {...props}
      >
        {children}
      </div>
    </>
  );
}

export default Label;
