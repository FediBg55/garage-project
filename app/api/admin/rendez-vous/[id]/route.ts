import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../../../lib/supabaseAdmin";
import { ADMIN_SESSION_COOKIE, isAdminSession } from "../../../../../lib/adminAuth";

type Params = {
  params: Promise<{
    id: string;
  }>;
};

function forbidden() {
  return NextResponse.json({ error: "Non autorise." }, { status: 401 });
}

function isAllowed(request: NextRequest) {
  const value = request.cookies.get(ADMIN_SESSION_COOKIE)?.value;
  return isAdminSession(value);
}

export async function PATCH(request: NextRequest, { params }: Params) {
  if (!isAllowed(request)) return forbidden();

  const { id } = await params;
  let payload: { status?: string };

  try {
    payload = (await request.json()) as { status?: string };
  } catch {
    return NextResponse.json({ error: "Payload invalide." }, { status: 400 });
  }

  const status = payload.status?.trim();
  if (!status || !["en_attente", "terminee"].includes(status)) {
    return NextResponse.json({ error: "Status invalide." }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  const { error } = await supabase
    .from("appointments")
    .update({ status })
    .eq("id", id);

  if (error) {
    return NextResponse.json({ error: "Mise a jour impossible." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: NextRequest, { params }: Params) {
  if (!isAllowed(request)) return forbidden();

  const { id } = await params;
  const supabase = getSupabaseAdmin();
  const { error } = await supabase.from("appointments").delete().eq("id", id);

  if (error) {
    return NextResponse.json({ error: "Suppression impossible." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
