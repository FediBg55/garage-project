"use client";

import Image from "next/image";
import Link from "next/link";
import { useI18n } from "./language-provider";
import T from "./t";

const navItems = [
  { href: "/", key: "nav.home" },
  { href: "/services", key: "nav.services" },
  { href: "/rendez-vous", key: "nav.booking" },
  { href: "/contact", key: "nav.contact" },
  { href: "/a-propos", key: "nav.about" },
  { href: "/admin", key: "nav.admin" },
];

export default function Navbar() {
  const { lang, setLang } = useI18n();

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          <Image
            src="/logo2.png"
            alt="JG Garage logo"
            width={60}
            height={60}
            className="brand-logo"
            priority
          />
          <span>Ste Garage Jawhara</span>
        </Link>
        <nav className="top-nav">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="top-nav-link">
              <T k={item.key} />
            </Link>
          ))}
          <div className="lang-switch">
            {(["fr", "en", "ar"] as const).map((code) => (
              <button
                key={code}
                type="button"
                className={`lang-btn ${lang === code ? "active" : ""}`}
                onClick={() => setLang(code)}
              >
                <T k={`lang.${code}`} />
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}
