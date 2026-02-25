import AdminLoginForm from "../../components/AdminLoginForm";

export const metadata = {
  title: "Admin",
  description: "Espace admin protege par passkey.",
  robots: {
    index: false,
    follow: false,
  },
};

export const dynamic = "force-dynamic";

export default function AdminPage() {
  return (
    <section className="section admin-page">
      <div className="container">
        <article className="card admin-wrap admin-login-card">
          <p className="admin-kicker">Espace protege</p>
          <h1>Espace Admin</h1>
          <p>
            Entrez la passkey pour acceder au tableau des rendez-vous.
          </p>
          <AdminLoginForm />
        </article>
      </div>
    </section>
  );
}
