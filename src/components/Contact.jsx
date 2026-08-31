import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
  HiOutlineDocumentDownload,
  HiOutlineLink,
} from 'react-icons/hi'

const ICONS = {
  phone: HiOutlinePhone,
  email: HiOutlineMail,
  linkedin: HiOutlineLink,
  location: HiOutlineLocationMarker,
  resume: HiOutlineDocumentDownload,
}

function Contact({ contact }) {
  return (
    <section className="section section--alt" id="contact">
      <div className="container contact">
        <header className="section__header section__header--wide">
          <span className="eyebrow">{contact.eyebrow}</span>
          <h2>{contact.title}</h2>
          <p className="contact__subtitle">{contact.subtitle}</p>
        </header>

        <div className="contact-grid">
          {contact.channels.map((channel) => {
            const Icon = ICONS[channel.type] || HiOutlineMail
            const content = (
              <>
                <span className="contact-card__icon" aria-hidden="true">
                  <Icon size={22} />
                </span>
                <span className="contact-card__label">{channel.label}</span>
                <span className="contact-card__value">{channel.value}</span>
              </>
            )

            if (channel.href) {
              return (
                <a
                  key={channel.label}
                  className="contact-card"
                  href={channel.href}
                  target={channel.href.startsWith('http') ? '_blank' : undefined}
                  rel={
                    channel.href.startsWith('http')
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  download={channel.type === 'resume' || undefined}
                >
                  {content}
                </a>
              )
            }

            return (
              <div key={channel.label} className="contact-card contact-card--static">
                {content}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
