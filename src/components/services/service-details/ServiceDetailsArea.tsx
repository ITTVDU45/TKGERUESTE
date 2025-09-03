"use client"
import { useEffect, useState } from "react";
import servicesDetailMapImport from '@/data/ServiceDetailsMap'
import service_thumb1 from "@/assets/imgs/service/service-details-1.jpg"
import service_thumb2 from "@/assets/imgs/service/service-details-2.jpg"
import service_thumb3 from "@/assets/imgs/service/service-details-3.jpg"
import service_thumb4 from "@/assets/imgs/service/service-details-4.jpg"
import Image from "next/image";
import Link from "next/link";
import ServiceDetailsStatic from './ServiceDetailsStatic'
import ServiceSidebar from "./ServiceSidebar";
interface DataType {
   title_1: string;
   title_2: string;
   desc_1: string;
   desc_2: string;
   desc_3: string;
   desc_4: string;
   list: string[];
}

const default_data: DataType = {
   title_1: "Modified Roofing",
   title_2: "Choose Your Services",
   desc_1: "The is ipsum dolor sit amet consectetur adipiscing elit. Fusce is eleifend porta arcu In hac habitasse the platea thelorem turpoi dictumst. In lacus libero faucibus malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.",
   desc_2: "lacus sed pretium pretium justo. Integer is vitae venenatis lorem. Maecenas lacinia turpis the in nunc quam hendrerit scelerisque at finibus enim sagittis. Aliquam erat is volutpat nam nec purus at is orci volutpat semper vel id turpis In a malesuada arcu ac hendrerit.",
   desc_3: "Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.",
   desc_4: "lacus sed pretium pretium justo. Integer vitae venenatis lorem. Maecenas lacinia turpis the in nunc quam hendrerit scelerisque at finibus enim sagittis. Aliquam erat is volutpat nam nec purus at is orci volutpat is semper vel id turpis In a malesuada arcu ac hendrerit metus.",
   list: ["Roof Renovation", "Roof Installation", "Modified Roofing", "Roof Repair", "Fixing Roofing", "Roof Animation"]
}

const _servicesDetailMap_local: Record<string, DataType> = {
   "arbeits--schutzgeruste": {
      title_1: "Arbeits- & Schutzgerüste",
      title_2: "Sichere Arbeitsflächen & Schutz für Ihre Baustelle",
      desc_1: "Unsere Arbeits- und Schutzgerüste bieten maximale Sicherheit und Effizienz. Sie schaffen stabile Plattformen für Montage-, Renovierungs- und Neubauarbeiten und schützen gleichzeitig das Umfeld Ihrer Baustelle.",
      desc_2: "Dank maßgeschneiderter Lösungen und moderner Technik gewährleisten wir reibungslose Abläufe: von der präzisen Planung über die termingerechte Montage bis hin zur fachgerechten Abnahme. Unsere Teams arbeiten nach aktuellen Sicherheitsnormen und sorgen für eine lückenlose Dokumentation.",
      desc_3: "Ob enge Baustellen oder anspruchsvolle Höhen – wir liefern das passende System, inklusive Auffanggitter, Belagsystemen und Geländern. Bei Bedarf koordinieren wir Anlieferung, Materiallogistik und Abstimmungen mit weiteren Gewerken vor Ort.",
      desc_4: "Vertrauen Sie auf unsere Erfahrung: Wir übernehmen Projektplanung, Aufbau, regelmäßige Kontrollen während der Laufzeit und den ordnungsgemäßen Abbau nach Abschluss der Arbeiten.",
      list: ["Sicherheitskonzepte", "Individuelle Konstruktionspläne", "Auf- und Abbau", "Regelmäßige Prüfungen"]
   },
   "fassadengeruste": {
      title_1: "Fassadengerüste",
      title_2: "Die Basis für Renovierung & Sanierung",
      desc_1: "Fassadengerüste sind unverzichtbar für Maler-, Putz- oder Sanierungsarbeiten. Wir stellen präzise angepasste Systeme bereit, die sich jeder Gebäudestruktur anpassen.",
      desc_2: "Unsere Lösungen bieten schnelle Montagezeiten und hohe Stabilität. Wir planen die Gerüstgeometrie so, dass Material- und Personentransport optimiert werden und gleichzeitig die Fassade respektvoll behandelt wird.",
      desc_3: "Für denkmalgeschützte oder besondere Fassaden entwickeln wir spezielle Fixpunkte und Auflagen, damit die Arbeiten sicher und schonend durchgeführt werden können.",
      desc_4: "Zusätzlich bieten wir Wetterschutz, Netzsysteme und Abdeckungen, um Ihre Baustelle vor Witterungseinflüssen zu schützen und die Arbeitseffizienz zu erhöhen.",
      list: ["Fassadenbefestigung", "Wetterschutzlösungen", "Spezialbefestigungen"]
   },
   "dachfanggeruste": {
      title_1: "Dachfanggerüste",
      title_2: "Zuverlässiger Schutz bei Arbeiten am Dach",
      desc_1: "Unsere Dachfanggerüste sorgen für maximale Sicherheit auf Ihrer Baustelle. Sie dienen als zuverlässige Auffanglösung bei Dacharbeiten und verhindern Abstürze.",
      desc_2: "Mit sorgfältiger Planung und der Verwendung zertifizierter Komponenten verringern wir Unfallrisiken deutlich. Jedes System wird auf die Dachform und die statischen Anforderungen abgestimmt.",
      desc_3: "Die Montage erfolgt durch geschulte Teams, die auf effiziente, sichere Installation achten und auf eventuelle Besonderheiten des Daches eingehen.",
      desc_4: "Wir dokumentieren die Sicherheitsmaßnahmen und bieten Prüfintervalle während der Nutzung an – für Ihre Planungssicherheit.",
      list: ["Absturzsicherung", "Anbindungssysteme", "Prüfprotokolle"]
   },
   "raumgeruste": {
      title_1: "Raumgerüste",
      title_2: "Flexibel & sicher in Innenräumen",
      desc_1: "Ob Hallen, Kirchen oder Industrieanlagen – Raumgerüste sind die ideale Lösung für Arbeiten an hohen Decken und schwer zugänglichen Bereichen.",
      desc_2: "Unsere modularen Systeme lassen sich platzsparend aufbauen und sind dabei äußerst stabil. So ermöglichen wir sicheres Arbeiten auch in engen oder empfindlichen Innenräumen.",
      desc_3: "Dank variabler Plattformhöhen und leichtgängiger Komponenten kann das Gerüst optimal an die jeweiligen Anforderungen angepasst werden.",
      desc_4: "Wir achten besonders auf den Schutz bestehender Oberflächen und arbeiten mit Rücksicht auf akustische und räumliche Einschränkungen.",
      list: ["Indoor-Lösungen", "Schonender Aufbau", "Flexible Plattformen"]
   },
   "industriegeruste": {
      title_1: "Industriegerüste",
      title_2: "Robuste Lösungen für anspruchsvolle Projekte",
      desc_1: "Unsere Industriegerüste sind belastbar, flexibel und für großflächige Anlagen geeignet. Sie erfüllen höchste Anforderungen in Produktionsstätten, Kraftwerken und Spezialprojekten.",
      desc_2: "Für industrielle Einsätze planen wir Lastenverteilungen, sichere Verbindungspunkte und routinemäßige Prüfungen, damit auch komplexe Projekte reibungslos laufen.",
      desc_3: "Unsere Systeme sind auf Dauergebrauch ausgelegt und können langfristig mit Servicepaketen betreut werden.",
      desc_4: "Wir unterstützen Sie bei Instandhaltung, Umbau und speziellen Industrieanforderungen mit passgenauen Konzepten.",
      list: ["Lastenplanung", "Dauerlösungen", "Sonderprojekte"]
   },
   "beratung--planung": {
      title_1: "Beratung & Planung",
      title_2: "Individuell. Effizient. Passgenau.",
      desc_1: "Jedes erfolgreiche Projekt beginnt mit einer guten Planung. Wir analysieren die Gegebenheiten vor Ort, beraten Sie persönlich und entwickeln ein individuelles Gerüstkonzept.",
      desc_2: "Unser Leistungsspektrum reicht von der Vor-Ort-Besichtigung über statische Berechnungen bis hin zur Erstellung detaillierter Angebots- und Montagepläne.",
      desc_3: "Wir legen Wert auf transparente Kostenplanung und praktische Umsetzbarkeit – so vermeiden Sie Überraschungen und optimieren den Baustellenablauf.",
      desc_4: "Auf Wunsch begleiten wir Sie durch Genehmigungsverfahren und liefern die notwendigen Unterlagen für die Abnahme.",
      list: ["Vor-Ort-Analyse", "Statische Planung", "Dokumentation & Abnahme"]
   }
}

const ServiceDetailsArea = ({ initialSlug }: { initialSlug?: string }) => {
   const [data, setData] = useState<DataType>(default_data);

   useEffect(() => {
      // prefer initialSlug (server-provided) otherwise read hash from window
      let slug = initialSlug;
      if (!slug && typeof window !== 'undefined') {
         const h = window.location.hash || '';
         slug = h.replace('#', '') || undefined;
      }

      if (slug && servicesDetailMapImport[slug]) {
         setData(servicesDetailMapImport[slug]);
      } else {
         setData(default_data);
      }
   }, [initialSlug]);

   return <ServiceDetailsStatic data={data} />
}

export default ServiceDetailsArea
