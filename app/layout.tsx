import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { CartProvider } from "./components/CartContext";
import CartSidebar from "./components/CartSidebar";
import WelcomePopup from "./components/WelcomePopup";
import GTMRouteTracker from "./components/GTMRouteTracker";

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
    default: "Mike's Vet Dubai | 513 Reviews 4.8★ | Hessa Street | Open 7 Days",
    template: "%s | Mike's Vet Dubai",
  },
  description:
    "Dubai's most-reviewed vet clinic — 513 reviews, 4.8★. Mike's Vet on Hessa Street: TPLO & orthopaedic surgery, soft tissue surgery, dentals, emergency care & vaccinations. Open 7 days, 9am–9:30pm.",
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
      "Dubai's leading vet clinic on Hessa Street - open 7 days, 9am–9:30pm. Expert care for cats & dogs, plus cat adoption and fostering.",
    images: [{ url: '/og-image.png', width: 1200, height: 720, alt: "Mike's Vet - Veterinary Clinic on Hessa Street, Dubai" }],
  },
  twitter: {
    card: 'summary',
    title: "Mike's Vet | Veterinary Clinic, Dubai",
    description: "Expert vet care for cats & dogs on Hessa Street, Dubai. Open 7 days.",
    images: ['/icon-mark.png'],
  },
  robots: {
    index: process.env.VERCEL_ENV === 'production',
    follow: true,
    googleBot: {
      index: process.env.VERCEL_ENV === 'production',
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://www.mikesvet.com',
    languages: { en: 'https://www.mikesvet.com', ar: 'https://www.mikesvet.com/ar' },
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
          <WelcomePopup />
          <GTMRouteTracker />
        </CartProvider>
      </body>
      <Script id="ads-pixel" strategy="afterInteractive">{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-TR44GM95');
        window.gtag=function(){window.dataLayer.push(arguments);}
        window.gtag('js',new Date());
        window.gtag('config','G-89409ZBF0W');
        window.gtag('config','AW-16668386512');
        (function(){var g=document.createElement('script');g.async=true;g.src='https://www.googletagmanager.com/gtag/js?id=G-89409ZBF0W';document.head.appendChild(g);})();
        !function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,'script','https://bzrcdn.openai.com/sdk/oaiq.min.js');
        oaiq('init',{pixelId:'7E9qMt1jAbCK12wvo7c35E'});
      `}</Script>
    </html>
  );
}
