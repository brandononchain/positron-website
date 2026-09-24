"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import { DOMAINS, JOBS } from "../../lib/jobs";

export default function Careers() {
  const [domain, setDomain] = useState("All");
  const jobs = useMemo(
    () => JOBS.filter((j) => domain === "All" || j.domain === domain),
    [domain]
  );
  return (
    <main className="wrap section">
      <div className="kicker">Open work</div>
      <h1 style={{ fontSize: 56, margin: "12px 0 12px" }}>Careers</h1>
      <p className="lede">
        Apply OS is built in: paste a resume, get a fit score and a packet,
        confirm before anything leaves the browser.
      </p>
      <div className="filters" style={{ marginTop: 28 }}>
        {DOMAINS.map((d) => (
          <button key={d} className={`chip ${domain === d ? "on" : ""}`} onClick={() => setDomain(d)}>
            {d}
          </button>
        ))}
      </div>
      <div className="jobs">
        {jobs.map((j) => (
          <Link className="job" key={j.slug} href={`/careers/${j.slug}`}>
            <div>
              <div className="tag">{j.domain} · {j.seniority} · {j.location}</div>
              <div style={{ marginTop: 6, fontSize: 20 }}>{j.title}</div>
              <p className="muted" style={{ marginTop: 6 }}>{j.summary}</p>
            </div>
            <span className="tag">Open →</span>
          </Link>
        ))}
      </div>
    </main>
  );
}
