import { cn } from "@/lib/utils";

interface SocialIconProps  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function SocialIcon({ children ,className,...props }: SocialIconProps) {
  return (
    <>
      <div
        className={cn(
          "border-button-400 flex h-8 w-8 items-center justify-center rounded-4xl border p-5 lg:h-7.5 lg:w-7.5",
          className
        )}{...props}
      >
        <a href="#">{children}</a>
      </div>
    </>
  );
}
