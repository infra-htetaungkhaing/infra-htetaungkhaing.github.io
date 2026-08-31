function About({ about }) {
  return (
    <section className="section" id="about">
      <div className="container section__grid">
        <header className="section__header">
          <span className="eyebrow">{about.eyebrow}</span>
          <h2>{about.title}</h2>
        </header>
        <div className="about__content">
          <p className="about__summary">{about.summary}</p>
          <ul className="about__highlights">
            {about.highlights.map((item) => (
              <li key={item}>
                <span className="dot" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
