import Link from "next/link";

const benefits_data = [
  {
    id: 1,
    title: "Zuverlässigkeit & Pünktlichkeit",
    desc:
      "Unsere Kunden vertrauen auf unsere Zuverlässigkeit und Pünktlichkeit. Wir halten uns an vereinbarte Zeitpläne und liefern Qualität, die unseren hohen Standards entspricht. Ihre Zufriedenheit steht für uns an erster Stelle.",
  },
  {
    id: 2,
    title: "Expertenwissen & Erfahrung",
    desc:
      "Mit jahrelanger Expertise im Gerüstbau bieten wir fundiertes Fachwissen und umfangreiche Erfahrung. Unsere hochqualifizierten Teams entwickeln maßgeschneiderte Lösungen und gewährleisten höchste Sicherheitsstandards.",
  },
  {
    id: 3,
    title: "Maßgeschneiderte Lösungen",
    desc:
      "Wir bieten individuelle Gerüstlösungen, die sich exakt an den Bedürfnissen und Gegebenheiten Ihres Projekts orientieren. Von der Planung bis zum Abbau stellen wir sicher, dass Ihr Vorhaben optimal unterstützt wird.",
  },
];

const Benefits = () => {
  return (
    <section className="benefits-section pt-80 pb-80 p-relative">
      <div className="small-container">
        <div className="title-box text-center mb-40">
          <span className="section-sub-title text-gradient">Unsere Vorteile</span>
          <h3 className="section-title mt-10">Warum TK Gerüste wählen?</h3>
        </div>
        <div className="row g-4">
          {benefits_data.map((b) => (
            <div key={b.id} className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
              <div className="benefit-card p-relative bg-white p-30" style={{ borderRadius: 12 }}>
                <div className="icon-box mb-20" style={{ width: 56, height: 56, borderRadius: 12, background: 'var(--theme-color-1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#fff', fontWeight: 700 }}>{b.id}</span>
                </div>
                <h5 style={{ color: 'var(--brand-ink)' }}>{b.title}</h5>
                <p style={{ color: 'rgba(47,47,47,0.85)' }}>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;


