export function tokenize(text) {
  return (text || "")
    .toLowerCase()
    .replace(/[^a-z0-9+#./\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 1);
}

export function scoreFit(job, resumeText, links = "") {
  const blob = `${resumeText} ${links}`.toLowerCase();
  const hits = [];
  const misses = [];
  for (const kw of job.keywords) {
    if (blob.includes(kw.toLowerCase())) hits.push(kw);
    else misses.push(kw);
  }
  const mustHits = job.must.filter((m) =>
    tokenize(m).some((w) => w.length > 3 && blob.includes(w))
  );
  const keywordScore = job.keywords.length ? hits.length / job.keywords.length : 0;
  const mustScore = job.must.length ? mustHits.length / job.must.length : 0;
  const score = Math.round((keywordScore * 0.55 + mustScore * 0.45) * 100);
  return {
    score,
    hits,
    misses: misses.slice(0, 8),
    mustHits,
    mustGaps: job.must.filter((m) => !mustHits.includes(m)),
    band: score >= 75 ? "Strong" : score >= 50 ? "Plausible" : "Stretch",
  };
}

export function draftPacket(job, profile, fit) {
  const name = profile.name || "Candidate";
  const bullets = [
    `Relevant signal vs ${job.title}: ${fit.hits.slice(0, 5).join(", ") || "general builder background"}.`,
    fit.mustHits[0]
      ? `Closest must-have covered: ${fit.mustHits[0]}`
      : `Primary gap to address in conversation: ${fit.mustGaps[0] || job.must[0]}`,
    profile.github || profile.linkedin
      ? `Work is inspectable: ${[profile.github, profile.linkedin].filter(Boolean).join(" · ")}`
      : "Packet includes resume text only — add GitHub or shipped URLs before send.",
  ];
  const note = `${name} applying for ${job.title}.\n\nI build systems in the same neighborhood as this role: ${job.domain.toLowerCase()}. Fit band ${fit.band} (${fit.score}/100) against the posted must-haves.\n\nI can start from the actual problem — ${job.problem} — and ship the first useful slice without a six-week discovery theater.\n\nReceipt-ready packet attached. Happy to walk a live system or a lab bench.`;
  return { bullets, note };
}

export function makeReceipt(application) {
  const payload = JSON.stringify({
    id: application.id,
    job: application.jobSlug,
    email: application.email,
    score: application.fit.score,
    at: application.createdAt,
  });
  let h = 0;
  for (let i = 0; i < payload.length; i++) h = (h * 31 + payload.charCodeAt(i)) >>> 0;
  return `pcm_${application.id.slice(0, 8)}_${h.toString(16)}`;
}

export function newId() {
  return crypto.randomUUID ? crypto.randomUUID() : String(Date.now());
}
