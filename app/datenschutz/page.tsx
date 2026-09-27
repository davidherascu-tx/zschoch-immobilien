import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutz",
};

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-black/10 py-8">
      <h2 className="mb-3 text-lg font-semibold tracking-tight text-neutral-950">{title}</h2>
      <div className="space-y-3 leading-relaxed text-neutral-700">{children}</div>
    </section>
  );
}

export default function Datenschutz() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-20 pt-36">
      <h1 className="mb-10 text-5xl font-semibold tracking-[-0.04em] text-neutral-950">Datenschutzerklärung</h1>

      <Block title="1. Verantwortliche Stelle">
        <p>
          {site.name}, Inh. {site.owner}, {site.street}, {site.zip} {site.city}
          <br />
          Tel: {site.phoneIntl} · E-Mail: {site.email}
        </p>
      </Block>

      <Block title="2. Hosting und Server-Logfiles">
        <p>
          Beim Aufruf dieser Website werden durch den Hosting-Anbieter
          automatisch Informationen in sogenannten Server-Logfiles gespeichert
          (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite,
          Browsertyp). Diese Daten dienen der Sicherstellung eines
          störungsfreien Betriebs und werden nicht mit anderen Datenquellen
          zusammengeführt. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
        </p>
      </Block>

      <Block title="3. Cookies und Tracking">
        <p>
          Diese Website verwendet keine Cookies zu Analyse- oder Werbezwecken
          und setzt keine Tracking-Tools ein. Schriftarten werden lokal
          ausgeliefert; es findet keine Verbindung zu Servern von Google statt.
        </p>
      </Block>

      <Block title="4. Kontaktaufnahme">
        <p>
          Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre
          Angaben zur Bearbeitung der Anfrage und für mögliche Anschlussfragen
          gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, sofern
          Ihre Anfrage mit einem Vertrag zusammenhängt, andernfalls Art. 6 Abs.
          1 lit. f DSGVO. Die Daten werden gelöscht, sobald sie für den Zweck
          nicht mehr erforderlich sind und keine gesetzlichen
          Aufbewahrungspflichten entgegenstehen.
        </p>
      </Block>

      <Block title="5. Externe Links">
        <p>
          Unsere Immobilienangebote werden auf ImmobilienScout24 veröffentlicht.
          Beim Anklicken des Links verlassen Sie unsere Website; für die
          Datenverarbeitung dort gilt die Datenschutzerklärung der Immobilien
          Scout GmbH. Gleiches gilt für den Link zur Routenplanung bei Google Maps.
        </p>
      </Block>

      <Block title="6. Ihre Rechte">
        <p>
          Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung der Verarbeitung, Datenübertragbarkeit sowie Widerspruch
          gegen die Verarbeitung Ihrer personenbezogenen Daten (Art. 15–21
          DSGVO). Zudem steht Ihnen ein Beschwerderecht bei einer
          Datenschutz-Aufsichtsbehörde zu, z. B. bei der Landesbeauftragten für
          den Datenschutz und für das Recht auf Akteneinsicht Brandenburg.
        </p>
      </Block>
    </div>
  );
}
