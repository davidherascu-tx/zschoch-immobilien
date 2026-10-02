import Link from "next/link";
import { services } from "@/lib/services";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>
          <p className="text-xl font-semibold tracking-tight text-white">{site.shortName}</p>
          <p className="mt-1 text-sm">und Hausverwaltung</p>
          <p className="mt-4 text-sm leading-relaxed">
            Vermietung, Verkauf und Verwaltung von Immobilien in Schönefeld,
            Berlin und Umgebung.
          </p>
          <p className="mt-4 text-sm">
            Partner:{" "}
            <a
              href={site.partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 underline-offset-4 hover:text-white hover:underline"
            >
              {site.partner.name}
            </a>
          </p>
        </div>

        <div className="text-sm leading-relaxed">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white/40">Kontakt</p>
          <p>{site.street}</p>
          <p>
            {site.zip} {site.city}
          </p>
          <p className="mt-3">
            <a href={site.phoneHref} className="hover:text-white">
              Tel. {site.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${site.email}`} className="hover:text-white">
              {site.email}
            </a>
          </p>
        </div>

        <div className="text-sm">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white/40">Leistungen</p>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/leistungen/${s.slug}`} className="hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white/40">Navigation</p>
          <ul className="space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-white">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
