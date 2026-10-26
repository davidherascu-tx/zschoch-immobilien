import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Old WordPress URLs that are still in Google's index
  async redirects() {
    return [
      { source: "/services/:slug(vermietung|verkauf|verwaltung)", destination: "/leistungen/:slug", permanent: true },
      { source: "/services", destination: "/#leistungen", permanent: true },
      { source: "/immobilie-verkaufen", destination: "/leistungen/verkauf", permanent: true },
      { source: "/impressum_datenschutz", destination: "/impressum", permanent: true },
      { source: "/impress.html", destination: "/impressum", permanent: true },
      { source: "/wp-sitemap.xml", destination: "/sitemap.xml", permanent: true },
      { source: "/wp-sitemap-:rest", destination: "/sitemap.xml", permanent: true },
      { source: "/author/:path*", destination: "/", permanent: true },
      { source: "/feed", destination: "/", permanent: true },
      { source: "/comments/feed", destination: "/", permanent: true },
      { source: "/flash.html", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
