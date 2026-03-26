import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "A sample SaaS dashboard app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="navbar">
          <div className="navbar-logo">Acme</div>
          <ul className="navbar-links">
            <li><a href="#hero">Home</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
