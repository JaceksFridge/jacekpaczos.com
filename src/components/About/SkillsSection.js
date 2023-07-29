import React from 'react'

const BookSection = ({ skills }) => {

  return (
    <div className="skills-section">
        <div className="skills-grid">
            {skills.map((skill, index) => (
                <div className="skills-card">
                    <img src={skill.url} alt={skill.image} className="skill-image" />
                    <div className="skill-info">
                        <h4 className="skill-title">{skill.title}</h4>
                        <h4 className="skill-type">{skill.type}</h4>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BookSection
