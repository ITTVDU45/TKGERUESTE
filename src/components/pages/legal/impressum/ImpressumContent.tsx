"use client"
import React from "react"

const ImpressumContent = () => {
  return (
    <section className="section-space">
      <div className="small-container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="legal-content glass p-6 rounded-2xl shadow-lg">
              <h1 className="text-4xl mb-4">Impressum</h1>
              
              <h2 id="m46" className="text-2xl mt-8 mb-4">Diensteanbieter</h2>
              <p className="mb-2">TK GERÜSTE GmbH</p>
              
              <p className="mb-2">Kirchstraße 26a</p>
              <p className="mb-2">42799 Leichlingen (Rheinland)</p>
              <p className="mb-6">Deutschland</p>

              <h2 className="text-2xl mt-8 mb-4">Verantwortliche Personen</h2>
              <p className="mb-2"><strong>Geschäftsführer:</strong> Volkan Tekin</p>
              <p className="mb-2"><strong>Bauleiter:</strong> Özgür Kadem</p>
              <p className="mb-6"><strong>Kaufmännische Leitung:</strong> Hakan Kilic</p>

              <h2 id="m56" className="text-2xl mt-8 mb-4">Kontaktmöglichkeiten</h2>
              <p className="mb-2">E-Mail-Adresse: info@tk-gerueste.de</p>
              <p className="mb-2">Telefon: 0178 2686000</p>
              <p className="mb-6">Kontaktformular: <a href="https://www.tk-gerueste.de/contact" target="_blank" className="text-primary hover:underline">https://www.tk-gerueste.de/contact</a></p>

              <h2 id="m151" className="text-2xl mt-8 mb-4">Register und Registernummer</h2>
              <p className="mb-2">Handelsregister</p>
              <p className="mb-2">Geführt bei: Amtsgericht Köln</p>
              <p className="mb-6">Nummer: HRB 119341</p>

              <h2 id="m65" className="text-2xl mt-8 mb-4">Haftungs- und Schutzrechtshinweise</h2>
              <p className="mb-6">Haftungsausschluss: Die Inhalte dieses Onlineangebotes wurden sorgfältig und nach unserem aktuellen Kenntnisstand erstellt, dienen jedoch nur der Information und entfalten keine rechtlich bindende Wirkung, sofern es sich nicht um gesetzlich verpflichtende Informationen (z. B. das Impressum, die Datenschutzerklärung, AGB oder verpflichtende Belehrungen von Verbrauchern) handelt. Wir behalten uns vor, die Inhalte vollständig oder teilweise zu ändern oder zu löschen, soweit vertragliche Verpflichtungen unberührt bleiben. Alle Angebote sind freibleibend und unverbindlich.</p>

              <h2 className="text-2xl mt-8 mb-4">Bilder</h2>
              <p className="mb-6">Eigene Projektbilder, Projektbilder von Partnerunternehmen und Bilder aus KI-gestützten Systemen</p>

              <p className="mt-8 text-sm text-gray-500 text-center"> 
                <a href="https://datenschutz-generator.de/" title="Rechtstext von Dr. Schwenke - für weitere Informationen bitte anklicken." target="_blank" rel="noopener noreferrer nofollow" className="text-primary hover:underline">Erstellt mit kostenlosem Datenschutz-Generator.de von Dr. Thomas Schwenke</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media print {
          body { background: #fff }
          .glass { box-shadow: none !important; background: transparent !important; }
          .seal { display: none }
        }
      `}</style>
    </section>
  )
}

export default ImpressumContent
