"use client";

import { useState } from "react";

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

type Props = {
  initialAppointments: AppointmentRow[];
};

export default function AdminAppointmentsTable({ initialAppointments }: Props) {
  const [rows, setRows] = useState(initialAppointments);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const updateStatus = async (id: string, status: "en_attente" | "terminee") => {
    setBusyId(id);
    setError(null);
    try {
      const response = await fetch(`/api/admin/rendez-vous/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
      if (!response.ok) throw new Error("Mise a jour impossible.");

      setRows((current) =>
        current.map((item) => (item.id === id ? { ...item, status } : item))
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur de mise a jour.");
    } finally {
      setBusyId(null);
    }
  };

  const deleteAppointment = async (id: string) => {
    setBusyId(id);
    setError(null);
    try {
      const response = await fetch(`/api/admin/rendez-vous/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Suppression impossible.");
      setRows((current) => current.filter((item) => item.id !== id));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erreur de suppression.");
    } finally {
      setBusyId(null);
    }
  };

  if (rows.length === 0) {
    return <p>Aucun rendez-vous enregistre.</p>;
  }

  return (
    <>
      {error ? <p className="form-result">{error}</p> : null}
      <div className="table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Telephone</th>
              <th>Service</th>
              <th>Date souhaitee</th>
              <th>Status</th>
              <th>Message</th>
              <th>Cree le</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((item) => {
              const busy = busyId === item.id;
              const done = item.status === "terminee";

              return (
                <tr key={item.id}>
                  <td>{item.full_name}</td>
                  <td>{item.phone}</td>
                  <td>{item.service_type}</td>
                  <td>{item.desired_date}</td>
                  <td>
                    <span className={`status-badge ${done ? "done" : "pending"}`}>
                      {done ? "Terminee" : "En attente"}
                    </span>
                  </td>
                  <td>{item.message || "-"}</td>
                  <td>{new Date(item.created_at).toLocaleString("fr-FR")}</td>
                  <td>
                    <div className="admin-actions">
                      {done ? (
                        <button
                          className="btn btn-secondary btn-small"
                          onClick={() => updateStatus(item.id, "en_attente")}
                          disabled={busy}
                        >
                          Remettre attente
                        </button>
                      ) : (
                        <button
                          className="btn btn-primary btn-small"
                          onClick={() => updateStatus(item.id, "terminee")}
                          disabled={busy}
                        >
                          Marquer terminee
                        </button>
                      )}
                      <button
                        className="btn btn-danger btn-small"
                        onClick={() => deleteAppointment(item.id)}
                        disabled={busy || !done}
                        title={done ? "Supprimer" : "Marquez d'abord terminee"}
                      >
                        Supprimer
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
