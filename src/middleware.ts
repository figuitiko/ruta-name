import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";
import { decrypt } from "./lib/auth/stateless-session";

export default async function middleware(req: NextRequest) {
  const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard");
  console.log("req.nextUrl.pathname", req.nextUrl.pathname);
  console.log("isProtectedRoute", isProtectedRoute);
  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get("session")?.value;

  const session = await decrypt(cookie);

  // 4. Redirect
  if (isProtectedRoute && !session?.userId) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }

  return NextResponse.next();
}
