import type { Metadata } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.web),
  title: {
    default: `${site.name} | Schönefeld`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Ihr Partner für Vermietung, Verkauf und Hausverwaltung in Schönefeld, Berlin und Umgebung. Persönlich, zuverlässig und kompetent.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${interTight.variable} ${instrumentSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
