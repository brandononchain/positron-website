"use client";
import { useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getJob } from "../../../lib/jobs";
import { draftPacket, makeReceipt, newId, scoreFit } from "../../../lib/apply";

export default function ApplyPage() {
  const { slug } = useParams();
  const router = useRouter();
  const job = getJob(slug);
  const [profile, setProfile] = useState({
    name: "", email: "", github: "", linkedin: "", resume: "",
  });
  const [packetNote, setPacketNote] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const fit = useMemo(
    () => (job ? scoreFit(job, profile.resume, `${profile.github} ${profile.linkedin}`) : null),
    [job, profile]
  );
  const packet = useMemo(
    () => (job && fit ? draftPacket(job, profile, fit) : null),
    [job, profile, fit]
  );

  if (!job) return <main className="wrap section">Unknown role.</main>;

  function set(k, v) {
    setProfile((p) => ({ ...p, [k]: v }));
  }

  function submit(e) {
    e.preventDefault();
    if (!confirmed) return;
    const application = {
      id: newId(),
      jobSlug: job.slug,
      jobTitle: job.title,
      ...profile,
      note: packetNote || packet.note,
      bullets: packet.bullets,
      fit,
      createdAt: new Date().toISOString(),
      status: "received",
    };
    application.receipt = makeReceipt(application);
    const all = JSON.parse(localStorage.getItem("pcm_applications") || "[]");
    all.unshift(application);
    localStorage.setItem("pcm_applications", JSON.stringify(all));
    router.push(`/apply/status/${application.id}`);
  }

  return (
    <main className="wrap section">
      <div className="kicker">Apply OS · human gate required</div>
      <h1 style={{ fontSize: 40, margin: "12px 0 8px" }}>{job.title}</h1>
      <p className="muted">Nothing is sent until you confirm. Packet is scored in-browser.</p>
      <form onSubmit={submit} className="split" style={{ marginTop: 28 }}>
        <div>
          <label>Name</label>
          <input value={profile.name} onChange={(e) => set("name", e.target.value)} required />
          <label>Email</label>
          <input type="email" value={profile.email} onChange={(e) => set("email", e.target.value)} required />
          <label>GitHub</label>
          <input value={profile.github} onChange={(e) => set("github", e.target.value)} placeholder="https://github.com/…" />
          <label>LinkedIn / shipped work</label>
          <input value={profile.linkedin} onChange={(e) => set("linkedin", e.target.value)} />
          <label>Resume text</label>
          <textarea value={profile.resume} onChange={(e) => set("resume", e.target.value)} placeholder="Paste resume or a tight work history." required />
        </div>
        <div>
          {fit && (
            <div className="card">
              <div className="tag">Fit · {fit.band}</div>
              <div className="score">{fit.score}</div>
              <p className="muted" style={{ margin: "8px 0 12px" }}>Hits: {fit.hits.join(", ") || "none yet"}</p>
              <div className="tag">Gaps</div>
              <ul className="list">{fit.mustGaps.slice(0, 4).map((g) => <li key={g}>{g}</li>)}</ul>
            </div>
          )}
          {packet && (
            <div className="card" style={{ marginTop: 12 }}>
              <div className="tag">Draft packet</div>
              <ul className="list">{packet.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
              <label>Cover note (edit before send)</label>
              <textarea value={packetNote || packet.note} onChange={(e) => setPacketNote(e.target.value)} />
            </div>
          )}
          <label style={{ display: "flex", gap: 8, alignItems: "center", textTransform: "none", letterSpacing: 0, marginTop: 16 }}>
            <input type="checkbox" checked={confirmed} onChange={(e) => setConfirmed(e.target.checked)} style={{ width: "auto" }} />
            I confirm this packet may be stored as an application receipt.
          </label>
          <button className="btn" type="submit" disabled={!confirmed} style={{ marginTop: 12, opacity: confirmed ? 1 : 0.4 }}>Submit packet</button>
        </div>
      </form>
    </main>
  );
}
