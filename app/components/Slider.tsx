"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export type Slide = {
  src: string;
  alt: string;
  eyebrow: string;
  title: string;
  href: string;
  cta: string;
};

export default function Slider({ slides }: { slides: Slide[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = (i: number) => setIndex((i + slides.length) % slides.length);

  return (
    <div
      className="group/slider relative h-[70vh] min-h-[28rem] overflow-hidden rounded-[2rem] bg-neutral-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="Karussell"
    >
      {slides.map((s, i) => (
        <div
          key={s.src}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ease-out ${i === index ? "opacity-100" : "opacity-0"}`}
          aria-hidden={i !== index}
        >
          <Image
            src={s.src}
            alt={s.alt}
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className={`object-cover transition-transform duration-[8000ms] ease-out motion-reduce:transition-none ${i === index ? "scale-110" : "scale-100"}`}
            preload={i === 0}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
        </div>
      ))}

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-8 p-7 text-white sm:p-10 md:flex-row md:items-end md:justify-between md:p-14">
        <div key={index} className="max-w-2xl">
          <p className="animate-fade-up text-sm text-white/70">{slides[index].eyebrow}</p>
          <p className="animate-fade-up mt-3 text-4xl font-semibold leading-[1.05] tracking-[-0.03em] [animation-delay:120ms] md:text-6xl">
            {slides[index].title}
          </p>
          <Link
            href={slides[index].href}
            className="animate-fade-up group mt-7 inline-flex items-center gap-3 rounded-full bg-white py-2 pl-6 pr-2 font-medium text-neutral-950 [animation-delay:240ms]"
          >
            {slides[index].cta}
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-950 text-white transition duration-500 group-hover:rotate-45">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                onClick={() => go(i)}
                aria-label={`Bild ${i + 1} anzeigen`}
                aria-current={i === index}
                className="relative h-1 w-12 overflow-hidden rounded-full bg-white/30"
              >
                {i === index && (
                  <span
                    key={index}
                    className="animate-progress absolute inset-y-0 left-0 bg-white"
                    style={{ animationPlayState: paused ? "paused" : "running" }}
                    onAnimationEnd={() => go(index + 1)}
                  />
                )}
                {i < index && <span className="absolute inset-0 bg-white" />}
              </button>
            ))}
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Vorheriges Bild"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 backdrop-blur transition hover:bg-white hover:text-neutral-950"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M15 18l-6-6 6-6" /></svg>
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Nächstes Bild"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 backdrop-blur transition hover:bg-white hover:text-neutral-950"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M9 18l6-6-6-6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
