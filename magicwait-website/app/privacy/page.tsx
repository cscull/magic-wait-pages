import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — MagicWait",
  description: "Privacy policy for the MagicWait iOS app.",
};

export default function PrivacyPolicy() {
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
          <h1 className="font-heading text-4xl font-bold text-navy-950 mb-2">
            Privacy Policy
          </h1>
          <p className="text-slate-400 text-sm mb-8">
            Last Updated: February 3, 2026
          </p>

          <div className="space-y-6 text-slate-500 leading-relaxed">
            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Introduction
            </h2>
            <p>
              MagicWait (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to
              protecting your privacy. This Privacy Policy explains how we
              collect, use, and share information when you use the MagicWait
              mobile application (&ldquo;App&rdquo;).
            </p>
            <p>
              By using MagicWait, you agree to the collection and use of
              information in accordance with this policy.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Information We Collect
            </h2>

            <h3 className="font-heading text-xl font-semibold text-navy-950 pt-2">
              Information Collected Automatically
            </h3>
            <p>
              When you use MagicWait, we automatically collect certain
              information through third-party services:
            </p>

            <p className="font-semibold text-navy-950">
              Analytics Data (Firebase Analytics)
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>App usage patterns and feature interactions</li>
              <li>Session duration and frequency</li>
              <li>Device type, operating system, and version</li>
              <li>General location (country/region level)</li>
              <li>App version</li>
            </ul>

            <p className="font-semibold text-navy-950">
              Crash and Performance Data (Firebase Crashlytics)
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Crash logs and error reports</li>
              <li>Device state at time of crash</li>
              <li>Stack traces and diagnostic information</li>
              <li>Device model and OS version</li>
            </ul>

            <p className="font-semibold text-navy-950">
              Advertising Data (Google AdMob)
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Advertising identifiers (IDFA on iOS)</li>
              <li>IP address (for ad serving and fraud prevention)</li>
              <li>General location data</li>
              <li>Ad interaction data (views, clicks)</li>
            </ul>

            <h3 className="font-heading text-xl font-semibold text-navy-950 pt-2">
              Information You Provide Voluntarily
            </h3>
            <p className="font-semibold text-navy-950">Contact Form</p>
            <p>
              If you choose to contact us through the App&rsquo;s contact form, we
              collect:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>Your email address</li>
              <li>Your name (if provided)</li>
              <li>The content of your message</li>
            </ul>
            <p>
              This information is used solely to respond to your inquiry and is
              not shared with third parties.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              How We Use Your Information
            </h2>
            <p>We use the collected information to:</p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                Display advertisements to support the App, which is provided
                free of charge
              </li>
              <li>
                Analyze app usage to improve features and user experience
              </li>
              <li>
                Identify and fix crashes, bugs, and performance issues
              </li>
              <li>Respond to your support inquiries and feedback</li>
              <li>
                Ensure the App functions properly across different devices
              </li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Third-Party Services
            </h2>
            <p>
              MagicWait uses the following third-party services that may collect
              information:
            </p>

            <p className="font-semibold text-navy-950">Google AdMob</p>
            <p>
              AdMob serves advertisements in the App. Google may use advertising
              identifiers and other data to serve personalized ads. You can opt
              out of personalized advertising in your device settings.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  Google Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  How Google Uses Information
                </a>
              </li>
            </ul>

            <p className="font-semibold text-navy-950">Firebase (Google)</p>
            <p>
              Firebase provides analytics and crash reporting services.
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <a
                  href="https://firebase.google.com/support/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-gold-light transition-colors"
                >
                  Firebase Privacy and Security
                </a>
              </li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Your Choices and Rights
            </h2>

            <p className="font-semibold text-navy-950">Advertising Preferences</p>
            <p>
              You can limit ad tracking and personalized advertising:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong className="text-navy-950">iOS:</strong> Go to Settings
                &gt; Privacy &amp; Security &gt; Tracking, and disable
                &ldquo;Allow Apps to Request to Track&rdquo;
              </li>
              <li>
                You may also reset your Advertising Identifier in Settings &gt;
                Privacy &amp; Security &gt; Apple Advertising
              </li>
            </ul>

            <p className="font-semibold text-navy-950">Analytics</p>
            <p>
              You may disable analytics collection in the App settings (if
              available) or by contacting us.
            </p>

            <p className="font-semibold text-navy-950">Data Deletion</p>
            <p>
              To request deletion of any personal data we hold about you (such
              as contact form submissions), please contact us using the
              information below.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Data Retention
            </h2>
            <ul className="list-disc list-inside space-y-1 pl-4">
              <li>
                <strong className="text-navy-950">Analytics and crash data</strong>{" "}
                is retained according to Firebase&rsquo;s standard retention periods
                (typically 14 months for analytics, 90 days for crash data)
              </li>
              <li>
                <strong className="text-navy-950">Advertising data</strong> is
                managed by Google according to their retention policies
              </li>
              <li>
                <strong className="text-navy-950">
                  Contact form submissions
                </strong>{" "}
                are retained only as long as necessary to address your inquiry,
                then deleted
              </li>
            </ul>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Children&rsquo;s Privacy
            </h2>
            <p>
              MagicWait is not directed at children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If you are a parent or guardian and believe your child has provided
              us with personal information, please contact us so we can delete
              it.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Data Security
            </h2>
            <p>
              We implement reasonable security measures to protect your
              information. However, no method of electronic transmission or
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy in the
              App and updating the &ldquo;Last Updated&rdquo; date. You are advised to
              review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="font-heading text-2xl font-bold text-navy-950 pt-4">
              Contact Us
            </h2>
            <p>
              If you have any questions about this Privacy Policy or our data
              practices, please contact us at{" "}
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
