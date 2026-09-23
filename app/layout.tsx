import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./components/CartContext";
import CartSidebar from "./components/CartSidebar";

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
  metadataBase: new URL('https://www.mikesvet.com'),
  title: {
    default: "Vet Clinic Dubai | Mike's Vet — 4.8★ | Hessa Street | Open 7 Days",
    template: "%s | Mike's Vet Dubai",
  },
  description:
    "Mike's Vet — Dubai's top-rated vet clinic (4.8★) on Hessa Street. Complex & orthopaedic surgery, TPLO, soft tissue surgery, dentals, emergency care & vaccinations. Open 7 days, 9am–9:30pm. Serving JVC, Al Barsha, Jumeirah & beyond.",
  keywords: [
    "best vet Dubai", "vet Dubai", "veterinary clinic Dubai", "cat vet Dubai", "dog vet Dubai",
    "emergency vet Dubai", "Hessa Street vet", "pet clinic Dubai", "vet near JVC Dubai",
    "vet near Al Barsha", "vet open late Dubai", "vet open Friday Dubai", "vet open Sunday Dubai",
    "cat adoption Dubai", "animal hospital Dubai", "Mike's Vet", "top rated vet Dubai",
    "orthopaedic vet Dubai", "orthopedic vet Dubai", "dog surgery Dubai", "cat surgery Dubai",
    "TPLO Dubai", "TPLO surgery Dubai", "cruciate ligament surgery Dubai", "dog knee surgery Dubai",
    "fracture repair dog Dubai", "veterinary surgeon Dubai", "complex surgery vet Dubai",
    "soft tissue surgery Dubai", "pet surgery Dubai", "luxating patella Dubai",
    "hip dysplasia vet Dubai", "orthopaedic surgery dog Dubai",
  ],
  authors: [{ name: "Mike's Vet Dubai" }],
  creator: "Mike's Vet",
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://www.mikesvet.com',
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
    canonical: 'https://www.mikesvet.com',
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://app.cw.vet" />
      </head>
      <body className="min-h-full flex flex-col">
        <CartProvider>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  );
}
