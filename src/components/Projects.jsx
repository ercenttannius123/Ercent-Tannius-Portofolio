import { useState, useRef, useEffect } from 'react'
import './Projects.css'
import noise1 from '../../Noise1.png'
import DA1 from '../../DA1.png'
import Lits1 from '../../LITS1.png'
import FindIT from  '../../FindIT.png'
import nlp from '../../nlp.png'

const projects = [
  {
    id: 1,
    emoji: '🤖',
    title: 'Noisecore – Pengembangan Website E-Commerce Responsif Menggunakan HTML, CSS, dan JavaScript',
    description: 'Mengembangkan website e-commerce responsif bernama Noisecore dengan memanfaatkan HTML, CSS, dan JavaScript, serta menerapkan prinsip Human-Computer Interaction (HCI) untuk meningkatkan usability, accessibility, dan pengalaman pengguna pada perangkat desktop maupun mobile.',
    tags: ['HTML', 'CSS', 'JavaScript','User Interface Design'],
    tagColor: { bg: '#EEEDFE', color: '#3C3489' },
    thumbBg: 'linear-gradient(135deg, #EEEDFE, #E1F5EE)',
    thumbImg: noise1,
    github: 'https://github.com/ercenttannius123/NoiseCare-Project',
    demo: null,
  },
  {
    id: 2,
    emoji: '🌐',
    title: 'Dashboard Interaktif Analisis Penjualan Produk Kopi Berbasis Tableau',
    description: 'Melakukan pengolahan, visualisasi, dan analisis data penjualan kopi menggunakan Tableau untuk menghasilkan insight bisnis yang dapat ditindaklanjuti. Dashboard yang dikembangkan menampilkan metrik utama, tren penjualan, produk unggulan, serta pola pembelian pelanggan guna membantu evaluasi kinerja dan perencanaan strategi bisnis.',
    tags: ['Tableau','Data Analyst','Data Visualization'],
    tagColor: { bg: '#FFF2E6', color: '#8C5A2A' },
    thumbBg: 'linear-gradient(135deg, #FFF2E6, #F7E0CD)',
    thumbImg : DA1,
    github: 'https://github.com/ercenttannius123/Interactive-Coffee-Sales-Dashboard-for-Business-Decision-Making-Tableau-',
    demo: null,
  },
  {
    id: 3,
    emoji: '📊',
    title: 'Segmentasi Area Hati dan Tumor pada Citra CT Scan Menggunakan Metode U-Net',
    description: 'Merancang dan mengimplementasikan sistem segmentasi citra medis berbasis Deep Learning menggunakan arsitektur U-Net untuk melakukan segmentasi hati dan tumor pada CT scan. Proyek ini mencakup preprocessing data, pelatihan model, evaluasi performa menggunakan Dice Score, serta analisis hasil terhadap penelitian terdahulu. Model yang dikembangkan berhasil mencapai Dice Score 0,986047 dan akurasi 99,81% pada dataset LiTS.',
    tags: ['Python', 'Computer Vision', 'Machine Learning'],
    tagColor: { bg: '#EAF3DE', color: '#173404' },
    thumbBg: 'linear-gradient(135deg, #EAF3DE, #E6F1FB)',
    thumbImg: Lits1,
    github: 'https://github.com/ercenttannius123/Liver-Tumor-Segmentation',
    demo: null,
  },
  {
    id: 4,
    emoji: '🤖',
    title: 'FindIT DAC Competition – Machine Learning Modeling Project',
    description: 'Berpartisipasi dalam kompetisi Data Analytics & Machine Learning FindIT DAC sebagai anggota tim untuk mengembangkan dan mengevaluasi model machine learning dalam menyelesaikan permasalahan dunia nyata. Berkontribusi pada proses data preprocessing, eksperimen model, dan evaluasi performa, dengan skor akhir sebesar 0.87421.',
    tags: ['Machine Learning', 'Data Analyst', 'Python','Computer Vision'],
    tagColor: { bg: '#EEEDFE', color: '#3C3489' },
    thumbBg: 'linear-gradient(135deg, #EEEDFE, #E1F5EE)',
    thumbImg: FindIT,
    github: 'https://github.com/ercenttannius123/Find-IT-Data-Analyst-Competition',
    demo: null,
  }
  ,
  {
    id: 5,
    emoji: '✉️',
    title: 'Email-Spam Detection',
    description: 'Membangun model deteksi spam email menggunakan NLP dan machine learning untuk mengklasifikasikan email sebagai spam atau bukan spam. Meliputi preprocessing teks, feature extraction, dan evaluasi model.',
    tags: ['Python', 'NLP', 'Machine Learning'],
    tagColor: { bg: '#E8F6FF', color: '#0B4A6F' },
    thumbBg: 'linear-gradient(135deg, #E8F6FF, #F0FBF8)',
    thumbImg: nlp,
    github: 'https://github.com/ercenttannius123/email-spam-detection',
    demo: null,
  }
]

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(1)
  const gridRef = useRef(null)
  const [showPrev, setShowPrev] = useState(false)
  const [showNext, setShowNext] = useState(true)
  // use separate refs to avoid attaching properties to boolean
  const isProgrammaticScroll = useRef(false)
  const programmaticTimeout = useRef(null)

  const openProject = (project) => setSelectedProject(project)
  const closeProject = () => setSelectedProject(null)

  useEffect(() => {
    if (!gridRef.current) return
    const card = gridRef.current.querySelectorAll('.project-card')[currentIndex]
    if (card) {
      isProgrammaticScroll.current = true
      card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      // clear previous timeout if exists
      if (programmaticTimeout.current) {
        window.clearTimeout(programmaticTimeout.current)
      }
      programmaticTimeout.current = window.setTimeout(() => {
        isProgrammaticScroll.current = false
        programmaticTimeout.current = null
      }, 400)
    }
  }, [currentIndex])

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    const handleScroll = () => {
      if (isProgrammaticScroll.current) return
      const { scrollLeft, clientWidth, scrollWidth } = el
      setShowPrev(scrollLeft > 10)
      setShowNext(scrollLeft + clientWidth < scrollWidth - 10)

      // update currentIndex to the card nearest to center
      const cards = el.querySelectorAll('.project-card')
        if (cards.length) {
        const center = scrollLeft + clientWidth / 2
        let nearest = 0
        let minDiff = Infinity
        cards.forEach((c, i) => {
          const cCenter = c.offsetLeft + c.offsetWidth / 2
          const diff = Math.abs(cCenter - center)
          if (diff < minDiff) {
            minDiff = diff
            nearest = i
          }
        })
        setCurrentIndex(nearest)
      }
    }

    handleScroll()
    el.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      el.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const prev = () => setIndex(currentIndex - 1)
  const next = () => setIndex(currentIndex + 1)

  // set index and update arrow visibility together
  const setIndex = (idx) => {
    const clamped = Math.max(0, Math.min(projects.length - 1, idx))
    setCurrentIndex(clamped)
    setShowPrev(clamped > 0)
    setShowNext(clamped < projects.length - 1)
  }

  return (
    <section className="section" id="projects">
      <div className="section-label">Portofolio</div>
      <div className="section-title">Proyek Unggulan</div>
      <div className="projects-carousel">
        <button
          className={`carousel-button carousel-prev ${!showPrev ? 'hidden' : ''}`}
          onClick={prev}
          aria-label="Previous"
          type="button"
        >
          ‹
        </button>
        <div className="projects-grid" ref={gridRef}>
        {projects.map((project) => (
          <button
            key={project.id}
            type="button"
            className={`project-card project-card-${project.id} reveal-item`}
            style={{ transitionDelay: `${project.id * 70}ms` }}
            onClick={() => openProject(project)}
          >
            <div
              className="project-thumb"
              style={{ background: project.thumbBg }}
            >
              {project.thumbImg ? (
                <img
                  src={project.thumbImg}
                  alt={project.title}
                  className="project-thumb-img"
                />
              ) : (
                project.emoji
              )}
            </div>

            <div className="project-body">
              <h3 className="project-title">{project.title}</h3>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                    style={{
                      background: project.tagColor.bg,
                      color: project.tagColor.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-card-note">Klik kartu untuk lihat detail</div>
            </div>
          </button>
        ))}
        </div>
        <button
          className={`carousel-button carousel-next ${!showNext ? 'hidden' : ''}`}
          onClick={next}
          aria-label="Next"
          type="button"
        >
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {projects.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === currentIndex ? 'active' : ''}`}
            onClick={() => setIndex(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {selectedProject && (
        <div
          className="project-modal-overlay"
          onClick={closeProject}
          role="dialog"
          aria-modal="true"
          tabIndex={-1}
        >
          <div className="project-modal-content" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className="project-modal-close"
              onClick={closeProject}
              aria-label="Close project details"
            >
              ×
            </button>

            <div
              className="project-modal-thumb"
              style={{ background: selectedProject.thumbBg }}
            >
              {selectedProject.thumbImg ? (
                <img
                  src={selectedProject.thumbImg}
                  alt={selectedProject.title}
                  className="project-modal-img"
                />
              ) : (
                selectedProject.emoji
              )}
            </div>

            <div className="project-modal-body">
              <h3 className="project-modal-title">{selectedProject.title}</h3>
              <p className="project-modal-desc">{selectedProject.description}</p>

              <div className="project-modal-tags">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                    style={{
                      background: selectedProject.tagColor.bg,
                      color: selectedProject.tagColor.color,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-modal-actions">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link project-modal-link"
                >
                  Buka GitHub
                </a>
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link project-modal-link"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects
