import Link from "next/link";

const FOOTER_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950">
      {/* Gold divider */}
      <div className="gold-divider" />

      {/* Main footer content */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Left column: Wordmark & tagline */}
          <div>
            <span className="font-heading text-xl text-white">MagicWait</span>
            <p className="mt-2 text-sm text-[#94a3b8]">
              Real-time Walt Disney World wait times &amp; park companion
            </p>
          </div>

          {/* Center column: Links */}
          <div>
            <h3 className="font-semibold text-white">Links</h3>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="mailto:support@magicwait.com"
                  className="text-sm text-[#94a3b8] transition-colors duration-200 hover:text-gold"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Right column: Data attribution */}
          <div>
            <h3 className="font-semibold text-white">Data</h3>
            <p className="mt-3 text-sm text-[#94a3b8]">
              Data provided by{" "}
              <a
                href="https://themeparks.wiki"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold transition-colors duration-200 hover:text-gold-light"
              >
                ThemeParks.wiki
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gold/20">
        <p className="py-4 text-center text-sm text-[#94a3b8]/60">
          &copy; 2026 MagicWait. Not affiliated with The Walt Disney Company.
        </p>
      </div>
    </footer>
  );
}
