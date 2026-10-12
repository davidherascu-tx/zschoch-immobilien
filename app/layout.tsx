import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "@/lib/site";
import JsonLd from "./components/JsonLd";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.web),
  title: {
    default: `${site.name} | Schönefeld`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Ihr Partner für Vermietung, Verkauf und Hausverwaltung in Schönefeld, Berlin und Umgebung. Persönlich, zuverlässig und kompetent.",
  alternates: { canonical: "/" },
  keywords: [
    "Immobilienmakler Schönefeld",
    "Hausverwaltung Schönefeld",
    "Immobilien Berlin",
    "Wohnung vermieten",
    "Immobilie verkaufen",
    "Zschoch Immobilien",
  ],
  openGraph: {
    type: "website",
    locale: "de_DE",
    siteName: site.name,
    url: "/",
    title: `${site.name} | Schönefeld`,
    description:
      "Vermietung, Verkauf und Hausverwaltung in Schönefeld, Berlin und Umgebung. Persönlich, zuverlässig und kompetent.",
    images: [{ url: "/kranich17-berlin-4001319_1920.jpg", width: 1920, height: 1280, alt: "Skyline von Berlin mit Fernsehturm" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  // Google Search Console: Token der HTML-Tag-Methode als Umgebungsvariable setzen
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
};

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "@id": `${site.web}/#organisation`,
  name: site.name,
  url: site.web,
  logo: `${site.web}/logo_zschoch.svg`,
  image: `${site.web}/kranich17-berlin-4001319_1920.jpg`,
  telephone: site.phoneIntl,
  faxNumber: site.fax,
  email: site.email,
  founder: { "@type": "Person", name: site.owner },
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    postalCode: site.zip,
    addressLocality: site.city,
    addressRegion: "Brandenburg",
    addressCountry: "DE",
  },
  areaServed: ["Schönefeld", "Berlin", "Brandenburg"],
  sameAs: [site.immoscoutUrl],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${interTight.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <JsonLd data={localBusiness} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
