export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author?: string;
  excerpt?: string;
  content: string; // markdown
  thumb?: any;
  metaTitle?: string;
  metaDescription?: string;
}

const posts: BlogPost[] = [
  {
    slug: 'fassadengeruest-planung-kosten-ablauf',
    title: 'Fassadengerüst richtig planen: So sparen Sie Zeit, Geld und Nerven',
    date: '2025-08-27',
    author: 'TK Gerüste GmbH',
    excerpt: 'Ein gut geplantes Fassadengerüst ist die halbe Miete für jede Sanierung, Dämmung oder Fassadenmalerei. Wir zeigen, welche Infos wir brauchen und welche Kostenfaktoren zählen.',
    content: `## Fassadengerüst richtig planen

Aktualisiert: 27. August 2025 · Lesedauer: ca. 6–8 Min.

### Geeignet für
Einfamilienhaus, Mehrfamilienhaus, Gewerbeobjekte

### Kurzfassung
Ein gut geplantes Fassadengerüst ist die halbe Miete für jede Sanierung, Dämmung oder Fassadenmalerei. In diesem Beitrag zeigen wir, welche Infos wir brauchen, wie die Abläufe bei TK Gerüste aussehen und welche Kostenfaktoren wirklich zählen.

### Warum ein professionelles Fassadengerüst?
Ein stabiles, passgenaues Gerüst sorgt für:
- Schnelle Ausführung der Gewerke (Maler, WDVS, Dachdecker, Fensterbau).
- Hohe Sicherheit für alle am Bau Beteiligten.
- Saubere Baustelle dank Schutzplanen, Staub- und Schmutzschutz.
- Kostensicherheit durch klare Planung und feste Zeitfenster.

### Checkliste für Ihr Angebot
Damit wir zügig kalkulieren können, helfen folgende Angaben:
- Objektart & Maße: Länge der Fassaden, Trauf- und Firsthöhe, Erker/Balkone.
- Zugang & Untergrund: Hofeinfahrt, Garten, Gefälle, Pflaster/Rasen.
- Gewerk & Dauer: Malerarbeiten, Dämmung, Dach; geplante Nutzungszeit.
- Besonderheiten: Wintergarten, Glasflächen, Werbeschilder, öffentliches Straßenland.
- Fotos/Pläne: 3–5 Außenfotos (Ecken, Engstellen, Zufahrt) reichen meist aus.

### Der Ablauf mit TK Gerüste
1. Kontakt & Kurz-Check
2. Vor-Ort-Termin & Beratung
3. Festes Angebot
4. Aufbau zum Wunschtermin
5. Nutzung & Service
6. Abbau & Dokumentation

### Kostenfaktoren
- Fläche & Höhe: Mehr Fassadenfläche/Arbeitshöhe = mehr Material.
- Dauer der Nutzung: Tages-, Wochen- oder Monatsmiete.
- Zugänglichkeit: Kranstellung, enge Zufahrten, Gartenaufbauten.
- Sonderteile: Treppenturm, Konsolen, Schutzdach, Einhausungen.
- Öffentlicher Raum: Sondernutzung/Absperrungen.

### Sicherheit & Nachbarschaft
- Schutznetze/Planen gegen Schmutz und herabfallende Teile
- Kantenschutz an Dach/Attika
- Absturzsicherungen, gesicherte Zugänge

### FAQs
**Wie lange dauert der Aufbau?**
Je nach Objektgröße meist 1–2 Tage.

**Brauche ich eine Genehmigung?**
Nur wenn öffentliche Flächen genutzt werden – das übernehmen wir gerne.

👉 **Jetzt anrufen und Termin vereinbaren**`,
    metaTitle: 'Fassadengerüst planen – TK Gerüste GmbH',
    metaDescription: 'Fassadengerüst smart planen: Kosten, Ablauf & Sicherheit. TK Gerüste unterstützt von Erstberatung bis Abbau.'
    ,
    thumb: '/assets/imgs/project/projektbild8.jpeg'
  },
  {
    slug: 'raumgeruest-innenausbau-treppenhaus',
    title: 'Innen- & Raumgerüste: Effizientes Arbeiten bei Ausbau & Renovierung',
    date: '2025-08-27',
    author: 'TK Gerüste GmbH',
    excerpt: 'Unsere Raum- und Treppengerüste machen Arbeiten schneller, sicherer und sauberer – vom Altbauflur bis zur Industriehalle.',
    content: `## Innen- & Raumgerüste

Aktualisiert: 27. August 2025 · Lesedauer: ca. 5–7 Min.

### Geeignet für
Maler, Trockenbau, Elektro, SHK, Fensterbau, Messebau

### Kurzfassung
Innenarbeiten haben ihre eigenen Tücken: enge Treppenhäuser, hohe Decken, empfindliche Böden. Unsere Raum- und Treppengerüste machen Arbeiten schneller, sicherer und sauberer.

### Was ist ein Raumgerüst?
Ein freistehendes Gerüst im Innenraum, modular aufgebaut, das ohne Wandverankerung auskommt. Es ermöglicht sicheren Stand bei hohen Decken und schnelle Versetzung einzelner Felder.

### Typische Einsatzorte
- Treppenhäuser & Galerien
- Altbau & Denkmal
- Showrooms & Hallen
- Büros & Praxen

### Schutz & Sauberkeit
- Bodenschutz (Vlies, Platten), Kantenschutz an Treppenstufen
- Staubschutzwände und Einhausungen für sensible Bereiche

👉 **Jetzt anrufen und Termin vereinbaren**`,
    metaTitle: 'Raumgerüste & Innenausbau – TK Gerüste GmbH',
    metaDescription: 'Innen- & Raumgerüste für schnelle, saubere Renovierungen. Treppentürme, Fahrgerüste & Staubschutz.'
    ,
    thumb: '/assets/imgs/project/projektbild12.jpeg'
  },
  {
    slug: 'industriegerueste-sonderkonstruktionen',
    title: 'Industriegerüste & Sonderkonstruktionen: Sicher im laufenden Betrieb',
    date: '2025-08-27',
    author: 'TK Gerüste GmbH',
    excerpt: 'Industriegerüste müssen präzise geplant, schnell montiert und maximal sicher sein. TK Gerüste liefert maßgeschneiderte Lösungen.',
    content: `## Industriegerüste & Sonderkonstruktionen

Aktualisiert: 27. August 2025 · Lesedauer: ca. 7–9 Min.

### Kurzfassung
Ob Wartung, Revision oder Umbau – Industriegerüste müssen präzise geplant, schnell montiert und maximal sicher sein. TK Gerüste liefert maßgeschneiderte Lösungen – auch im laufenden Betrieb.

### Herausforderungen
- Enge Zeitfenster (Stillstand = Kosten)
- Komplexe Geometrien (Anlagen, Rohrbrücken, Silos)
- Sicherheits- & Hygienestandards

### Unsere Lösungskompetenzen
- Objektanalyse & Aufmaß
- Sonderkonstruktionen
- Treppen- & Lasttürme
- Einhausungen & Witterungsschutz

👉 **Jetzt anrufen und Termin vereinbaren**`,
    metaTitle: 'Industriegerüste Duisburg – TK Gerüste GmbH',
    metaDescription: 'Industriegerüste & Sonderkonstruktionen im laufenden Betrieb. Sicher, schnell, präzise.'
    ,
    thumb: '/assets/imgs/project/projektbild17.jpeg'
  }
];

export default posts;


