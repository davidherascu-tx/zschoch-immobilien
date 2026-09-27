import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/app/components/Reveal";
import { getService, services } from "@/lib/services";
import { site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata(props: PageProps<"/leistungen/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) return {};
  return { title: service.title, description: service.summary };
}

function Eyebrow({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] ${light ? "text-white/50" : "text-neutral-500"}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
      {children}
    </p>
  );
}

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default async function ServicePage(props: PageProps<"/leistungen/[slug]">) {
  const { slug } = await props.params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      {/* Kopf */}
      <section className="bg-white pt-32 md:pt-40">
        <div className="mx-auto max-w-6xl px-5">
          <div className="animate-fade-up flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <nav aria-label="Brotkrumen" className="text-sm text-neutral-500">
              <Link href="/" className="hover:text-neutral-950">Start</Link>
              <span className="mx-2">/</span>
              <Link href="/#leistungen" className="hover:text-neutral-950">Leistungen</Link>
              <span className="mx-2">/</span>
              <span className="text-neutral-950">{service.title}</span>
            </nav>

            <div className="flex flex-wrap gap-2 md:flex-nowrap" role="navigation" aria-label="Leistungen">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/leistungen/${s.slug}`}
                  aria-current={s.slug === service.slug ? "page" : undefined}
                  className={`whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                    s.slug === service.slug
                      ? "border-neutral-950 bg-neutral-950 text-white"
                      : "border-black/10 text-neutral-700 hover:border-black/40"
                  }`}
                >
                  {s.title}
                </Link>
              ))}
            </div>
          </div>

          <h1 className="animate-fade-up mt-10 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-neutral-950 [animation-delay:100ms] sm:text-6xl md:text-7xl">
            {service.title}
            <span className="mt-2 block text-neutral-400">{service.claim}</span>
          </h1>

          <div className="animate-fade-up relative mt-12 h-[45vh] min-h-72 overflow-hidden rounded-[2rem] bg-neutral-200 [animation-delay:300ms]">
            <Image
              src={service.image}
              alt={service.imageAlt}
              fill
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-cover"
              preload
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <ul className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
              {service.tags.map((t) => (
                <li key={t} className="rounded-full bg-white/85 px-4 py-2 text-sm text-neutral-900 backdrop-blur">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Einleitung + Honorar */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[3fr_2fr] md:gap-16">
          <Reveal>
            <Eyebrow>Überblick</Eyebrow>
            <div className="mt-6 space-y-5 text-xl leading-relaxed text-neutral-700">
              {service.intro.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            {service.cta && (
              <a
                href={site.immoscoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-4 rounded-full bg-neutral-950 py-2.5 pl-7 pr-2.5 font-medium text-white transition hover:bg-neutral-800"
              >
                {service.cta}
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-neutral-950 transition duration-500 group-hover:rotate-45">
                  <Arrow />
                </span>
              </a>
            )}
          </Reveal>

          {service.fee ? (
            <Reveal delay={150} className="self-start rounded-3xl bg-neutral-950 p-8 text-white md:sticky md:top-28">
              <Eyebrow light>{service.fee.title}</Eyebrow>
              <p className="mt-6 text-4xl font-semibold tracking-[-0.03em]">{service.fee.highlight}</p>
              <p className="mt-5 leading-relaxed text-white/65">{service.fee.text}</p>
            </Reveal>
          ) : (
            <Reveal delay={150} className="self-start rounded-3xl bg-neutral-100 p-8 md:sticky md:top-28">
              <Eyebrow>Ihr Vorteil</Eyebrow>
              <p className="mt-6 text-2xl font-semibold tracking-tight text-neutral-950">
                Erreichbar, schnell und transparent.
              </p>
              <p className="mt-4 leading-relaxed text-neutral-600">
                Eng abgestimmt mit Eigentümern und Beirat – für Häuser, in denen
                man sich wohlfühlt.
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* Ablauf */}
      {service.steps && (
        <section className="bg-neutral-50 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[1fr_2fr]">
            <Reveal className="md:sticky md:top-32 md:self-start">
              <Eyebrow>Ablauf</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-neutral-950 md:text-5xl">
                Schritt für <span className="text-neutral-400">Schritt.</span>
              </h2>
              <p className="mt-5 max-w-xs text-neutral-600">
                So begleiten wir Sie von den ersten Unterlagen bis zur Übergabe.
              </p>
            </Reveal>

            <ol className="relative border-l border-black/10">
              {service.steps.map((step) => (
                <Reveal as="li" key={step.title} className="relative pb-14 pl-10 last:pb-0">
                  <span aria-hidden="true" className="absolute -left-[6px] top-3 h-3 w-3 rounded-full bg-neutral-950 ring-4 ring-neutral-50" />
                  <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">{step.title}</h3>
                  <div className="mt-4 space-y-4 leading-relaxed text-neutral-600">
                    {step.text.map((t) => (
                      <p key={t.slice(0, 24)}>{t}</p>
                    ))}
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>
      )}

      {/* Leistungsbereiche (Verwaltung) */}
      {service.groups && (
        <section className="bg-neutral-50 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <Reveal>
              <Eyebrow>Leistungsumfang</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-neutral-950 md:text-5xl">
                Was wir für Sie <span className="text-neutral-400">übernehmen.</span>
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {service.groups.map((g, i) => (
                <Reveal key={g.title} delay={(i % 2) * 120} className="rounded-3xl bg-white p-8 ring-1 ring-black/5 md:p-10">
                  <h3 className="text-2xl font-semibold tracking-tight text-neutral-950">{g.title}</h3>
                  <p className="mt-3 leading-relaxed text-neutral-600">{g.intro}</p>
                  <ul className="mt-6 space-y-3 border-t border-black/5 pt-6">
                    {g.items.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-neutral-700">
                        <svg className="mt-0.5 shrink-0 text-brand-500" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Abschluss-CTA */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-neutral-950 p-8 text-white sm:p-12 md:p-16">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl" />
            <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
              <div>
                <Eyebrow light>Persönliche Beratung</Eyebrow>
                <h2 className="mt-5 max-w-xl text-4xl font-semibold tracking-[-0.03em] md:text-5xl">
                  Fragen zur {service.title}?{" "}
                  <span className="text-white/50">Sprechen Sie uns an.</span>
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={site.phoneHref} className="rounded-full bg-white px-6 py-3 font-medium text-neutral-950 transition hover:bg-neutral-200">
                  {site.phone}
                </a>
                <a href={`mailto:${site.email}`} className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:border-white/60">
                  E-Mail schreiben
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
