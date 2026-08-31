function Footer({ footer }) {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {footer.copyrightName}
        </p>
        <p className="footer__tagline">{footer.tagline}</p>
      </div>
    </footer>
  )
}

export default Footer
