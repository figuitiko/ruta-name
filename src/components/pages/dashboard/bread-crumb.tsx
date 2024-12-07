"use client";

import { BREAD_CRUMP_DASHBOARD } from "@/constants/pages/dashboard";
import { useLastWord } from "@/hooks/use-last-word";

const mapperBreadcrumb: { [key: string]: string } = {
  dashboard: "Usuarios",
  registers: "Registros",
};

export const BreadCrumb = () => {
  const lastWord = useLastWord();
  const value = lastWord
    ? mapperBreadcrumb[lastWord] || lastWord
    : BREAD_CRUMP_DASHBOARD;
  return (
    <div className="flex gap-4 py-4">
      <span>{BREAD_CRUMP_DASHBOARD}</span>
      <span>/</span>
      <span>{value}</span>
    </div>
  );
};
