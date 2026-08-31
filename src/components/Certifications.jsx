function Certifications({ certifications }) {
  return (
    <section className="section" id="certifications">
      <div className="container">
        <header className="section__header section__header--wide">
          <span className="eyebrow">{certifications.eyebrow}</span>
          <h2>{certifications.title}</h2>
        </header>

        <div className="cert-layout">
          <div className="cert-list">
            {certifications.items.map((cert) => (
              <article key={cert.name} className="cert-card">
                <div>
                  <h3>{cert.name}</h3>
                  <p>{cert.issuer}</p>
                </div>
                <span
                  className={`badge ${
                    cert.status === 'In Progress' ? 'badge--warn' : 'badge--ok'
                  }`}
                >
                  {cert.status}
                </span>
              </article>
            ))}
          </div>

          <aside className="edu-panel">
            <div className="edu-panel__block">
              <span className="eyebrow">Education</span>
              <h3>{certifications.education.degree}</h3>
              <p>{certifications.education.school}</p>
              <span className="edu-panel__period">
                {certifications.education.period}
              </span>
            </div>
            <div className="edu-panel__meta">
              <div>
                <span className="eyebrow">Languages</span>
                <p>{certifications.languages.join(', ')}</p>
              </div>
              <div>
                <span className="eyebrow">Notice Period</span>
                <p>{certifications.noticePeriod}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Certifications
