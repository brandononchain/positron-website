"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function Status() {
  const { id } = useParams();
  const [app, setApp] = useState(null);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("pcm_applications") || "[]");
    setApp(all.find((a) => a.id === id) || null);
  }, [id]);

  if (!app) {
    return (
      <main className="wrap section">
        <h1>No receipt in this browser</h1>
        <p className="muted">Applications are stored locally until a submit adapter is wired.</p>
        <Link className="cta" href="/careers">Careers</Link>
      </main>
    );
  }

  return (
    <main className="wrap section">
      <div className="kicker">Receipt</div>
      <h1 style={{ fontSize: 40, margin: "12px 0" }}>{app.jobTitle}</h1>
      <div className="card">
        <p>Status: <b>{app.status}</b></p>
        <p className="muted">Receipt {app.receipt}</p>
        <p className="muted">{app.createdAt} · score {app.fit?.score} ({app.fit?.band})</p>
        <pre style={{ whiteSpace: "pre-wrap", marginTop: 16, color: "var(--muted)", fontSize: 13 }}>{app.note}</pre>
      </div>
      <div style={{ marginTop: 20 }}>
        <Link className="cta" href="/careers">Other roles</Link>
      </div>
    </main>
  );
}
