import React from 'react'

const SectionIntro = ({ name, sectionClass = "sectionIntro" }) => {
  return (
    <div className={sectionClass}>
        <h3>{name}</h3>
        <div className="section-title-line"></div>
    </div>
  )
}

export default SectionIntro
