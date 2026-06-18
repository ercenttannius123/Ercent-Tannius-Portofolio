import './Hero.css'
import ercentPhoto from '../../Ercent.jpeg'

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-gradient" />
      <div className="hero-grid">
        <div className="hero-avatar">
          <div className="hero-avatar-inner">
            <img src={ercentPhoto} alt="Ercent Tannius" className="hero-avatar-img" />
          </div>
        </div>

        <div className="hero-text">
          <div className="hero-badge">👋 Open to opportunities</div>
          <h1>
            <span className="hero-greeting">Hi,</span>
            <span className="hero-im">I'm</span>
            <span className="hero-name">Ercent Tannius</span>
          </h1>
          <h2>Full Stack Developer & ML Enthusiast</h2>
          <p>
            Saya membangun aplikasi yang bermakna dari model machine learning sampai Interface yang intuitif dan menyenangkan.
          </p>

          <div className="hero-highlights">
            <div className="hero-chip">5+ Projects completed</div>
            <div className="hero-chip">Machine Learning</div>
            <div className="hero-chip">UI / UX Design</div>
          </div>

          <div className="hero-btns">
            <a href="#projects" className="btn-primary">Lihat Proyek</a>
            <a href="/cv-ercent-tannius.pdf" className="btn-outline" download>Unduh CV</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
