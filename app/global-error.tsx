"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="fr">
      <body>
        <main style={{ padding: "32px", fontFamily: "Segoe UI, sans-serif" }}>
          <h1>Erreur systeme</h1>
          <p>{"Erreur globale inattendue. Veuillez reessayer."}</p>
          <button onClick={reset}>Reessayer</button>
        </main>
      </body>
    </html>
  );
}
