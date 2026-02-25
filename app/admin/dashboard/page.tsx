import Link from "next/link";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import AdminAppointmentsTable from "../../../components/AdminAppointmentsTable";
import { getSupabaseAdmin } from "../../../lib/supabaseAdmin";
import { ADMIN_SESSION_COOKIE, isAdminSession } from "../../../lib/adminAuth";

type AppointmentRow = {
  id: string;
  full_name: string;
  phone: string;
  service_type: string;
  desired_date: string;
  status: "en_attente" | "terminee";
  message: string | null;
  created_at: string;
};

export const metadata = {
  title: "Admin Dashboard",
  description: "Tableau admin des rendez-vous.",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

async function fetchAppointments(): Promise<AppointmentRow[]> {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("appointments")
    .select(
      "id, full_name, phone, service_type, desired_date, status, message, created_at"
    )
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  return data as AppointmentRow[];
}

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  const authenticated = isAdminSession(sessionCookie);

  if (!authenticated) {
    redirect("/admin");
  }

  const appointments = await fetchAppointments();

  return (
    <section className="section admin-page">
      <div className="container">
        <article className="card admin-wrap admin-table-card">
          <div className="admin-head">
            <h1>Rendez-vous en base</h1>
            <Link href="/api/admin/logout" className="btn btn-secondary dark">
              Deconnexion
            </Link>
          </div>

          <AdminAppointmentsTable initialAppointments={appointments} />
        </article>
      </div>
    </section>
  );
}
