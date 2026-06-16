import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Ercent Tannius</h3>
            <p className="footer-desc">
              Full Stack Developer & ML Enthusiast passionate about building meaningful applications.
            </p>
            <div className="footer-social">
              <a href="https://github.com/ercenttannius123" target="_blank" rel="noreferrer" className="footer-social-link" title="GitHub">
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/ercent-tannius-654751326/" target="_blank" rel="noreferrer" className="footer-social-link" title="LinkedIn">
                <span>LinkedIn</span>
              </a>
              <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('ercent.tannius@binus.ac.id')}`} target="_blank" rel="noreferrer" className="footer-social-link" title="Email via Gmail">
                <span>Gmail</span>
              </a>
              <a href={`https://outlook.office.com/mail/deeplink/compose?to=${encodeURIComponent('ercent.tannius@binus.ac.id')}`} target="_blank" rel="noreferrer" className="footer-social-link" title="Email via Outlook">
                <span>Outlook</span>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Navigation</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Resources</h4>
            <ul className="footer-links">
              <li><a href="/cv.pdf" download>Download CV</a></li>
              <li><a href="#projects">View Projects</a></li>
              <li><a href="#contact">Hubungi Saya</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Ercent Tannius. All rights reserved.
          </p>
          <p className="footer-credit">
            Designed & Built with <span className="footer-heart">♥</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
