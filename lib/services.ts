export type Step = {
  title: string;
  text: string[];
};

export type Group = {
  title: string;
  intro: string;
  items: string[];
};

export type Service = {
  slug: "vermietung" | "verkauf" | "verwaltung";
  title: string;
  claim: string;
  summary: string;
  intro: string[];
  image: string;
  imageAlt: string;
  tags: string[];
  cta?: string;
  fee?: { title: string; text: string; highlight: string };
  steps?: Step[];
  groups?: Group[];
};

const energieausweis = (context: string) =>
  `${context} muss ein Energieausweis unaufgefordert vorgelegt werden, da sonst Geldbußen drohen. Weiterhin müssen die Angaben aus dem Energieausweis bei der Schaltung eines Online-Inserates mit angegeben werden. Sollte Ihnen kein Energieausweis vorliegen, unterstützen wir Sie gern bei der Einholung eines solchen Dokuments. Für die Erstellung durch einen externen Dienstleister fallen zusätzliche Kosten in Höhe von ungefähr 150,00 Euro an.`;

const marketing =
  "Zu Zeiten des Internets bieten Zeitungsannoncen nicht mehr den gewünschten Effekt. Die Kosten für eine Annonce in einem der Printmedien stehen in keinem Verhältnis zur immer weiter rückläufigen Anzahl der sich meldenden Interessenten. Aus diesem Grund konzentrieren wir uns bei der Vermarktung auf die Insertion auf den gängigen Immobilienportalen. Eine aussagekräftige Überschrift, ansprechende Bilder und Grundrisse und eine realistische Beschreibung der Immobilie und der Gegebenheiten sind ausschlaggebend.";

export const services: Service[] = [
  {
    slug: "vermietung",
    title: "Vermietung",
    claim: "Der richtige Mieter für Ihre Immobilie.",
    summary:
      "Marktgerechte Miete, ein langjähriges Mietverhältnis und ein unkomplizierter, ordentlicher Mieter – wir unterstützen Sie dabei zielstrebig und kompetent.",
    intro: [
      "Als Vermieter wünscht man sich eine marktgerechte Miete, ein langjähriges Mietverhältnis und einen unkomplizierten und ordentlichen Mieter. Wir unterstützen Sie hierbei zielstrebig und kompetent.",
      "Aufgrund der neuen Gesetzeslage (Bestellerprinzip) obliegt die Honorierung dieser Dienstleistung dem Auftraggeber – somit i. d. R. dem Vermieter der Wohnung. Wir möchten Sie hier über den Ablauf und unsere Serviceleistungen informieren.",
    ],
    image: "/manssonmikaela-building-5431430.jpg",
    imageAlt: "Modernes Wohngebäude mit Balkonen und Grünanlage",
    tags: ["Marketing", "Bonitätsprüfung", "Mietvertrag", "Übergabe"],
    cta: "Zu unseren aktuellen Mietobjekten",
    fee: {
      title: "Honorar",
      highlight: "2,38 Monatsmieten",
      text: "Unseren Rund-um-Service honorieren Sie als Vermieter bei Abschluss eines Mietvertrages mit einer Provision in Höhe von 2,38 Monatsmieten (2 Nettokaltmieten zzgl. 19 % MwSt.).",
    },
    steps: [
      {
        title: "Erforderliche Dokumente",
        text: [
          "Für die Vermietung Ihrer Immobilie benötigen wir einige Unterlagen. Hierzu zählt neben der genauen Angabe der Wohnfläche der Grundriss, die Information über die aktuelle Höhe der Nebenkosten bzw. die letzte Betriebskostenabrechnung, der vormals geschlossene Mietvertrag und der Energieausweis. In der Regel sollte Ihre Hausverwaltung alle erforderlichen Dokumente zur Verfügung stellen.",
        ],
      },
      {
        title: "Energieausweis",
        text: [energieausweis("Bei der Besichtigung mit Mietinteressenten")],
      },
      { title: "Marketing", text: [marketing] },
      {
        title: "Bonitätsprüfung",
        text: [
          "Nach erfolgter Besichtigung der Wohnung erhält der Interessent einen Fragebogen, auf dem er seine Angaben zu seiner Person und Situation macht. Unter Berücksichtigung der Datenschutzverordnung erfragen wir hier die persönlichen Daten und lassen diese durch folgende Unterlagen zusätzlich belegen: Gehaltsnachweise, Schufa-Auskunft und die Mietschuldenfreiheitsbestätigung des vorherigen Vermieters. Aus datenschutzrechtlichen Gründen ist das Vervielfältigen von Ausweisdokumenten wie Reisepass oder Personalausweis untersagt, lediglich darf um die Vorlage dieser Dokumente gebeten werden.",
          "Die Frage nach „Raucher oder Nichtraucher“ unterliegt dem Datenschutz und darf somit nicht abgefragt werden. Hierbei handelt es sich um eine freiwillige Auskunft, die wir bei der Mieterauswahl natürlich berücksichtigen.",
        ],
      },
      {
        title: "Vorauswahl",
        text: [
          "Nach eingehender Prüfung der Unterlagen und der Vorauswahl der in Frage kommenden Interessenten leiten wir Ihnen die vollständig zusammengetragenen Dokumente zusammen mit einer Handlungsempfehlung an Sie weiter. Wenn Sie es wünschen, arrangieren wir auch gern ein persönliches Kennenlernen mit Ihrem „Favoriten“. Ihnen obliegt die abschließende Entscheidung, ob wir mit dem Interessenten einen Mietvertrag abschließen oder die Suche fortsetzen sollen.",
        ],
      },
      {
        title: "Mietvertrag",
        text: [
          "Wir erstellen einen Mietvertrag, der regelmäßig auf die aktuelle Rechtsprechung überprüft wird. Noch vor Weiterleitung an den Mieter erhalten Sie als Vermieter den Vertrag und geben uns diesen nach Ihrer Prüfung und Zustimmung frei. Wir holen die erforderliche Unterschrift des Mieters ein und tragen dafür Sorge, dass etwaige Unterlagen wie Hausordnung, Lüftungs- und Reinigungshinweise ebenfalls anhängig sind. Im Anschluss erhalten Sie den Vertrag zur Gegenzeichnung.",
          "Wir empfehlen, dass die Mietkaution mittels eines Sparbuches mit Verpfändungserklärung vom Mieter erbracht wird. Wünschen Sie die Zahlung auf Ihr eigenes Konto, weisen wir darauf hin, dass Sie das Geld unverzüglich insolvenzsicher – also getrennt von Ihrem eigenen Vermögen – auf einem treuhänderischen Konto anlegen müssen. Die Zinsen stehen dem Mieter zu.",
        ],
      },
      {
        title: "Übergabe",
        text: [
          "Erst wenn der Mieter die vereinbarte Kaution erbracht hat, führen wir die Übergabe der Mietfläche durch. Neben den Zählerständen für Wasser, Strom und Heizung wird auch der momentane Zustand der Fläche sowie etwaige vorhandene Mängel in einem Protokoll festgehalten. Ebenso wird die Anzahl der übergebenen Schlüssel protokolliert.",
          "Bitte beachten Sie, dass es nicht zulässig ist, dass Sie als Vermieter einen Wohnungstürschlüssel behalten. Alle vorliegenden Schlüssel müssen dem Mieter ausgehändigt werden.",
        ],
      },
    ],
  },
  {
    slug: "verkauf",
    title: "Verkauf",
    claim: "Ihr Verkauf in erfahrenen Händen.",
    summary:
      "Ein Immobilienverkauf ist eine Herzensangelegenheit. Wir beraten Sie mit Fachkenntnis, prüfen Interessenten vor und verhandeln professionell in Ihrem Sinne.",
    intro: [
      "Eine Immobilie zu verkaufen ist für viele eine Herzensangelegenheit. Es gibt viele Beweggründe und in den seltensten Fällen sind diese positiv. Gerade in diesen schwierigen Zeiten und bei einer so tiefgreifenden Entscheidung benötigen Sie einen kompetenten und professionellen Makler an Ihrer Seite – jemanden, der Sie mit der richtigen Fachkenntnis berät und Sie vor dubiosen Angeboten aus der Umgebung oder sogar der direkten Nachbarschaft schützt.",
      "Eine Besichtigung Ihrer Immobilie gewährt immer einen Einblick in Ihre Privatsphäre. Aus diesem Grund sollte diese nur mit vorgeprüften und seriösen Interessenten erfolgen. Die richtige Vorbereitung und Vorauswahl und die spätere professionelle Verhandlung haben oberste Priorität und wahren Ihre Interessen. Erfahren Sie hier die ersten Schritte.",
    ],
    image: "/kranich17-berlin-4001319_1920.jpg",
    imageAlt: "Skyline von Berlin mit Fernsehturm",
    tags: ["Wertermittlung", "Besichtigungen", "Verhandlung", "Notartermin"],
    cta: "Zu unseren aktuellen Kauf-Immobilien",
    fee: {
      title: "Honorar",
      highlight: "je 3 % zzgl. MwSt.",
      text: "Seit dem 23.12.2020 gibt es eine neue Regelung zur Maklerprovision. Diese ist sowohl mit dem Verkäufer als auch mit dem Käufer zu vereinbaren; für beide Parteien gilt die gleiche Höhe. Verkäufer: 3 % zzgl. gesetzlich geltender Mehrwertsteuer. Käufer: 3 % zzgl. gesetzlich geltender Mehrwertsteuer.",
    },
    steps: [
      {
        title: "Erforderliche Dokumente",
        text: [
          "Für die Wertermittlung und den Verkauf Ihrer Immobilie benötigen wir einige Unterlagen. Die wichtigsten Dokumente wie der Grundbuchauszug, der Lageplan, die Flurkarte, sämtliche Grund- und Aufrisse, die Wohngebäudeversicherung und eine Wohnflächenberechnung befinden sich meist zusammengefasst in Ihrer Hausakte. Sollten einige der Dokumente fehlen, unterstützen wir Sie gern bei der Einholung und erledigen die erforderlichen Behördengänge für Sie.",
        ],
      },
      {
        title: "Energieausweis",
        text: [energieausweis("Im Zuge der Verkaufsaktivität")],
      },
      { title: "Marketing", text: [marketing] },
      {
        title: "Besichtigungen",
        text: [
          "Wir lassen Sie mit den Interessenten nicht allein! Nach der Vorselektion und Terminabstimmung mit Ihnen begleiten wir die Interessenten zu Ihnen und führen sie durch Ihre Immobilie. Wir erläutern Details und nehmen zu eventuell aufkommenden Fragen Stellung. In Abstimmung mit Ihnen können, aber müssen Sie nicht mit dabei sein. Hier berücksichtigen wir gern Ihre individuellen Vorstellungen.",
        ],
      },
      {
        title: "Verhandlung und Abstimmung",
        text: [
          "Wenn es konkret wird, stehen wir Ihnen bei. In dieser Phase bleiben wir eng mit Ihnen abgestimmt, vertreten Ihre Interessen und beraten Sie. In Abstimmung mit Ihnen können Sie bei der Verhandlung anwesend sein, oder wir stimmen die Strategie gemeinsam im Vorfeld ab und informieren den Kaufinteressenten über das Ergebnis. Neben der Verhandlung zum Kaufpreis wird auch der Zeitpunkt der Übergabe der Immobilie abgestimmt.",
        ],
      },
      {
        title: "Kaufvertrag",
        text: [
          "Wir stellen alle für die Kaufvertragserstellung notwendigen Informationen zusammen und lassen die zuvor verhandelten Eckdaten und Bedingungen mit einfließen. Gern schlagen wir Ihnen und dem Kaufinteressenten einen geeigneten Notar vor und lassen nach beiderseitiger Zustimmung einen Kaufvertragsentwurf vorbereiten. Sobald der Entwurf vorliegt, besprechen wir diesen auf Wunsch gern mit Ihnen und dem Kaufinteressenten. Beide Seiten sollen und müssen wissen, was sie bei dem späteren Notartermin unterzeichnen.",
          "Bitte beachten Sie, dass zwischen der Vorlage des Kaufvertragsentwurfes und dem eigentlichen Notartermin eine Frist von 14 Tagen liegen muss. Dies soll sicherstellen, dass beide Seiten hinreichend Zeit hatten, den Vertrag zu lesen, und es zu keinem „Türklinkengeschäft“ kommt. Natürlich begleiten wir Sie und den Kaufinteressenten bei dem Notartermin, um ggf. aufkommende Fragen oder Unklarheiten beseitigen zu können.",
        ],
      },
      {
        title: "Übergabe",
        text: [
          "Erst wenn alle behördlichen Genehmigungen vorliegen und die kaufvertraglichen Regelungen hinsichtlich Kaufpreisbelegung und Nutzen-Lasten-Wechsel erfüllt sind, führen wir die Übergabe der Immobilie durch. Neben den Zählerständen für Wasser, Strom und Heizung werden die Anzahl der übergebenen Schlüssel protokolliert und die Hausakten, welche die Immobilie betreffen, übergeben.",
        ],
      },
    ],
  },
  {
    slug: "verwaltung",
    title: "Verwaltung",
    claim: "Mit Sorgfalt verwaltet.",
    summary:
      "Mit Leidenschaft und Engagement betreuen wir Miet- und WEG-Objekte – kaufmännisch, technisch und immer mit Blick auf das Wohlfühlen im Haus.",
    intro: [
      "Mit viel Leidenschaft und Engagement kümmern wir uns um die Verwaltung unserer Liegenschaften. Unsere Objekte werden mit Sorgfalt betreut. Uns ist es wichtig, die Belange des Eigentümers oder der Gemeinschaft unter Berücksichtigung der Notwendigkeit mit einfließen zu lassen.",
      "Bei Wohnungseigentümeranlagen (WEG-Verwaltung) ist besonders die enge Zusammenarbeit mit dem Beirat unabdingbar. Bei Mietshäusern liegt der Fokus auf der Zufriedenheit der Mieter, was die Erreichbarkeit und Schnelligkeit anbelangt. In jedem Fall ist die allgemeine Zufriedenheit und das „Sich-wohlfühlen“ in Bezug auf den Zustand und die Pflege des Hauses entscheidend.",
    ],
    image: "/manssonmikaela-building-5431430.jpg",
    imageAlt: "Gepflegte Wohnanlage mit Grünfläche",
    tags: ["Miet- & WEG-Verwaltung", "Rechnungswesen", "Technik", "Beirat"],
    groups: [
      {
        title: "Vertragsverwaltung",
        intro:
          "Ein korrekter und vollständiger Datenbestand ist für eine ordnungsgemäße Verwaltung essenziell. Hierzu gehören die Verträge, Unterlagen und Daten des Objektes, der Flächen und der Mieter.",
        items: [
          "Erfassung aller Stammdaten zum Objekt",
          "Erfassung aller Stammdaten zu den Mietern",
          "Sicherstellung vereinbarter Mietsicherheiten",
          "Alle Vertragsabwicklungen mit den Mietern",
          "Eingangskontrolle der Mietzahlungen und Nebenkosten",
          "Organisation des außergerichtlichen Mahnverfahrens mit Erstellung eines Mahnbescheids",
          "Prüfung und Zahlung aller Ausgaben",
          "Überprüfung vereinbarter Mietgleitklauseln",
          "Überprüfung des Mietpreisniveaus",
          "Vorschläge zur Anpassung von Mieterhöhungen",
          "Durchführung der Anpassung des Mietzinses",
          "Nebenkostenvorauszahlungen zeitnah anpassen",
        ],
      },
      {
        title: "Rechnungswesen",
        intro:
          "Durch eine lizenzierte Hausverwaltersoftware werden die Zahlungsvorgänge nachvollziehbar erfasst und transparent abgebildet.",
        items: [
          "Erstellung und Abrechnung aller Ein- und Ausgabenvorgänge",
          "Erstellung einer aktuellen Zahlungsrückstandsliste",
          "Erstellung der Nebenkostenabrechnung und Einziehung evtl. Nachforderungen sowie ggf. Vorschlag zur Anpassung der Vorausleistung",
          "Abwicklung des gesamten Zahlungsverkehrs",
        ],
      },
      {
        title: "Allgemeine Verwaltung",
        intro: "Im Sinne der üblichen Hausverwaltung gehören die folgenden Punkte zum Tagesgeschäft.",
        items: [
          "Abschluss und Kündigung von Mietverträgen, Neuvermietung einschließlich Mietersuche sowie Regelung sämtlicher Angelegenheiten mit den Mietern",
          "Abnahme und Übergabe der vermieteten Einheiten bei Mieterwechsel",
          "Überwachung des Versicherungsschutzes für das Objekt, Regulierung eventueller Schadensfälle; bei erheblichen Prämienunterschieden die Kündigung und den Neuabschluss von Versicherungsverträgen",
          "Vertretung des Auftraggebers im Zusammenhang mit dem Objekt gegenüber allen Behörden",
          "Geltendmachung von Gewährleistungsansprüchen sowie Ausübung von Zurückbehaltungsrechten",
          "Überprüfung aller Betriebs- und Bewirtschaftungskosten und deren Überwachung",
          "Verwaltung von Hausakten und Belegen",
          "Führen einer Beschlusssammlung",
          "Verwaltung von Mietsicherheiten",
        ],
      },
      {
        title: "Technisches Gebäudemanagement",
        intro: "Auch aus technischer Sicht muss die Immobilie vollumfassend betreut werden.",
        items: [
          "Sicherstellung der Funktionsfähigkeit der Heizungs-, Sanitär- und sonstigen Anlagen des Objekts einschließlich des Abschlusses und der Kündigung von Liefer- und Wartungsverträgen",
          "Vergabe der für die laufende Instandhaltung, Instandsetzung und Reparatur des Objekts erforderlichen Arbeiten",
          "Überschreitet die voraussichtliche Auftragssumme den Betrag von 500,00 €, holen wir wenigstens zwei Angebote ein. Soll die Auftragsvergabe nicht an den günstigsten Anbieter erfolgen, ist hierzu das Einverständnis des Auftraggebers erforderlich",
          "Abschluss und Kündigung von Hausmeisterverträgen sowie von Verträgen mit sonstigen Hilfskräften (z. B. für Haus-, Straßen- und Gehwegreinigung, Außenanlagen); Überwachung und Kontrolle ihrer Tätigkeit in Bezug auf das Objekt",
          "Information des Auftraggebers über alle wichtigen und/oder ungewöhnlichen Angelegenheiten im Zusammenhang mit dem Objekt",
        ],
      },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}
