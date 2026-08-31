function Achievements({ achievements }) {
  return (
    <section className="section section--alt" id="achievements">
      <div className="container">
        <header className="section__header section__header--wide">
          <span className="eyebrow">{achievements.eyebrow}</span>
          <h2>{achievements.title}</h2>
        </header>

        <div className="achieve-grid">
          {achievements.items.map((item, index) => (
            <article key={item.title} className="achieve-card">
              <span className="achieve-card__index" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
