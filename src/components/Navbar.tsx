"use client";

import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar">
      {/* BUG: Logo and links are vertically misaligned (flex-start + margin-top on logo) */}
      <div className="navbar-logo">Acme</div>
      <ul className="navbar-links">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}
