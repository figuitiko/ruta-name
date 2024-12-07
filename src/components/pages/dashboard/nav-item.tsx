import { cn } from "@/util/tailwind";
import { cva } from "class-variance-authority";
import React from "react";

const navItemStyle = cva(
  [
    "flex gap-4  justify-center items-center px-4 py-2 rounded-md cursor-pointer",
  ],
  {
    variants: {
      active: {
        true: "bg-slate-900 text-white",
        false: "bg-slate-100",
      },
    },
    defaultVariants: {
      active: false,
    },
  }
);

export type NavItemProps = {
  active?: boolean;
  icon: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const NavItem = ({
  active,
  icon,
  children,
  className,
}: NavItemProps) => {
  return (
    <div className={cn(navItemStyle({ active }), className)}>
      {icon}
      {children}
    </div>
  );
};
