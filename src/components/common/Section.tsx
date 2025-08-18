import { cn } from "@/lib/utils";
import { ReactNode, HTMLAttributes } from "react";

interface SectionProps extends Omit<HTMLAttributes<HTMLElement>, 'className'> {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: "white" | "gray" | "primary";
  size?: "sm" | "md" | "lg" | "xl";
  as?: "section" | "div" | "article" | "main";
}

const backgroundVariants = {
  white: "bg-white",
  gray: "bg-arzir-gray-50",
  primary: "bg-arzir-primary",
};

const sizeVariants = {
  sm: "py-12",
  md: "py-16", 
  lg: "py-20",
  xl: "py-section",
};

export function Section({
  children,
  className,
  containerClassName,
  background = "white",
  size = "lg",
  as: Component = "section",
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        backgroundVariants[background],
        sizeVariants[size],
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "container mx-auto px-4 sm:px-6 lg:px-8 max-w-container",
          containerClassName
        )}
      >
        {children}
      </div>
    </Component>
  );
}