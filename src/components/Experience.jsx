import { useEffect, useState } from 'react'
import './Experience.css'
import sesvent from '../../Sesvent.png'
import himti from '../../Himti.png'
import Techno from '../../Techno.png'
import Makrab1 from '../../Makrab1.png'
import Makrab2 from '../../Makrab2.png'
import PM from '../../PM.jpeg'
import BSLC from '../../BSLC.png'
import BSLC2 from '../../BSLC-2.png'
import BINUS from '../../BINUS.png'
import fl1 from '../../FL-1.png'
import fl2 from '../../FL-3.png'
import f13 from '../../FL-2.png'
import fp from '../../FP1.png'
import volun1 from '../../Volun1.png'
import volun2 from '../../Volun2.png'
import TFI from '../../TFI.jpg'
import LDKCP from '../../LDKCP.jpeg'

const experiences = [
  {
    id: 1,
    role: 'Panitia Divisi Acara Sesvent 2025',
    company: 'HIMTI BINUS UNIVERSITY',
    period: '2025',
    description:
      'Sebagai Panitia Acara Sesvent HIMTI 2025, saya bertanggung jawab dalam merancang dan mengelola acara serta memastikan jalannya kegiatan dengan baik,mengelola berbagai permainan selama acara berlangsung. Memastikan seluruh peserta dapat berpartisipasi dengan baik, menjelaskan aturan permainan, mengatur alur kegiatan, serta menjaga suasana acara tetap interaktif dan menyenangkan.',
    logo: himti,
    photo: sesvent,
  },
  {
    id: 2,
    role: 'Staff Of Buram Division At Techno 2025',
    company: 'HIMTI BINUS UNIVERSITY',
    period: 'Mei 2025 - Sep 2025',
    description:
      'Berkontribusi dalam pelaksanaan HIMTI Techno 2025 Expo sebagai anggota Divisi Buram dengan tugas mengoordinasikan komunikasi peserta, menjaga operasional area expo, serta mendukung kegiatan promosi organisasi dan acara untuk meningkatkan partisipasi pengunjung.',
    logo: himti,
    photo: Techno,
  },
  {
    id: 3,
    role: 'Makrab Event Coordinator',
    company: 'HIMTI BINUS UNIVERSITY',
    period: 'April 2026 - Mei 2026',
    description:
      'Mengatur jadwal, peserta, dan logistik acara Makrab HIMTI.',
    logo: himti,
    photo: Makrab1,
    photo2: Makrab2,
  },
  {
    id: 4,
    role: 'Activist Of Publication And Marketing || Comission 2',
    company: 'HIMTI BINUS UNIVERSITY',
    period: 'Januari 2025 - Januari 2026',
    description:
      'Berperan sebagai anggota Coverage Team dengan tugas mendokumentasikan kegiatan organisasi dan menghasilkan konten edukatif untuk platform TikTok. Mengembangkan kemampuan dalam content creation, video editing, digital marketing, komunikasi visual, dan manajemen media sosial untuk meningkatkan jangkauan serta keterlibatan audiens.',
    logo: himti,
    photo: PM,
  },
  {
    id: 5,
    role: 'Activist Of HIMTI CARE || Comission 2',
    company: 'HIMTI BINUS UNIVERSITY',
    period: 'Feb 2026 - Present',
    description:
      'Memimpin tim dalam penyelenggaraan kegiatan yang bertujuan mempererat hubungan antar aktivis serta meningkatkan keterlibatan anggota dalam organisasi. Mengelola koordinasi tim, pengambilan keputusan operasional, dan komunikasi antar pihak untuk memastikan kegiatan berjalan efektif dan memberikan pengalaman positif bagi peserta.',
    logo: himti,
    photo: Makrab2,
  },
  {
    id: 6,
    role: 'Panitia Divisi PTK Dan Games LDKCP HIMTI 2026',
    company: 'HIMTI BINUS UNIVERSITY',
    period: 'Mei 2026 - Juni 2026',
    description:
      'Bertanggung jawab dalam mendukung kebutuhan logistik dan operasional acara serta membantu penyelenggaraan aktivitas permainan yang interaktif. Melalui peran ini, mengembangkan kemampuan kerja sama tim, koordinasi, problem solving, dan manajemen acara dalam lingkungan yang dinamis.',
    logo: himti,
    photo: LDKCP,
  },
  {
    id: 7,
    role: 'Mentor Of BSLC Even Semester 2025/2026',
    company: 'BINUS Student Learning Community',
    period: 'April 2026',
    description:
      'Sebagai mentor di BSLC, bertanggung jawab mengajarkan materi perkuliahan yang diujikan pada UTS kepada anggota komunitas. Mengembangkan kemampuan komunikasi, presentasi, dan pembimbingan mahasiswa, serta memperdalam pemahaman terhadap materi akademik melalui proses pengajaran dan diskusi.',
    logo: BSLC,
    photo: BSLC2,
  },
  {
    id: 8,
    role: 'Freshmen Leader B2029',
    company: 'BINUS UNIVERSITY',
    period: 'Agustus 2025',
    description:
      'Memimpin koordinasi mahasiswa baru dalam satu kelas selama program orientasi universitas. Bertanggung jawab dalam pengelolaan komunikasi, penyampaian informasi, pemantauan partisipasi mahasiswa, serta pemberian dukungan untuk membantu proses adaptasi akademik dan sosial di lingkungan kampus.',
    logo: BINUS,
    photo: fl1,
    photo2: fl2,
    photo3: f13,
  },
  {
    id: 9,
    role: 'Freshmen Partner B2029',
    company: 'BINUS UNIVERSITY',
    period: 'Agustus 2025 - Januari 2026',
    description:
      'Berperan sebagai mentor dan pendamping bagi mahasiswa baru dengan memberikan arahan, dukungan, serta informasi yang diperlukan untuk membantu mereka beradaptasi dengan kehidupan perkuliahan. Mengembangkan kemampuan komunikasi interpersonal, mentoring, dan problem solving melalui interaksi langsung dengan mahasiswa baru.',
    logo: BINUS,
    photo: fp,
  },
  {
    id: 10,
    role: 'Volunteer as a Assistant Teacher at PAUD Bougenville',
    company: 'TFI BINUS UNIVERSITY',
    period: 'Maret 2025 - April 2025',
    description: 'Berpartisipasi sebagai relawan pengajar dengan membantu proses pembelajaran anak usia dini melalui aktivitas edukatif yang interaktif. Mengembangkan kemampuan komunikasi, kesabaran, kerja sama tim, serta adaptabilitas dalam menghadapi kebutuhan belajar anak dengan karakter dan tingkat perkembangan yang beragam.',
    logo: TFI,
    photo: volun1,
    photo2: volun2,
  },
]

function Experience() {
  const [activePhoto, setActivePhoto] = useState(null)

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setActivePhoto(null)
    }

    if (!activePhoto) return undefined

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activePhoto])

  const openPhoto = (photo) => setActivePhoto(photo)
  const closePhoto = () => setActivePhoto(null)

  return (
    <section className="section" id="experience">
      <div className="section-label">Riwayat</div>
      <div className="section-title">Experience</div>

      <div className="experience-list">
        {experiences.map((exp) => (
          <div className="experience-item reveal-item" key={exp.id} style={{ transitionDelay: `${exp.id * 80}ms` }}>
            <div className="timeline-marker">
              <span className="timeline-dot" />
            </div>
            <div className="experience-content">
              <div className="experience-header">
                {exp.logo && (
                  <div className="experience-img-link">
                    <img src={exp.logo} alt="logo" className="experience-logo" />
                  </div>
                )}
                <div className="experience-title-section">
                  <div className="experience-role">{exp.role}</div>
                  <div className="experience-company">{exp.company}</div>
                </div>
              </div>
              <div className="experience-period">{exp.period}</div>
              <p className="experience-desc">{exp.description}</p>

              {(exp.photo || exp.photo2 || exp.photo3) && (
                <div className="experience-photos">
                  {exp.photo && (
                    <button type="button" className="experience-photo-link" onClick={() => openPhoto(exp.photo)}>
                      <img src={exp.photo} alt="experience" className="experience-photo" />
                    </button>
                  )}
                  {exp.photo2 && (
                    <button type="button" className="experience-photo-link" onClick={() => openPhoto(exp.photo2)}>
                      <img src={exp.photo2} alt="experience" className="experience-photo" />
                    </button>
                  )}
                  {exp.photo3 && (
                    <button type="button" className="experience-photo-link" onClick={() => openPhoto(exp.photo3)}>
                      <img src={exp.photo3} alt="experience" className="experience-photo" />
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {activePhoto && (
        <div className="lightbox-overlay" onClick={closePhoto} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Escape' && closePhoto()}>
          <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="lightbox-close" onClick={closePhoto} aria-label="Close photo">
              Esc
            </button>
            <img src={activePhoto} alt="Preview" className="lightbox-image" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Experience
