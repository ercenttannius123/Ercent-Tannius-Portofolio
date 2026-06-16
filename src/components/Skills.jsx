import './Skills.css'

const skills = [
  { name: 'Python', color: '#7F77DD', bg: '#EEEDFE' },
  { name: 'React JS', color: '#1D9E75', bg: '#E1F5EE' },
  { name: 'Machine Learning', color: '#B87A00', bg: '#FAEEDA' },
  { name: 'Natural Languange Processing', color: '#993C1D', bg: '#FAECE7' },
  { name: 'SQL', color: '#185FA5', bg: '#E6F1FB' },
  { name: 'TensorFlow', color: '#99234A', bg: '#FBEAF0' },
  { name: 'Scikit-learn', color: '#3B6D11', bg: '#EAF3DE' },
  { name: 'Git', color: '#5F5E5A', bg: '#F1EFE8' },
  { name: 'Docker', color: '#185FA5', bg: '#E6F1FB' },
  { name: 'XGBoost', color: '#854F0B', bg: '#FAEEDA' },
  { name: 'Tableau', color: '#185FA5', bg: '#E6F1FB' },
  { name: 'Computer Vision', color: '#1D9E75', bg: '#E1F5EE' },
  { name: 'HTML', color: '#B87A00', bg: '#FAEEDA' },
  { name: 'CSS', color: '#7F77DD', bg: '#EEEDFE' },
  { name: 'JavaScript', color: '#5F5E5A', bg: '#F1EFE8' },
]

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-label">Skills</div>
      <div className="section-title">Tech Stack</div>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            className="skill-chip reveal-item"
            
            style={{ backgroundColor: skill.bg, transitionDelay: `${index * 70}ms` }}
          >
            <span
              className="skill-dot"
              style={{ backgroundColor: skill.color }}
            />
            <span style={{ color: skill.color }}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills