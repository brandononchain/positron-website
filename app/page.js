import Link from "next/link";
import { JOBS } from "../lib/jobs";

export default function Home() {
  return (
    <main>
      <section className="hero wrap">
        <div className="kicker">Capital · Companies · Machines</div>
        <h1>Family office.<br />Incubator.<br />Operating company.</h1>
        <p className="lede">
          Positron Capital Management is the family office for Peter Wokwicz.
          We deploy capital, spin companies, and run labs across markets,
          robotics, and applied AI. Hire for people who ship.
        </p>
        <div style={{ marginTop: 28, display: "flex", gap: 12 }}>
          <Link className="cta" href="/careers">See roles</Link>
          <Link className="cta" href="/ventures" style={{ borderColor: "var(--line)" }}>Ventures</Link>
        </div>
      </section>
      <section className="wrap grid3">
        <article className="card">
          <div className="tag">01</div>
          <h3>Markets</h3>
          <p>Prediction markets, exchange mechanics, funds. Remove middlemen where the plumbing can take it.</p>
        </article>
        <article className="card">
          <div className="tag">02</div>
          <h3>Machines</h3>
          <p>West Loop RoboticsLab. Perception, firmware, visual systems. Floor time required.</p>
        </article>
        <article className="card">
          <div className="tag">03</div>
          <h3>Capital</h3>
          <p>Preserve first. Then incubate. Same roof for hedge products and company formation.</p>
        </article>
      </section>
      <section className="section wrap">
        <h2>Hiring pulse</h2>
        <div className="jobs">
          {JOBS.slice(0, 4).map((j) => (
            <Link className="job" key={j.slug} href={`/careers/${j.slug}`}>
              <div>
                <div className="tag">{j.domain} · {j.location}</div>
                <div style={{ marginTop: 6, fontSize: 18 }}>{j.title}</div>
              </div>
              <span className="tag">Apply →</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
