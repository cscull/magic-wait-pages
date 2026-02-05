import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "MagicWait — Walt Disney World Wait Times & Park Companion",
  description:
    "Free real-time wait times, Lightning Lane pricing, ride tracking, and park info for all 4 Walt Disney World parks. Available on iPhone and Apple Watch.",
  keywords: [
    "Disney World",
    "wait times",
    "Magic Kingdom",
    "EPCOT",
    "Hollywood Studios",
    "Animal Kingdom",
    "Lightning Lane",
    "ride tracker",
    "park companion",
    "iOS app",
  ],
  openGraph: {
    title: "MagicWait — Walt Disney World Wait Times",
    description:
      "Free real-time wait times, Lightning Lane pricing, and ride tracking for all 4 Disney World parks.",
    url: "https://magicwait.com",
    siteName: "MagicWait",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MagicWait — Walt Disney World Wait Times",
    description:
      "Free real-time wait times, Lightning Lane pricing, and ride tracking for all 4 Disney World parks.",
  },
  metadataBase: new URL("https://magicwait.com"),
  icons: {
    icon: "/favicon.svg",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
