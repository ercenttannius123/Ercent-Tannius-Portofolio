import './Skills.css'

const skillGroups = [
  {
    title: "Programming",
    items: ["Python", "JavaScript", "SQL", "C"]
  },
  {
    title: "Data Science",
    items: [
      "NumPy",
      "Pandas",
      "Scikit-learn",
      "Matplotlib",
      "EDA",
      "Tableau",
      "Dashboard Visualization"
    ]
  },
  {
    title: "AI / Machine Learning",
    items: [
      "Computer Vision",
      "Image Segmentation",
      "U-Net",
      "Natural Language Processing",
      "Text Classification",
      "TF-IDF",
      "TensorFlow",
      "XGBoost",
      "Model Evaluation",
      "Feature Engineering"
    ]
  },
  {
    title: "Web Development",
    items: ["HTML/CSS", "React Js"]
  },
  {
    title: "Tools",
    items: ["Git", "Docker", "Jupyter Notebook"]
  }
]

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="section-label">Skills</div>
      <div className="section-title">Tech Stack</div>

      <div className="skills-container">
        {skillGroups.map((group, i) => (
          <div
            key={i}
            className={`skill-card reveal-item ${
              group.title === "AI / Machine Learning"
                ? "skill-card-large"
                : ""
            }`}
          >
            <h3>{group.title}</h3>

            <div className="skill-items">
              {group.items.map((item, j) => (
                <span key={j} className="skill-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
