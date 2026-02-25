"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="section admin-page">
      <div className="container">
        <article className="card admin-wrap admin-login-card">
          <p className="admin-kicker">Erreur</p>
          <h1>Une erreur est survenue</h1>
          <p>{error.message || "Erreur inattendue."}</p>
          <div className="cta-row">
            <button className="btn btn-primary" onClick={reset}>
              Reessayer
            </button>
          </div>
        </article>
      </div>
    </section>
  );
}
