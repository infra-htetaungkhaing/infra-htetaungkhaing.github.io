import {
  HiOutlineServer,
  HiOutlineSwitchHorizontal,
  HiOutlineChip,
  HiOutlineGlobeAlt,
  HiOutlineDesktopComputer,
  HiOutlineShieldCheck,
  HiOutlineCog,
} from 'react-icons/hi'

const ICONS = {
  routing: HiOutlineGlobeAlt,
  switching: HiOutlineSwitchHorizontal,
  hardware: HiOutlineServer,
  infra: HiOutlineChip,
  monitor: HiOutlineDesktopComputer,
  security: HiOutlineShieldCheck,
  ops: HiOutlineCog,
}

function Expertise({ expertise, softSkills }) {
  return (
    <section className="section" id="expertise">
      <div className="container">
        <header className="section__header section__header--wide">
          <span className="eyebrow">{expertise.eyebrow}</span>
          <h2>{expertise.title}</h2>
        </header>

        <div className="expertise-grid">
          {expertise.categories.map((category) => {
            const Icon = ICONS[category.icon] || HiOutlineChip
            return (
              <article key={category.title} className="expertise-card">
                <div className="expertise-card__head">
                  <span className="expertise-card__icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <h3>{category.title}</h3>
                </div>
                <ul>
                  {category.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="soft-skills">
          <div className="soft-skills__header">
            <span className="eyebrow">{softSkills.eyebrow}</span>
            <h3>{softSkills.title}</h3>
          </div>
          <div className="chip-row">
            {softSkills.items.map((skill) => (
              <span key={skill} className="chip">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Expertise
