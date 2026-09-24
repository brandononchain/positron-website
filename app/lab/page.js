export default function Lab() {
  return (
    <main className="wrap section">
      <div className="kicker">Chicago · West Loop</div>
      <h1 style={{ fontSize: 56, margin: "12px 0 20px" }}>RoboticsLab</h1>
      <p className="lede">
        Half the robotics seat is on the floor. Firmware, perception, and
        control get tested on hardware in the same week they are written.
        Remote theory without lab time is a different job.
      </p>
      <div className="grid3" style={{ paddingTop: 36 }}>
        <article className="card"><h3>Control</h3><p>Real-time loops, state estimation, motor stacks.</p></article>
        <article className="card"><h3>Perception</h3><p>Cameras, keypoints, calibration under bad light.</p></article>
        <article className="card"><h3>Fleet hygiene</h3><p>Diagnostics, CI, OTA for a small lab fleet.</p></article>
      </div>
    </main>
  );
}
