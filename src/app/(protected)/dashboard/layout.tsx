import { BreadCrumb } from "@/components/pages/dashboard/bread-crumb";
import { HeadingDashboard } from "@/components/pages/dashboard/heading-dashboard";
import { SideBar } from "@/components/pages/dashboard/side-bar";
import { Card } from "@/components/ui/card";
import { LayoutProps } from "@/types/common.types";

import React from "react";

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-1 min-h-screen">
      <SideBar />
      <main className="p-8 w-full flex flex-col gap-6">
        <BreadCrumb />
        <HeadingDashboard />
        <Card className="p-8 w-full">{children}</Card>
      </main>
    </div>
  );
};

export default Layout;
