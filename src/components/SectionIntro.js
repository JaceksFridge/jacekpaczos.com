import React from 'react'
import '../styles/SectionIntro.scss'

const SectionIntro = ({ name }) => {
  return (
    <div className="sectionIntro">
        <h3>{name}</h3>
        <div className="section-title-line"></div>
    </div>
  )
}

export default SectionIntro
