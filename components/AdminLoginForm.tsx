"use client";

import { FormEvent, useState } from "react";

export default function AdminLoginForm() {
  const [passkey, setPasskey] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);
    setError(null);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passkey }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(payload?.error ?? "Connexion impossible.");
      }

      window.location.href = "/admin/dashboard";
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur de connexion.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="form-panel" onSubmit={onSubmit}>
      <label className="form-field">
        Passkey administrateur
        <input
          type="password"
          required
          value={passkey}
          onChange={(e) => setPasskey(e.target.value)}
          placeholder="Entrer la passkey"
        />
      </label>
      <div className="cta-row">
        <button className="btn btn-primary" type="submit" disabled={busy}>
          {busy ? "Connexion..." : "Se connecter"}
        </button>
      </div>
      {error ? <p className="form-result">{error}</p> : null}
    </form>
  );
}
