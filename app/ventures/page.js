export default function Ventures() {
  const items = [
    ["Prediction markets", "Live market + exchange stack. Matching, resolution, settlement."],
    ["Robotics", "Specialized and humanoid platforms. West Loop lab."],
    ["Legal AI", "Production RAG and agent workflows for firms that cannot leak privilege."],
    ["Visual systems", "Pupil tracking, camera ID, clear-LCD products."],
    ["Funds", "Specialized vehicles that give outside capital a seat on PCM strategies."],
    ["Spinouts", "Robotics, satellite, consumer, fintech, crypto, and technology companies formed under the same roof."],
  ];
  return (
    <main className="wrap section">
      <div className="kicker">Portfolio of work</div>
      <h1 style={{ fontSize: 56, margin: "12px 0 28px" }}>Ventures</h1>
      <div className="grid3">
        {items.map(([t, d]) => (
          <article className="card" key={t}>
            <h3>{t}</h3>
            <p>{d}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
