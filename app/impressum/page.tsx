import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-black/10 py-8">
      <h2 className="mb-3 text-lg font-semibold tracking-tight text-neutral-950">{title}</h2>
      <div className="leading-relaxed text-neutral-700">{children}</div>
    </section>
  );
}

export default function Impressum() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-36">
      <h1 className="mb-10 text-5xl font-semibold tracking-[-0.04em] text-neutral-950">Impressum</h1>

      <Block title="Angaben gemäß § 5 DDG">
        <p>
          {site.name}
          <br />
          Inh. {site.owner}
          <br />
          {site.street}
          <br />
          {site.zip} {site.city}
        </p>
        <p className="mt-4">
          Tel: <a href={site.phoneHref} className="text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950">{site.phoneIntl}</a>
          <br />
          Fax: {site.fax}
          <br />
          E-Mail: <a href={`mailto:${site.email}`} className="text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950">{site.email}</a>
          <br />
          Web: <a href={site.web} className="text-neutral-950 underline decoration-neutral-300 underline-offset-4 hover:decoration-neutral-950">www.zschoch-immobilien.de</a>
        </p>
      </Block>

      <Block title="Vertretungsberechtigt">
        <p>{site.owner}</p>
      </Block>

      <Block title="Aufsichtsbehörde und Kammer">
        <p>
          Berufsaufsichtsbehörde: Gewerbeamt Schönefeld, Hans Grade Allee 11, 12529 Schönefeld
          <br />
          Berufskammer: IHK Cottbus
        </p>
      </Block>

      <Block title="Umsatzsteuer-ID">
        <p>Umsatzsteueridentifikationsnummer: DE314822547</p>
      </Block>

      <Block title="Berufshaftpflicht">
        <p>Vermögensschadenhaftpflichtversicherung Nr. 0025469H57</p>
      </Block>

      <Block title="Behördliche Zulassung">
        <p>
          Behördliche Zulassung nach § 34c Gewerbeordnung (GewO) vom 29.03.1994
          durch das Bezirksamt Hellersdorf von Berlin und vom 10.04.2017 durch
          die Gemeinde Schönefeld.
        </p>
      </Block>

      <Block title="Verantwortlich i. S. d. Presserechts">
        <p>
          {site.owner}
          <br />
          {site.street}
          <br />
          {site.zip} {site.city}
        </p>
      </Block>
    </div>
  );
}
