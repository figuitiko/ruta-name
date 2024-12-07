import { usePathname } from "next/navigation";

export const useLastWord = () => {
  const pathname = usePathname();
  return pathname.split("/").filter(Boolean).pop() ?? "";
};
