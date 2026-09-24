export default function Contact() {
  return (
    <main className="wrap section">
      <div className="kicker">Direct</div>
      <h1 style={{ fontSize: 56, margin: "12px 0 20px" }}>Contact</h1>
      <p className="lede">Roles go through Careers. Everything else: one note.</p>
      <form className="card" style={{ maxWidth: 520, marginTop: 28 }} action="mailto:careers@positroncm.com" method="get">
        <label>Name</label>
        <input name="name" required />
        <label>Email</label>
        <input name="email" type="email" required />
        <label>Subject</label>
        <input name="subject" defaultValue="PCM contact" />
        <label>Message</label>
        <textarea name="body" required />
        <div style={{ marginTop: 16 }}>
          <button className="btn" type="submit">Send</button>
        </div>
      </form>
    </main>
  );
}
