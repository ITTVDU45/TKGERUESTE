interface DataType {
  title_1: string;
  title_2: string;
  desc_1: string;
  desc_2: string;
  desc_3: string;
  desc_4: string;
  list: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export const default_data: DataType = {
  title_1: "Modified Roofing",
  title_2: "Choose Your Services",
  desc_1: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst.",
  desc_2: "lacus sed pretium pretium justo. Integer is vitae venenatis lorem.",
  desc_3: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua.",
  desc_4: "lacus sed pretium pretium justo. Integer vitae venenatis lorem.",
  list: ["Roof Renovation", "Roof Installation", "Modified Roofing", "Roof Repair", "Fixing Roofing", "Roof Animation"]
};

export const servicesDetailMap: Record<string, DataType> = {
  "arbeits-schutzgerueste": {
    title_1: "Arbeits- & Schutzgerüste – sichere Lösungen für jedes Bauprojekt",
    title_2: "Arbeits- und Schutzgerüste sind die Basis für Sicherheit und Effizienz",
    desc_1: "Arbeits- und Schutzgerüste sind die Basis für Sicherheit und Effizienz auf jeder Baustelle. Sie schaffen nicht nur stabile Arbeitsflächen für Handwerker, sondern sorgen auch für den Schutz des Umfeldes vor herabfallenden Materialien oder Werkzeugen. Die TK Gerüste GmbH mit Sitz in Duisburg ist Ihr kompetenter Partner, wenn es um den fachgerechten Aufbau, die Planung und die Bereitstellung moderner Gerüstsysteme geht.",
    desc_2: "Höchste Sicherheit für Bauherren und Handwerker\n\nBei Bau-, Montage- oder Sanierungsarbeiten sind zuverlässige Gerüstsysteme unverzichtbar. Unsere Arbeitsgerüste ermöglichen Handwerkern ein sicheres und ergonomisches Arbeiten in jeder Höhe. Gleichzeitig gewährleisten unsere Schutzgerüste, dass Passanten, Gebäudeumfelder und angrenzende Flächen optimal abgesichert werden. Alle von uns eingesetzten Systeme entsprechen den aktuellen Sicherheitsnormen (DIN EN 12811) und werden regelmäßig geprüft. So können Sie sich darauf verlassen, dass Ihre Projekte stets den höchsten Standards in puncto Arbeitsschutz entsprechen.",
    desc_3: "Flexibel einsetzbar für jedes Bauvorhaben\n\nOb Einfamilienhaus, Mehrparteiengebäude oder Großbaustelle – wir bieten für jede Anforderung das passende Gerüstsystem. Unsere Lösungen sind flexibel kombinierbar und können individuell an die Gegebenheiten vor Ort angepasst werden. So stellen wir sicher, dass Ihr Bauprojekt ohne Verzögerungen umgesetzt werden kann. Besonders bei Sanierungen in bewohnten Gebäuden ist ein effizienter Aufbau entscheidend. Wir arbeiten schnell, präzise und mit minimaler Beeinträchtigung für Anwohner oder Nutzer der Immobilie.",
    desc_4: "Warum TK Gerüste GmbH?\n\nSeit 2022 steht die TK Gerüste GmbH in Duisburg für Qualität, Zuverlässigkeit und maßgeschneiderte Lösungen im Gerüstbau. Mit unserem erfahrenen Team und modernstem Material bieten wir Ihnen Arbeits- und Schutzgerüste, die nicht nur höchste Sicherheitsstandards erfüllen, sondern auch Ihre Bauabläufe effizient unterstützen.\n\n👉 Fazit: Mit unseren Arbeits- und Schutzgerüsten schaffen Sie die perfekte Grundlage für ein sicheres und reibungsloses Bauvorhaben. Vertrauen Sie auf die TK Gerüste GmbH – Ihr Partner für professionellen Gerüstbau in Duisburg und ganz NRW.",
    list: [
      "Sichere Plattformen für Montage, Renovierung und Neubau",
      "Schutz von Passanten, Gebäuden und Baustellenumfeldern",
      "Flexible Anpassung an jede Gebäudeform",
      "Aufbau durch geschulte und erfahrene Fachkräfte",
      "Regelmäßig geprüfte Systeme nach DIN EN 12811",
      "Termintreue und transparente Kostenplanung"
    ]
  },
  "fassadengerueste": {
    title_1: "Fassadengerüste – stabile Lösungen für sichere Arbeiten an Gebäudefassaden",
    title_2: "Fassadengerüste sind unverzichtbar für Sanierungen, Neubauten und Modernisierungen",
    desc_1: "Fassadengerüste sind unverzichtbar für Sanierungen, Neubauten und Modernisierungen. Sie bieten die notwendige Sicherheit und Stabilität für Handwerker, die an Fassaden arbeiten, und schaffen eine effiziente Grundlage für Maler-, Putz-, Dämm- oder Reparaturarbeiten. Die TK Gerüste GmbH aus Duisburg ist Ihr kompetenter Partner für die Planung, Lieferung und Montage hochwertiger Fassadengerüste – zuverlässig, flexibel und nach höchsten Sicherheitsstandards.",
    desc_2: "Vielseitige Einsatzmöglichkeiten\n\nUnsere Fassadengerüste lassen sich an jede Gebäudestruktur individuell anpassen – vom kleinen Einfamilienhaus bis hin zu großflächigen Wohnanlagen, Bürogebäuden oder Industrieobjekten. Durch modulare Bauweise und modernste Systeme können wir auch komplizierte architektonische Gegebenheiten sicher einrüsten. Egal ob es um Wärmedämmung, Fassadenanstriche, Sanierungen oder Neubauten geht – unsere Gerüste ermöglichen ein sicheres und ergonomisches Arbeiten in allen Höhenlagen.",
    desc_3: "Effizienz durch schnelle Montage\n\nZeit ist auf Baustellen ein entscheidender Faktor. Unsere erfahrenen Monteure stellen sicher, dass Fassadengerüste schnell und präzise aufgebaut werden. So vermeiden Sie Verzögerungen im Bauablauf und profitieren von einem zuverlässigen Zeitmanagement. Dank professioneller Planung und Logistik wird Ihr Projekt reibungslos umgesetzt.",
    desc_4: "Sicherheit an erster Stelle\n\nAlle eingesetzten Systeme entsprechen den gesetzlichen Normen (DIN EN 12811) und werden regelmäßig geprüft. Sicherheit für Handwerker, Bauherren und Passanten hat für uns oberste Priorität. Mit stabilen Konstruktionen und fachgerechter Montage gewährleisten wir, dass alle Arbeiten an Ihrer Fassade unter optimalen Bedingungen durchgeführt werden können.\n\nWarum TK Gerüste?\nSeit 2022 ist die TK Gerüste GmbH in Duisburg Ihr professioneller Ansprechpartner für Fassadengerüste in NRW. Mit unserem qualifizierten Team und modernem Material sorgen wir dafür, dass Ihr Projekt sicher, effizient und nach Ihren individuellen Anforderungen umgesetzt wird.",
    list: [
      "Flexible Anpassung an jede Gebäudestruktur",
      "Schneller Aufbau durch erfahrenes Fachpersonal",
      "Höchste Sicherheitsstandards nach DIN EN 12811",
      "Einsatz für Maler-, Putz- und Sanierungsarbeiten",
      "Individuelle Beratung & Planung",
      "Zuverlässigkeit & Termintreue"
    ]
  },
  "dachfanggerueste": {
    title_1: "Dachfanggerüste – maximale Sicherheit für Arbeiten am Dach",
    title_2: "Dachfanggerüste sind ein unverzichtbarer Bestandteil jeder Baustelle",
    desc_1: "Dachfanggerüste sind ein unverzichtbarer Bestandteil jeder Baustelle, wenn es um Arbeiten auf Dächern oder in großer Höhe geht. Sie dienen als zuverlässige Auffanglösung und schützen Baupersonal effektiv vor Absturzgefahren. Gerade bei Neubauten, Sanierungen oder Arbeiten an steilen Dachflächen sind Dachfangsysteme ein zentrales Element, um Sicherheit und Arbeitsschutz zu gewährleisten.",
    desc_2: "Sicherheit, die Vertrauen schafft\n\nDie TK Gerüste GmbH aus Duisburg hat sich auf die Planung und Montage moderner Dachfanggerüste spezialisiert. Jedes System wird individuell an die baulichen Gegebenheiten angepasst und erfüllt die gesetzlichen Sicherheitsanforderungen (DIN EN 12811 sowie DGUV‑Vorschriften). Damit stellen wir sicher, dass Ihre Mitarbeiter jederzeit in einem geschützten Arbeitsumfeld tätig sein können. Ein Dachfanggerüst verhindert nicht nur Abstürze von Personen, sondern reduziert auch das Risiko, dass Baumaterialien oder Werkzeuge unkontrolliert herabfallen. So schützen Sie gleichermaßen Ihr Baupersonal, Passanten und das direkte Bauumfeld.",
    desc_3: "Flexible Einsatzmöglichkeiten\n\nUnsere Dachfanggerüste lassen sich sowohl bei privaten Wohnhäusern als auch bei großen Bauprojekten in Industrie und Gewerbe einsetzen. Durch modulare Bauweise und präzise Planung sind wir in der Lage, auf jede Dachform, Höhe und Umgebung flexibel zu reagieren. Egal, ob es um eine einfache Absicherung während einer Dachreparatur geht oder um den umfassenden Schutz bei einer komplexen Dachsanierung – wir stellen sicher, dass Ihr Projekt unter optimalen Sicherheitsbedingungen abläuft.",
    desc_4: "Effizienz durch Erfahrung\n\nUnsere geschulten Monteure sorgen für einen zügigen Aufbau und Abbau, damit Ihre Bauabläufe nicht ins Stocken geraten. Mit klarer Struktur, präziser Planung und modernster Technik bieten wir Ihnen effiziente Lösungen, die sowohl Zeit als auch Kosten sparen.\n\nWarum Dachfanggerüste von TK Gerüste?\nSeit 2022 ist die TK Gerüste GmbH in Duisburg Ihr professioneller Partner für sicheres Arbeiten auf Dächern. Mit unserer Expertise, modernem Material und einem klaren Fokus auf Arbeitssicherheit tragen wir aktiv dazu bei, Unfälle zu vermeiden und Bauprojekte reibungslos durchzuführen.",
    list: [
      "Maximale Sicherheit für Arbeiten auf steilen und flachen Dächern",
      "Schutz von Personal und Baumaterialien vor Abstürzen",
      "Einhaltung aller Normen & Vorschriften (DIN EN 12811, DGUV)",
      "Flexible Anpassung an Dachform, Höhe und Bauprojekt",
      "Effizienter Aufbau & Abbau durch geschulte Fachkräfte",
      "Transparente Angebote & Planungssicherheit"
    ]
  },
  "raumgerueste": {
    title_1: "Raumgerüste – flexible Lösungen für sichere Arbeiten im Innenbereich",
    title_2: "Raumgerüste sind die ideale Lösung für Bau- und Sanierungsarbeiten in Innenräumen",
    desc_1: "Raumgerüste sind die ideale Lösung für Bau- und Sanierungsarbeiten in Innenräumen. Ob in Industriehallen, Kirchen, Veranstaltungsräumen oder denkmalgeschützten Gebäuden – mit einem Raumgerüst schaffen wir sichere Arbeitsplattformen auch an schwer zugänglichen Stellen. Durch die modulare Bauweise lassen sich unsere Systeme flexibel an jede Raumhöhe und Grundriss-Situation anpassen.",
    desc_2: "Präzision in jeder Umgebung\n\nGerade bei Projekten in großen Hallen oder hohen Innenräumen ist ein sicherer Zugang zu Decken, Wänden oder Installationen entscheidend. Unsere Raumgerüste ermöglichen Handwerkern, Elektrikern, Malern oder Restauratoren präzises Arbeiten auf stabilen Ebenen – und das unabhängig von Raumhöhe oder Architektur. Auch bei komplexen Grundrissen, engen Platzverhältnissen oder besonders empfindlichen Bauwerken (z. B. historischen Kirchen oder Theatern) entwickeln wir individuelle Lösungen, die alle Anforderungen an Sicherheit, Funktionalität und Denkmalschutz erfüllen.",
    desc_3: "Effizient & sicher\n\nUnsere Fachkräfte sorgen für einen schnellen und fachgerechten Aufbau. Die Gerüste werden so geplant, dass Arbeitsabläufe nicht behindert, sondern unterstützt werden. Damit sparen Sie wertvolle Zeit und reduzieren Kosten. Sicherheit steht dabei immer an oberster Stelle: Alle Systeme entsprechen den geltenden Vorschriften (DIN EN 12811) und werden regelmäßig geprüft.",
    desc_4: "Warum TK Gerüste GmbH?\n\nSeit 2022 steht die TK Gerüste GmbH für Qualität, Sicherheit und Zuverlässigkeit im Gerüstbau. Mit unserem Sitz in Duisburg betreuen wir Kunden in ganz NRW und darüber hinaus. Unsere Raumgerüste ermöglichen ein sicheres und effizientes Arbeiten in Innenbereichen – von der Planung bis zum Abbau professionell umgesetzt.\n\n👉 Fazit: Mit den Raumgerüsten der TK Gerüste GmbH schaffen Sie die ideale Grundlage für Sanierungen, Restaurierungen oder Installationen in Innenräumen. Vertrauen Sie auf unsere Expertise für sichere und flexible Lösungen.",
    list: [
      "Individuell anpassbar an jede Raumhöhe und Architektur",
      "Sicheres Arbeiten in großen Hallen, Kirchen und Industrieanlagen",
      "Effiziente Montage & Demontage durch erfahrene Monteure",
      "Stabile Plattformen für Arbeiten an Decken, Wänden oder Installationen",
      "Besonders geeignet für Sanierungen, Restaurierungen und Wartungen",
      "Einhaltung höchster Sicherheitsstandards nach DIN EN 12811"
    ]
  },
  "industriegerueste": {
    title_1: "Industriegerüste – belastbare Lösungen für anspruchsvolle Industrieprojekte",
    title_2: "Unsere Industriegerüste sind für anspruchsvolle Bau- und Wartungsprojekte konzipiert",
    desc_1: "Unsere Industriegerüste sind für anspruchsvolle Bau- und Wartungsprojekte in der Industrie konzipiert. Sie sind besonders belastbar, flexibel planbar und für großflächige Anlagen geeignet – von Produktionsstätten bis zu Kraftwerken.",
    desc_2: "Mit robusten Materialien und einer präzisen Planung stellen wir sicher, dass auch komplexe Projekte zuverlässig umgesetzt werden. Unsere Industriegerüste bieten die notwendige Stabilität für höchste Anforderungen und tragen zu sicheren und effizienten Abläufen bei.",
    desc_3: "",
    desc_4: "",
    list: [
      "Industriegerüste",
      "Fassadengerüste",
      "Arbeits- & Schutzgerüste",
      "Raumgerüste",
      "Dachfanggerüste",
      "Beratung & Planung"
    ]
    ,
    metaTitle: "Industriegerüste Duisburg | TK Gerüste GmbH",
    metaDescription: "Industriegerüste für anspruchsvolle Industrieprojekte: belastbar, flexibel und sicher. TK Gerüste GmbH – Ihr Partner in Duisburg und NRW."
  },
  "beratung-planung": {
    title_1: "Beratung & Planung – Ihr Fundament für erfolgreiches Gerüstbau-Projekt",
    title_2: "Jedes erfolgreiche Bauprojekt beginnt mit einer professionellen Beratung und präziser Planung",
    desc_1: "Jedes erfolgreiche Bauprojekt beginnt mit einer professionellen Beratung und einer präzisen Planung. Die TK Gerüste GmbH aus Duisburg begleitet Sie von der ersten Idee bis zur Umsetzung mit einem maßgeschneiderten Gerüstkonzept. Wir berücksichtigen sämtliche Gegebenheiten vor Ort, analysieren die Anforderungen und entwickeln eine Lösung, die perfekt auf Ihr Projekt zugeschnitten ist.",
    desc_2: "Analyse & individuelle Konzepte\n\nKein Bauvorhaben gleicht dem anderen – deshalb legen wir großen Wert auf eine individuelle Bedarfsermittlung. Bei einer gemeinsamen Besichtigung verschaffen wir uns ein genaues Bild der baulichen Situation. Auf Basis dieser Analyse erstellen wir ein transparentes Angebot, das sowohl die technischen Anforderungen als auch Ihr Budget berücksichtigt.",
    desc_3: "Effizienz & Sicherheit im Fokus\n\nEine durchdachte Planung ist der Schlüssel zu einem reibungslosen Bauablauf. Mit unserer Expertise sorgen wir dafür, dass das geplante Gerüst effizient, sicher und kostenbewusst umgesetzt wird. Dabei stehen die Einhaltung gesetzlicher Vorschriften, höchste Sicherheitsstandards (DIN EN 12811) und die Optimierung von Arbeitsabläufen im Vordergrund.",
    desc_4: "Warum Beratung & Planung bei TK Gerüste?\n\nSeit 2022 steht die TK Gerüste GmbH für Zuverlässigkeit, Qualität und maßgeschneiderte Lösungen im Gerüstbau. Mit unserer Beratungs- und Planungsleistung legen wir das Fundament für einen erfolgreichen Projektverlauf. Ob Neubau, Sanierung oder Industrieprojekt – wir entwickeln für Sie die passende Gerüstlösung.\n\n👉 Fazit: Mit unserer professionellen Beratung und detaillierten Planung schaffen wir die Basis für Sicherheit, Effizienz und Termintreue.",
    list: [
      "Individuelle Beratung vor Projektstart",
      "Detaillierte Objektanalyse direkt vor Ort",
      "Maßgeschneiderte Konzepte für jedes Bauvorhaben",
      "Transparente Angebote ohne versteckte Kosten",
      "Optimierte Planung für Sicherheit und Effizienz",
      "Persönliche Betreuung durch erfahrene Fachleute"
    ],
    metaTitle: "Beratung & Planung Gerüstbau | TK Gerüste GmbH",
    metaDescription: "Professionelle Beratung und Planung für Gerüstbauprojekte: individuelle Analyse, maßgeschneiderte Konzepte und effiziente Umsetzung. TK Gerüste GmbH, Duisburg."
  }
};

export default servicesDetailMap;


