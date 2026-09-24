export default function People() {
  return (
    <main className="wrap section">
      <div className="kicker">How it actually runs</div>
      <h1 style={{ fontSize: 56, margin: "12px 0 20px" }}>People</h1>
      <p className="lede">
        Quants, researchers, former startup CEOs. Base is deliberately plain;
        upside sits on shipped work. PCM is the family office for Peter Wokwicz
        — finance + physics, company operator, allocator.
      </p>
      <div className="grid3" style={{ paddingTop: 36 }}>
        <article className="card"><h3>Operators</h3><p>Own a product or a market. Talk to the bench and the board.</p></article>
        <article className="card"><h3>Builders</h3><p>Python, firmware, models, matching engines. Proof over slides.</p></article>
        <article className="card"><h3>Comp</h3><p>Shared base, outsized commission on successful projects. Uncomfortable on purpose.</p></article>
      </div>
    </main>
  );
}
