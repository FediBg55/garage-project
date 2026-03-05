import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "../../../lib/supabaseAdmin";

type AppointmentBody = {
  fullName?: string;
  phone?: string;
  serviceType?: string;
  desiredDate?: string;
  message?: string;
};

function invalid(message: string) {
  return NextResponse.json({ error: message }, { status: 400 });
}

export async function POST(request: Request) {
  let supabaseAdmin;
  try {
    supabaseAdmin = getSupabaseAdmin();
  } catch (e) {
    console.error("[rendez-vous] Supabase init failed:", (e as Error).message);
    return NextResponse.json(
      { error: "Configuration serveur manquante." },
      { status: 500 }
    );
  }
  let payload: AppointmentBody;

  try {
    payload = (await request.json()) as AppointmentBody;
  } catch {
    return invalid("Payload invalide.");
  }

  const fullName = payload.fullName?.trim();
  const phone = payload.phone?.trim();
  const serviceType = payload.serviceType?.trim();
  const desiredDate = payload.desiredDate?.trim();
  const message = payload.message?.trim() || null;

  if (!fullName || fullName.length < 3) return invalid("Nom invalide.");
  if (!phone || phone.length < 8) return invalid("Telephone invalide.");
  if (!serviceType) return invalid("Service requis.");
  if (!desiredDate || Number.isNaN(Date.parse(desiredDate))) {
    return invalid("Date souhaitee invalide.");
  }

  const insertPayload = {
    full_name: fullName,
    phone,
    service_type: serviceType,
    desired_date: desiredDate,
    status: "en_attente",
    message,
  };

  let { error } = await supabaseAdmin.from("appointments").insert(insertPayload);

  // Backward compatibility: if DB schema is older (no `status` column), retry
  // without status so appointments can still be stored.
  if (error && /status/i.test(error.message)) {
    const retry = await supabaseAdmin.from("appointments").insert({
      full_name: fullName,
      phone,
      service_type: serviceType,
      desired_date: desiredDate,
      message,
    });
    error = retry.error;
  }

  if (error) {
    console.error("[rendez-vous] Supabase error:", error.code, error.message);
    return NextResponse.json(
      {
        error: `Debug: ${error.code} - ${error.message}`,
      },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
