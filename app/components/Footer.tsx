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
          <p className="whitespace-nowrap">
            Website built with{" "}
            <svg
              viewBox="0 0 24 24"
              className="inline-block h-[1em] w-[1em] align-[-0.12em]"
              role="img"
              aria-label="Love"
            >
              <defs>
                <clipPath id="heart-clip">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </clipPath>
              </defs>
              <g clipPath="url(#heart-clip)">
                <rect width="24" height="24" fill="#fff" />
                {[3, 5.2, 7.4, 9.6, 11.8, 14, 16.2, 18.4, 20.6].map((y, i) =>
                  i % 2 === 0 ? <rect key={y} y={y} width="24" height="1.1" fill="#B22234" /> : null,
                )}
                <rect width="11" height="11.8" fill="#3C3B6E" />
                <circle cx="3" cy="4" r="0.6" fill="#fff" />
                <circle cx="6" cy="4" r="0.6" fill="#fff" />
                <circle cx="9" cy="4" r="0.6" fill="#fff" />
                <circle cx="4.5" cy="6.5" r="0.6" fill="#fff" />
                <circle cx="7.5" cy="6.5" r="0.6" fill="#fff" />
                <circle cx="3" cy="9" r="0.6" fill="#fff" />
                <circle cx="6" cy="9" r="0.6" fill="#fff" />
                <circle cx="9" cy="9" r="0.6" fill="#fff" />
              </g>
            </svg>{" "}
            in the USA
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
