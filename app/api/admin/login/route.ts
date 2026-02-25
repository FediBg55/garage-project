import { NextResponse } from "next/server";
import {
  ADMIN_SESSION_COOKIE,
  getAdminPasskey,
  safeEqual,
} from "../../../../lib/adminAuth";

type LoginBody = {
  passkey?: string;
};

export async function POST(request: Request) {
  let payload: LoginBody;

  try {
    payload = (await request.json()) as LoginBody;
  } catch {
    return NextResponse.json({ error: "Payload invalide." }, { status: 400 });
  }

  const entered = payload.passkey?.trim() ?? "";
  if (!entered) {
    return NextResponse.json({ error: "Passkey requis." }, { status: 400 });
  }

  let expected: string;
  try {
    expected = getAdminPasskey();
  } catch {
    return NextResponse.json(
      { error: "Configuration admin manquante." },
      { status: 500 }
    );
  }

  if (!safeEqual(entered, expected)) {
    return NextResponse.json({ error: "Passkey incorrect." }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set({
    name: ADMIN_SESSION_COOKIE,
    value: "authenticated",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 12,
  });
  return response;
}
