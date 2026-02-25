import crypto from "node:crypto";

export const ADMIN_SESSION_COOKIE = "garage_admin_session";

export function getAdminPasskey() {
  const passkey = process.env.ADMIN_PASSKEY;
  if (!passkey) {
    throw new Error("ADMIN_PASSKEY is missing.");
  }
  return passkey;
}

export function safeEqual(a: string, b: string) {
  const aBuf = Buffer.from(a);
  const bBuf = Buffer.from(b);
  if (aBuf.length !== bBuf.length) return false;
  return crypto.timingSafeEqual(aBuf, bBuf);
}

export function isAdminSession(value: string | undefined) {
  return value === "authenticated";
}
