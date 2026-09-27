"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/site";

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const active = pathname === "/" ? activeSection : null;
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  // Kompaktere Navbar beim Scrollen
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Aktive Sektion ermitteln (nur Startseite)
  useEffect(() => {
    if (pathname !== "/") return;
    const sections = nav
      .map((item) => document.getElementById(item.href.split("#")[1]))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(`/#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    const onTop = () => window.scrollY < 200 && setActiveSection(null);
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, [pathname]);

  // Gleitender Indikator unter dem aktiven Link
  useEffect(() => {
    const indicator = indicatorRef.current;
    if (!indicator) return;
    const el = active ? linkRefs.current[active] : null;
    indicator.style.opacity = el ? "1" : "0";
    if (el) {
      indicator.style.left = `${el.offsetLeft}px`;
      indicator.style.width = `${el.offsetWidth}px`;
    }
  }, [active, scrolled]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
      <div
        className={`mx-auto flex items-center justify-between rounded-full border border-black/5 bg-white/75 pl-5 pr-2 shadow-[0_8px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl transition-all duration-500 ease-out ${
          scrolled ? "h-14 max-w-5xl" : "h-16 max-w-6xl"
        }`}
      >
        <Link href="/" aria-label={`${site.shortName} – Startseite`} onClick={() => setOpen(false)} className="shrink-0">
          <Image
            src="/logo_zschoch.svg"
            alt={site.name}
            width={160}
            height={50}
            className={`w-auto transition-all duration-500 ${scrolled ? "h-8" : "h-10"}`}
            preload
          />
        </Link>

        <nav className="relative hidden items-center md:flex" aria-label="Hauptnavigation">
          <span
            ref={indicatorRef}
            aria-hidden="true"
            className="absolute top-1/2 h-9 -translate-y-1/2 rounded-full bg-neutral-100 transition-all duration-500 ease-out"
            style={{ opacity: 0 }}
          />
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              ref={(el) => {
                linkRefs.current[item.href] = el;
              }}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                active === item.href ? "text-neutral-950" : "text-neutral-500 hover:text-neutral-950"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={site.phoneHref}
            className="group hidden items-center gap-2 rounded-full bg-neutral-950 py-2 pl-2 pr-5 text-sm font-medium text-white transition hover:bg-neutral-800 md:inline-flex"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition group-hover:rotate-12">
              <PhoneIcon />
            </span>
            {site.phone}
          </a>

          <button
            type="button"
            className="relative flex h-11 w-11 items-center justify-center rounded-full bg-neutral-950 text-white md:hidden"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`absolute h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? "rotate-45" : "-translate-y-1.5"}`} />
            <span className={`absolute h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`absolute h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? "-rotate-45" : "translate-y-1.5"}`} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="animate-menu-in mx-auto mt-3 max-w-6xl rounded-3xl border border-white/60 bg-white/95 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.14)] backdrop-blur-xl md:hidden"
          aria-label="Mobile Navigation"
        >
          {nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="animate-fade-up flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg font-medium text-neutral-800 transition hover:bg-neutral-100"
              style={{ animationDelay: `${60 + i * 50}ms`, animationDuration: "0.5s" }}
            >
              {item.label}
              <span className="text-neutral-400">→</span>
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="animate-fade-up mt-2 flex items-center justify-center gap-2 rounded-2xl bg-neutral-950 px-5 py-4 font-medium text-white"
            style={{ animationDelay: "280ms", animationDuration: "0.5s" }}
          >
            <PhoneIcon />
            {site.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
