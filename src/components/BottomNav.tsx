"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BottomNav() {
  const pathname = usePathname();

  return (
    // BUG: This fixed bottom nav overlaps page content on mobile
    <div className="bottom-nav">
      <Link href="/" className={pathname === "/" ? "active" : ""}>
        Home
      </Link>
      <Link
        href="/dashboard"
        className={pathname === "/dashboard" ? "active" : ""}
      >
        Dashboard
      </Link>
    </div>
  );
}
