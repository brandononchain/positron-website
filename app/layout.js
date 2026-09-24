import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Positron Capital Management",
  description: "Family office. Incubator. Operating company.",
};

const links = [
  ["/ventures", "Ventures"],
  ["/lab", "Lab"],
  ["/people", "People"],
  ["/careers", "Careers"],
  ["/contact", "Contact"],
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="nav">
          <div className="wrap" style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
            <Link href="/" className="brand">
              <b>PCM</b>
              <span>Positron</span>
            </Link>
            <nav className="nav-links">
              {links.map(([href, label]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </nav>
            <Link className="cta" href="/careers">
              Open roles
            </Link>
          </div>
        </header>
        {children}
        <footer className="footer wrap">
          <div>Positron Capital Management · Family office for Peter Wokwicz · Chicago / Dover</div>
          <div>© {new Date().getFullYear()}</div>
        </footer>
      </body>
    </html>
  );
}
