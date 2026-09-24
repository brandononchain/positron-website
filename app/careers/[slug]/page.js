import Link from "next/link";
import { notFound } from "next/navigation";
import { getJob, JOBS } from "../../../lib/jobs";

export function generateStaticParams() {
  return JOBS.map((j) => ({ slug: j.slug }));
}

export default function Role({ params }) {
  const job = getJob(params.slug);
  if (!job) notFound();
  return (
    <main className="wrap section">
      <div className="tag">{job.domain} · {job.seniority} · {job.location}</div>
      <h1 style={{ fontSize: 48, margin: "12px 0 16px" }}>{job.title}</h1>
      <p className="lede">{job.problem}</p>
      <div className="split" style={{ marginTop: 36 }}>
        <div>
          <h2>What you do</h2>
          <ul className="list">
            {job.outcomes.map((o) => <li key={o}>{o}</li>)}
          </ul>
        </div>
        <div>
          <h2>Must have</h2>
          <ul className="list">
            {job.must.map((o) => <li key={o}>{o}</li>)}
          </ul>
        </div>
      </div>
      <div style={{ marginTop: 32 }}>
        <Link className="cta" href={`/apply/${job.slug}`}>Apply with agent</Link>
      </div>
    </main>
  );
}
