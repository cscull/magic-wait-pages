import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service — MagicWait",
  description: "Terms of service for the MagicWait iOS app.",
};

export default function TermsOfService() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="font-heading text-xl font-bold text-navy-950 hover:text-gold transition-colors">
            MagicWait
          </Link>
          <Link href="/" className="text-sm text-slate-500 hover:text-navy-950 transition-colors">
            Back to Home
          </Link>
        </nav>
      </header>

      <main className="min-h-screen bg-white pt-24 pb-16 px-6">
        <article className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-bold text-navy-950 mb-8">
            Terms of Service
          </h1>

          <div className="space-y-6 text-slate-500 leading-relaxed">
            <p>
              These terms of service govern your use of the MagicWait app
              (&ldquo;Application&rdquo;) for mobile devices, created by Casey Scull
              (&ldquo;Service Provider&rdquo;).
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Acceptance of Terms
            </h2>
            <p>
              By downloading, installing, or using the Application, you agree to
              be bound by these Terms of Service. If you do not agree to these
              terms, do not use the Application.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Description of Service
            </h2>
            <p>
              MagicWait provides real-time wait time information, Lightning Lane
              pricing, park hours, and other data related to Walt Disney World
              theme parks. The Application is provided free of charge and is
              supported by advertisements.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Data Accuracy
            </h2>
            <p>
              Wait times and other park data are sourced from third-party
              providers and are provided on an &ldquo;as-is&rdquo; basis. The Service
              Provider does not guarantee the accuracy, completeness, or
              timeliness of any information displayed in the Application.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Disclaimer
            </h2>
            <p>
              MagicWait is not affiliated with, endorsed by, or in any way
              officially connected with The Walt Disney Company, Walt Disney
              World, or any of their subsidiaries or affiliates. All Disney
              parks, attractions, and related names are trademarks of The Walt
              Disney Company.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Limitation of Liability
            </h2>
            <p>
              The Service Provider shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting
              from your use of or inability to use the Application.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Changes to Terms
            </h2>
            <p>
              The Service Provider reserves the right to modify these terms at
              any time. Continued use of the Application after changes
              constitutes acceptance of the modified terms.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Contact
            </h2>
            <p>
              For questions about these Terms of Service, contact us at{" "}
              <a
                href="mailto:support@magicwait.com"
                className="text-gold hover:text-gold-light transition-colors"
              >
                support@magicwait.com
              </a>
              .
            </p>
          </div>
        </article>
      </main>

      <footer className="bg-navy-950 border-t border-gold/10 py-6 px-6 text-center">
        <p className="text-[#94a3b8]/60 text-sm">
          &copy; 2026 MagicWait. Not affiliated with The Walt Disney Company.
        </p>
      </footer>
    </>
  );
}
