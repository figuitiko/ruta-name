"use client";
import { FiUsers } from "react-icons/fi";
import { IoDocumentsOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";

import {
  SIDEBAR_REGISTER_ITEM,
  SIDEBAR_USERS_ITEM,
} from "@/constants/pages/dashboard";
import Link from "next/link";
import { NavItem } from "./nav-item";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Input } from "@/components/ui/input";

export const SideBar = () => {
  const pathname = usePathname();
  return (
    <div className="flex flex-col p-8 border-r w-[256px] gap-6">
      <picture>
        <Image
          src="/images/header-sidebar.png"
          alt="name-placeholder"
          width={224}
          height={39}
        />
      </picture>
      <div className="relative">
        <IoSearchOutline className="absolute top-2 left-2" />
        <Input
          type="text"
          placeholder="Buscar"
          className=" placeholder:ml-12 px-6"
        />
      </div>
      <div className="flex flex-col gap-2">
        <NavItem icon={<FiUsers />} active={pathname.endsWith("/dashboard")}>
          <Link href="/dashboard">{SIDEBAR_USERS_ITEM}</Link>
        </NavItem>
        <NavItem
          icon={<IoDocumentsOutline />}
          active={pathname.includes("/registers")}
        >
          <Link href="/dashboard/registers">{SIDEBAR_REGISTER_ITEM}</Link>
        </NavItem>
      </div>
    </div>
  );
};
