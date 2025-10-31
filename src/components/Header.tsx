"use client";

import "./header.css";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "ГОЛОВНА", type: "pill" as const },
  { href: "/about", label: "ПРО НАС", type: "pill" as const },
  { href: "/brands", label: "ТОРГОВІ МАРКИ", type: "pill" as const },
  { href: "/partners", label: "ПАРТНЕРАМ", type: "pill" as const },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="container header-bar">
        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={isActive ? "nav-pill active" : "nav-pill"}
                  >
                    <span className="nav-label">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="header-cta">
          <Link href="/contacts" className="cta-btn">
            ЗВʼЯЗАТИСЯ З НАМИ
          </Link>
        </div>
      </div>
    </header>
  );
}


