import { NextRequest, NextResponse } from "next/server";
import { userService } from "./services/user.services";
import { Roles } from "./constants/roles";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  let isAthentication = false;
  let isAdmin = false;

  const { data } = await userService.getSession();

  console.log("request url is ->", request.url);
  console.log("this is pathname of ", pathname);

  if (data) {
    isAthentication = true;
    isAdmin = data.user.role === Roles.admin;
  }

  if (!isAthentication) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (isAdmin && pathname.startsWith("/user-dashboard")) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }

  if (!isAdmin && pathname.startsWith("/admin-dashboard")) {
    return NextResponse.redirect(new URL("/user-dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin-dashboard",
    "/admin-dashboard/:path*",
    "/user-dashboard",
    "/user-dashboard/:path*",
  ],
};
