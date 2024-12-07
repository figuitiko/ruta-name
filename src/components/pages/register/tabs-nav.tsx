"use client";
import { Steps } from "@/constants/components/register-wizard";
import { StepsType } from "@/types/component";
import { cva } from "class-variance-authority";
import React from "react";

const itemNavStyle = cva("py-2 px-4", {
  variants: {
    active: {
      true: "bg-slate-200",
      false: "bg-white",
    },
  },
  defaultVariants: {
    active: false,
  },
});

export const TabsNav = ({ activeTab }: { activeTab: StepsType }) => {
  return (
    <nav className="flex">
      <div
        className={itemNavStyle({
          active: activeTab === Steps.Identification,
        })}
      >
        {Steps.Identification}
      </div>
      <div
        className={itemNavStyle({
          active: activeTab === Steps.Relatives,
        })}
      >
        {Steps.Relatives}
      </div>
      <div
        className={itemNavStyle({
          active: activeTab === Steps.Address,
        })}
      >
        {Steps.Address}
      </div>
      <div
        className={itemNavStyle({
          active: activeTab === Steps.Report,
        })}
      >
        {Steps.Report}
      </div>
      <div
        className={itemNavStyle({
          active: activeTab === Steps.Health,
        })}
      >
        {Steps.Health}
      </div>
      <div
        className={itemNavStyle({
          active: activeTab === Steps.Scholarship,
        })}
      >
        {Steps.Scholarship}
      </div>
      <div
        className={itemNavStyle({
          active: activeTab === Steps.Requirements,
        })}
      >
        {Steps.Requirements}
      </div>
    </nav>
  );
};
