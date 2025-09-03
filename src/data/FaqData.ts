interface DataType {
   id: number;
   page: string
   title: string;
   desc: string;
   showAnswer: boolean;
};

const faq_data: DataType[] = [
  {
    id: 1,
    page: "home_2",
    showAnswer: false,
    title: "Welche Gerüstarten bietet die TK Gerüste GmbH an?",
    desc: "Wir bieten ein breites Spektrum an Gerüsten: Arbeits- und Schutzgerüste, Fassadengerüste, Dachfanggerüste, Raumgerüste, Industriegerüste sowie individuelle Sonderkonstruktionen. Zusätzlich unterstützen wir Sie mit Beratung und Planung für maßgeschneiderte Lösungen.",
  },
  {
    id: 2,
    page: "home_2",
    showAnswer: false,
    title: "Wie lange dauert der Auf- und Abbau eines Gerüstes?",
    desc: "Die Dauer hängt von Größe und Art des Projekts ab. Kleinere Gerüste sind oft innerhalb weniger Stunden aufgebaut, größere Fassaden- oder Industriegerüste benötigen mehrere Tage. Wir planen die Zeiten im Vorfeld transparent mit Ihnen ein.",
  },
  {
    id: 3,
    page: "home_2",
    showAnswer: false,
    title: "Brauche ich eine Genehmigung für ein Gerüst auf öffentlichem Grund (z. B. Gehweg)?",
    desc: "Ja, sobald ein Gerüst öffentlichen Raum wie Gehwege, Straßen oder Parkflächen betrifft, ist eine Genehmigung notwendig. Diese beantragen wir gerne für Sie bei der zuständigen Behörde, sodass Sie sich um nichts kümmern müssen.",
  },
  {
    id: 4,
    page: "home_2",
    showAnswer: false,
    title: "Wie werden die Kosten für ein Gerüst berechnet?",
    desc: "Die Kosten richten sich nach Gerüstart, Größe, Aufbauzeit, Standzeit und besonderen Anforderungen. Wir erstellen Ihnen ein individuelles und transparentes Angebot – ohne versteckte Kosten.",
  },
  {
    id: 5,
    page: "home_2",
    showAnswer: false,
    title: "Welche Sicherheitsstandards erfüllen Ihre Gerüste?",
    desc: "Alle unsere Systeme entsprechen den gesetzlichen Vorgaben (DIN EN 12811, DGUV-Vorschriften). Zudem werden unsere Gerüste regelmäßig geprüft und von geschultem Fachpersonal aufgebaut, um maximale Sicherheit zu garantieren.",
  },
  {
    id: 6,
    page: "home_2",
    showAnswer: false,
    title: "Kann ich ein Gerüst auch für kleine Projekte oder Eigenheim‑Sanierungen mieten?",
    desc: "Ja, selbstverständlich. Ob für private Sanierungen, Malerarbeiten am Einfamilienhaus oder kleine Renovierungsprojekte – wir stellen passende Gerüste in jeder Größe bereit.",
  },
  {
    id: 7,
    page: "home_2",
    showAnswer: false,
    title: "Wie weit ist Ihr Einsatzgebiet? Arbeiten Sie nur in Duisburg oder auch in anderen Regionen?",
    desc: "Unser Hauptsitz ist in Duisburg, aber wir arbeiten in ganz NRW und – je nach Projektgröße – auch deutschlandweit. Fragen Sie uns einfach mit Ihrem Standort an.",
  },
  {
    id: 8,
    page: "home_2",
    showAnswer: false,
    title: "Welche Vorlaufzeit ist für die Planung und Montage eines Gerüstes erforderlich?",
    desc: "Wir empfehlen, uns mindestens 1–2 Wochen vor Projektbeginn zu kontaktieren. Bei dringenden Projekten finden wir in der Regel auch kurzfristige Lösungen.",
  },
  {
    id: 9,
    page: "home_2",
    showAnswer: false,
    title: "Stellen Sie auch Sonderkonstruktionen oder individuelle Gerüstlösungen bereit?",
    desc: "Ja, wir entwickeln maßgeschneiderte Konzepte für besondere Anforderungen, z. B. bei denkmalgeschützten Gebäuden, Industrieanlagen oder komplizierten Bauformen.",
  },
  {
    id: 10,
    page: "home_2",
    showAnswer: false,
    title: "Wer haftet im Schadensfall und wie sind die Gerüste versichert?",
    desc: "Unsere Gerüste sind nach den geltenden Vorschriften aufgebaut und abgesichert. Für Schäden, die durch uns oder unsere Systeme entstehen, bestehen entsprechende Versicherungen. Über besondere Risiken beraten wir Sie transparent im Vorfeld.",
  }
];

export default faq_data;