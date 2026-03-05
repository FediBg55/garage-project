import { NextResponse } from "next/server";
import { ADMIN_SESSION_COOKIE } from "../../../../lib/adminAuth";

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const response = NextResponse.redirect(new URL("/admin", baseUrl));
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: "",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 0,
  });
  return response;
}
