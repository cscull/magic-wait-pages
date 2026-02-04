"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Parks", href: "#parks" },
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Watch", href: "#watch" },
];

const SCROLL_THRESHOLD = 50;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position on mount
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Close mobile menu on anchor navigation
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-white/70 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-heading text-2xl font-bold tracking-tight text-navy-950 transition-colors hover:text-gold"
          aria-label="MagicWait home"
        >
          MagicWait
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-navy-950"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a href="#download" className="btn-gold hidden text-sm md:inline-flex">
          Download Free
        </a>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <div className="flex w-6 flex-col items-center gap-[5px]">
            <span
              className={`block h-[2px] w-full rounded-full bg-navy-950 transition-all duration-300 ${
                mobileMenuOpen
                  ? "translate-y-[7px] rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-navy-950 transition-all duration-300 ${
                mobileMenuOpen ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-navy-950 transition-all duration-300 ${
                mobileMenuOpen
                  ? "-translate-y-[7px] -rotate-45"
                  : "translate-y-0 rotate-0"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="border-t border-gray-200 px-6 pb-6 pt-4">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleNavClick}
                  className="block text-base font-medium text-slate-500 transition-colors duration-200 hover:text-navy-950"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <a
              href="#download"
              onClick={handleNavClick}
              className="btn-gold w-full justify-center text-sm"
            >
              Download Free
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
