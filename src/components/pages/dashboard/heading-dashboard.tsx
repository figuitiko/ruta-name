"use client";
import {
  HEADING_DASHBOARD,
  HEADING_REGISTER,
} from "@/constants/pages/dashboard";
import { useLastWord } from "@/hooks/use-last-word";

const mapperHeading = {
  dashboard: HEADING_DASHBOARD,
  registers: HEADING_REGISTER,
};

export const HeadingDashboard = () => {
  const lastWord = useLastWord();
  const value =
    lastWord && lastWord in mapperHeading
      ? mapperHeading[lastWord as keyof typeof mapperHeading]
      : HEADING_DASHBOARD;
  return <h3 className="text-3xl font-medium">{value}</h3>;
};
