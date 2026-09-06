import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mikesvet.com'),
  title: {
    default: "Mike's Vet | Veterinary Clinic on Hessa Street, Dubai",
    template: "%s | Mike's Vet Dubai",
  },
  description:
    "Mike's Vet is Dubai's leading veterinary clinic on Hessa Street. Open 7 days, 9am–9:30pm. Expert care for cats & dogs: diagnostics, surgery, nutrition counseling, and emergency care. Book online.",
  keywords: [
    "vet Dubai", "veterinary clinic Dubai", "cat vet Dubai", "dog vet Dubai",
    "emergency vet Dubai", "Hessa Street vet", "pet clinic Dubai",
    "cat adoption Dubai", "animal hospital Dubai", "Mike's Vet",
  ],
  authors: [{ name: "Mike's Vet Dubai" }],
  creator: "Mike's Vet",
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://mikesvet.com',
    siteName: "Mike's Vet Dubai",
    title: "Mike's Vet | Veterinary Clinic on Hessa Street, Dubai",
    description:
      "Dubai's leading vet clinic on Hessa Street — open 7 days, 9am–9:30pm. Expert care for cats & dogs, plus cat adoption and fostering.",
    images: [{ url: '/icon-mark.png', width: 512, height: 512, alt: "Mike's Vet logo" }],
  },
  twitter: {
    card: 'summary',
    title: "Mike's Vet | Veterinary Clinic, Dubai",
    description: "Expert vet care for cats & dogs on Hessa Street, Dubai. Open 7 days.",
    images: ['/icon-mark.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://mikesvet.com',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
