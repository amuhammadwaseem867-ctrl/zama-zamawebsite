"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  Menu,
  X,
  Phone,
  ChevronDown,
} from "lucide-react";
import "./Header.css";

const navigation = [
  { label: "HOME", href: "/" },
  { label: "SERVICES", href: "/services", hasMenu: true },
  { label: "TYRES & WHEELS", href: "/tyres-wheels" },
  { label: "ABOUT US", href: "/about" },
  { label: "CONTACT", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="header-topbar">
        <div className="header-topbar-inner">
          <span className="header-topbar-message">
            YOUR VEHICLE. OUR ATTENTION TO DETAIL.
          </span>

          <a className="header-topbar-phone" href="tel:0718956445">
            <Phone size={13} />
            <span>071 895 6445</span>
          </a>
        </div>
      </div>

      <div className="header-main">
        <div className="header-main-inner">
          <Link
            href="/"
            className="header-brand"
            aria-label="Zama Zama Auto Fitment Center home"
            onClick={closeMenu}
          >
            <span className="header-brand-mark">
              ZZ<span>.</span>
            </span>

            <span className="header-brand-copy">
              <strong>ZAMA ZAMA</strong>
              <span>AUTO FITMENT CENTER</span>
            </span>
          </Link>

          <nav
            className={`header-navigation${menuOpen ? " is-open" : ""}`}
            id="primary-navigation"
            aria-label="Main navigation"
          >
            {navigation.map((item) => (
              <Link
                href={item.href}
                className="header-nav-link"
                key={item.label}
                onClick={closeMenu}
              >
                <span>{item.label}</span>
                {item.hasMenu && (
                  <ChevronDown
                    className="header-nav-chevron"
                    size={13}
                    aria-hidden="true"
                  />
                )}
              </Link>
            ))}

            <a
              href="tel:0718956445"
              className="header-mobile-call"
              onClick={closeMenu}
            >
              <Phone size={16} />
              CALL 071 895 6445
            </a>

            <Link
              href="/book-appointment"
              className="header-mobile-book"
              onClick={closeMenu}
            >
              BOOK AN APPOINTMENT
              <ArrowUpRight size={17} />
            </Link>
          </nav>

          <div className="header-actions">
            <a
              href="tel:0718956445"
              className="header-call-link"
              aria-label="Call 071 895 6445"
            >
              <Phone size={16} />
            </a>

            <Link
              href="/book-appointment"
              className="header-book-button"
            >
              <span>BOOK A VISIT</span>
              <ArrowUpRight size={17} />
            </Link>

            <button
              type="button"
              className="header-menu-toggle"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-controls="primary-navigation"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
