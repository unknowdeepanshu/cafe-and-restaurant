import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type ThreedotsProps = {
  active: number;
  setActive?: (active: number) => void;
  index: number;
};

function Threedots({ active, setActive, index }: ThreedotsProps) {
  const isActive = active === index;

  return (
    <button
      type="button"
      aria-label={`Go to review ${index + 1}`}
      aria-current={isActive ? "true" : undefined}
      onClick={() => setActive?.(index)}
      className="flex h-4 w-4 items-center justify-center"
    >
      <motion.span
        animate={{
          scale: isActive ? 1.08 : 1,
          opacity: isActive ? 1 : 0.7,
        }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex items-center justify-center rounded-full",
          isActive
            ? "border-button-200 h-4 w-4 border-2"
            : "bg-button-200 h-2 w-2",
        )}
      >
        {isActive && <span className="bg-line-300 h-1.5 w-1.5 rounded-full" />}
      </motion.span>
    </button>
  );
}

export default Threedots;
