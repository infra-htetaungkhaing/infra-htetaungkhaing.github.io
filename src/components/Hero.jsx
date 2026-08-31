function Hero({ hero }) {
  return (
    <section className="hero" id="top">
      <div className="container hero__copy">
        <div className="hero__status-row">
          <span className="status-pill">
            <span className="status-pill__led" aria-hidden="true" />
            {hero.statusLabel}: {hero.statusValue}
          </span>
          <span className="eyebrow">{hero.eyebrow}</span>
        </div>

        <h1 className="hero__name">{hero.name}</h1>
        <p className="hero__role">{hero.role}</p>
        <p className="hero__tagline">{hero.tagline}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label}
          </a>
          <a
            className="btn btn--ghost"
            href={hero.ctaSecondary.href}
            download
          >
            {hero.ctaSecondary.label}
          </a>
        </div>

        <div className="hero__metrics">
          {hero.metrics.map((metric) => (
            <article key={metric.label} className="metric-card">
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
