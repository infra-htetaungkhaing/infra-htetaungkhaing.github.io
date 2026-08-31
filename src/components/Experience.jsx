function Experience({ experience }) {
  return (
    <section className="section section--alt" id="experience">
      <div className="container">
        <header className="section__header section__header--wide">
          <span className="eyebrow">{experience.eyebrow}</span>
          <h2>{experience.title}</h2>
        </header>

        <div className="timeline">
          {experience.jobs.map((job, index) => (
            <article key={job.id} className="timeline__item">
              <div className="timeline__marker" aria-hidden="true">
                <span className="timeline__node" />
                {index < experience.jobs.length - 1 && (
                  <span className="timeline__line" />
                )}
              </div>
              <div className="job-card">
                <div className="job-card__meta">
                  <span className="job-card__period">{job.period}</span>
                  <span className="job-card__location">{job.location}</span>
                </div>
                <h3>{job.role}</h3>
                <p className="job-card__company">{job.company}</p>
                <ul>
                  {job.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
