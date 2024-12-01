"use client";

import { logout } from "@/lib/auth/auth";
import { Button } from "../ui/button";

export default function LogoutButton() {
  return (
    <Button
      onClick={async () => {
        await logout();
      }}
    >
      Logout
    </Button>
  );
}
