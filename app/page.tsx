import Image from "next/image";
import Link from "next/link";
import Reveal from "./components/Reveal";
import Slider, { type Slide } from "./components/Slider";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

const slides: Slide[] = [
  {
    src: "/manssonmikaela-building-5431430.jpg",
    alt: "Modernes Wohngebäude mit Balkonen und Grünanlage",
    eyebrow: "Vermietung & Verwaltung",
    title: "Wohnraum, der in guten Händen ist.",
    href: "/leistungen/vermietung",
    cta: "Mehr zur Vermietung",
  },
  {
    src: "/kranich17-berlin-4001319_1920.jpg",
    alt: "Skyline von Berlin mit Fernsehturm",
    eyebrow: "Berlin, Schönefeld & Umland",
    title: "Wir kennen den Markt vor Ihrer Haustür.",
    href: "/leistungen/verkauf",
    cta: "Mehr zum Verkauf",
  },
];

const contacts = [
  { label: "Telefon", value: site.phone, href: site.phoneHref },
  { label: "E-Mail", value: site.email, href: `mailto:${site.email}` },
  {
    label: "Adresse",
    value: `${site.street}, ${site.zip} ${site.city}`,
    href: site.mapsUrl,
    external: true,
  },
];

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] ${light ? "text-white/50" : "text-neutral-500"}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 [background-image:radial-gradient(#0000000f_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-36 md:pt-44">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-1.5 text-sm text-neutral-600 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-500" />
            </span>
            Immobilien & Hausverwaltung in Schönefeld
          </div>

          <h1 className="animate-fade-up mt-8 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-neutral-950 [animation-delay:100ms] sm:text-6xl md:text-7xl lg:text-8xl">
            Ihre Immobilie in{" "}
            <span className="whitespace-nowrap text-neutral-400">besten Händen.</span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <p className="animate-fade-up max-w-md text-lg leading-relaxed text-neutral-600 [animation-delay:200ms]">
              Vermietung, Verkauf und Verwaltung – persönlich begleitet, mit
              regionaler Marktkenntnis in Schönefeld, Berlin und dem Umland.
            </p>
            <div className="animate-fade-up flex flex-wrap gap-3 [animation-delay:300ms]">
              <a
                href="#kontakt"
                className="rounded-full bg-neutral-950 px-7 py-3.5 font-medium text-white transition hover:bg-neutral-800"
              >
                Beratung anfragen
              </a>
              <a
                href="#leistungen"
                className="rounded-full border border-black/15 px-7 py-3.5 font-medium text-neutral-900 transition hover:border-black/40"
              >
                Leistungen
              </a>
            </div>
          </div>

          {/* Bento */}
          <div className="mt-16 grid gap-4 md:grid-cols-4">
            <div className="animate-fade-up relative overflow-hidden rounded-3xl bg-neutral-100 p-7 [animation-delay:400ms] md:col-span-2 md:min-h-60">
              <svg
                className="pointer-events-none absolute -bottom-2 right-0 h-40 w-auto text-neutral-300 md:h-52"
                viewBox="28 -2 115 44"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                aria-hidden="true"
              >
                <path pathLength={1} className="animate-draw" d="M117.4 27.4 77.3 0H40l5.8 4-6.3 6.4M45.3 4.8l19.1 13v8.2M65.8 18.8l12.6 8.6V38.1M31.7 40.2h108.3V27.4" />
              </svg>
              <p className="relative text-sm text-neutral-500">Regional verwurzelt</p>
              <p className="relative mt-2 max-w-xs text-2xl font-semibold tracking-tight text-neutral-950">
                Schönefeld, Berlin & Umland
              </p>
            </div>

            <div className="animate-fade-up flex flex-col justify-between rounded-3xl bg-neutral-950 p-7 text-white [animation-delay:500ms] md:min-h-60">
              <p className="text-sm text-white/50">Erfahrung seit</p>
              <div>
                <p className="text-6xl font-semibold tracking-[-0.05em]">1994</p>
                <p className="mt-2 text-sm text-white/60">Zugelassen nach § 34c GewO</p>
              </div>
            </div>

            <a
              href={site.immoscoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="animate-fade-up group flex flex-col justify-between rounded-3xl bg-brand-800 p-7 text-white transition [animation-delay:600ms] hover:bg-brand-700 md:min-h-60"
            >
              <span className="flex h-11 w-11 items-center justify-center self-end rounded-full bg-white text-brand-800 transition duration-500 group-hover:rotate-45">
                <Arrow />
              </span>
              <div>
                <p className="text-sm text-white/60">ImmobilienScout24</p>
                <p className="mt-1 text-2xl font-semibold tracking-tight">Aktuelle Angebote</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Slider */}
      <section className="bg-white pb-8">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <Slider slides={slides} />
          </Reveal>
        </div>
      </section>

      {/* Leistungen */}
      <section id="leistungen" className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_2fr]">
          <Reveal className="md:sticky md:top-32 md:self-start">
            <Eyebrow>Leistungen</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-neutral-950 md:text-5xl">
              Alles aus <span className="text-neutral-400">einer Hand.</span>
            </h2>
            <p className="mt-5 max-w-xs text-neutral-600">
              Von der ersten Einschätzung bis zur laufenden Betreuung – wir
              kümmern uns um jedes Detail.
            </p>
          </Reveal>

          <div className="border-t border-black/10">
            {services.map((s, i) => (
              <Reveal as="article" key={s.slug} delay={i * 100} className="border-b border-black/10">
                <Link href={`/leistungen/${s.slug}`} className="group flex py-10">
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-3xl font-semibold tracking-tight text-neutral-950 transition group-hover:translate-x-2 md:text-4xl">
                        {s.title}
                      </h3>
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 text-neutral-900 transition duration-500 group-hover:rotate-45 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white">
                        <Arrow />
                      </span>
                    </div>
                    <p className="mt-4 max-w-xl leading-relaxed text-neutral-600">{s.summary}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {s.tags.map((p) => (
                        <li key={p} className="rounded-full bg-neutral-100 px-3.5 py-1.5 text-sm text-neutral-700">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Immobilien */}
      <section id="immobilien" className="bg-white pb-24 md:pb-32">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-neutral-100 p-8 sm:p-12 md:p-16">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl"
            />
            <div className="relative grid gap-10 md:grid-cols-[3fr_2fr] md:items-end">
              <div>
                <Eyebrow>Aktuelle Angebote</Eyebrow>
                <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-neutral-950 md:text-6xl">
                  Finden Sie Ihr <span className="text-neutral-400">neues Zuhause.</span>
                </h2>
                <p className="mt-5 max-w-lg leading-relaxed text-neutral-600">
                  Wohnungen und Häuser zur Miete und zum Kauf – tagesaktuell in
                  unserem Portal bei ImmobilienScout24.
                </p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {["Mietwohnungen", "Häuser", "Eigentumswohnungen", "Kapitalanlagen"].map((t) => (
                    <span key={t} className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-neutral-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:justify-self-end">
                <a
                  href={site.immoscoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 rounded-full bg-neutral-950 py-2.5 pl-7 pr-2.5 font-medium text-white transition hover:bg-neutral-800"
                >
                  Zu allen Angeboten
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-950 transition duration-500 group-hover:rotate-45">
                    <Arrow />
                  </span>
                </a>
                <p className="mt-3 text-xs text-neutral-500">Weiterleitung zu ImmobilienScout24</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Über uns */}
      <section id="ueber-uns" className="relative overflow-hidden bg-neutral-950 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-5 py-24 md:grid-cols-[2fr_3fr] md:gap-16">
          <Reveal className="relative order-2 mx-auto w-full max-w-sm md:order-1">
            <div
              aria-hidden="true"
              className="animate-glow absolute left-1/2 top-1/2 aspect-square w-[110%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.16)_0%,rgba(43,107,80,0.25)_40%,transparent_70%)] blur-2xl"
            />
            <Image
              src="/franzi_portrait.png"
              alt={`Portrait von ${site.owner}`}
              width={1145}
              height={1374}
              sizes="(min-width: 768px) 384px, 90vw"
              className="relative w-full [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
            />
          </Reveal>

          <div className="order-1 md:order-2">
            <Reveal>
              <Eyebrow light>Ihre Ansprechpartnerin</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
                Franziska <span className="text-white/50">Zschoch</span>
              </h2>
              <p className="mt-3 text-white/50">Inhaberin</p>
            </Reveal>
            <Reveal delay={150} className="mt-8 space-y-4 text-lg leading-relaxed text-white/70">
              <p>
                Immobilien sind Vertrauenssache. Deshalb setze ich auf
                persönliche Beratung, ehrliche Einschätzungen und kurze Wege –
                für Eigentümer, Mieter und Kaufinteressenten gleichermaßen.
              </p>
              <p>
                Mit fundierter Kenntnis des regionalen Marktes begleite ich Sie
                bei der Vermietung, dem Verkauf und der Verwaltung Ihrer
                Immobilie – zuverlässig und mit vollem Einsatz.
              </p>
            </Reveal>
            <Reveal delay={300} className="mt-10 flex flex-wrap gap-3">
              <a href={site.phoneHref} className="rounded-full bg-white px-6 py-3 font-medium text-neutral-950 transition hover:bg-neutral-200">
                {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-white/60">
                E-Mail schreiben
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal>
            <Eyebrow>Kontakt</Eyebrow>
            <h2 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-neutral-950 md:text-7xl">
              Lassen Sie uns <span className="text-neutral-400">sprechen.</span>
            </h2>
            <p className="mt-5 max-w-md text-neutral-600">
              Rufen Sie uns an oder schreiben Sie uns – wir melden uns
              schnellstmöglich bei Ihnen zurück.
            </p>
          </Reveal>

          <div className="mt-14 border-t border-black/10">
            {contacts.map((c, i) => (
              <Reveal key={c.label} delay={i * 100}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="group flex flex-col gap-2 border-b border-black/10 py-7 transition-colors hover:bg-neutral-50 sm:flex-row sm:items-center sm:gap-8 sm:px-4"
                >
                  <span className="w-28 shrink-0 text-sm text-neutral-500">{c.label}</span>
                  <span className="flex-1 break-words text-2xl font-medium tracking-tight text-neutral-950 transition group-hover:translate-x-2 md:text-4xl">
                    {c.value}
                  </span>
                  <span className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 transition duration-500 group-hover:rotate-45 group-hover:border-neutral-950 group-hover:bg-neutral-950 group-hover:text-white sm:flex">
                    <Arrow />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
