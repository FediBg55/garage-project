"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { useI18n } from "./language-provider";

type FormData = {
  fullName: string;
  phone: string;
  serviceType: string;
  desiredDate: string;
  message: string;
};

const initialState: FormData = {
  fullName: "",
  phone: "",
  serviceType: "",
  desiredDate: "",
  message: "",
};

export default function AppointmentForm() {
  const { t } = useI18n();
  const [form, setForm] = useState<FormData>(initialState);
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const whatsappLink = useMemo(() => {
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? "21600000000";
    const text = [
      "Bonjour Ste Garage Jawhara, je souhaite prendre rendez-vous.",
      `Nom: ${form.fullName}`,
      `Telephone: ${form.phone}`,
      `Service: ${form.serviceType}`,
      `Date souhaitee: ${form.desiredDate}`,
      `Message: ${form.message}`,
    ].join("\n");
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  }, [form]);

  const serviceOptions = useMemo(
    () => [t("home.s1"), t("home.s2"), t("home.s3"), t("home.s4"), t("home.s5")],
    [t]
  );

  useEffect(() => {
    if (!form.serviceType && serviceOptions[0]) {
      setForm((current) => ({ ...current, serviceType: serviceOptions[0] }));
    }
  }, [form.serviceType, serviceOptions]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBusy(true);
    setResult(null);

    try {
      const response = await fetch("/api/rendez-vous", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(payload?.error ?? t("form.fail"));
      }

      setForm({ ...initialState, serviceType: serviceOptions[0] ?? "" });
      setResult(t("form.ok"));
    } catch (error) {
      const message = error instanceof Error ? error.message : t("form.err");
      setResult(message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <form className="form-panel" onSubmit={onSubmit}>
      <label className="form-field">
        {t("form.name")}
        <input
          required
          value={form.fullName}
          onChange={(e) => setForm({ ...form, fullName: e.target.value })}
          placeholder="Ex: Mohamed Trabelsi"
        />
      </label>

      <label className="form-field">
        {t("form.phone")}
        <input
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          placeholder="Ex: +216 XX XXX XXX"
        />
      </label>

      <label className="form-field">
        {t("form.service")}
        <select
          value={form.serviceType}
          onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
        >
          {serviceOptions.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </label>

      <label className="form-field">
        {t("form.date")}
        <input
          required
          type="date"
          value={form.desiredDate}
          onChange={(e) => setForm({ ...form, desiredDate: e.target.value })}
        />
      </label>

      <label className="form-field">
        {t("form.message")}
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Type vehicule, urgence, details..."
        />
      </label>

      <div className="cta-row">
        <button className="btn btn-primary" type="submit" disabled={busy}>
          {busy ? t("form.sending") : t("form.submit")}
        </button>
        <a className="btn btn-secondary dark" href={whatsappLink}>
          {t("form.whatsapp")}
        </a>
      </div>

      {result ? <p className="form-result">{result}</p> : null}
    </form>
  );
}
