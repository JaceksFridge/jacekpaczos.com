

import React from 'react'

const DesktopCard = ({ index, data }) => {


  return (
    <div className={`desktop-card ${index % 2 === 0 ? '' : 'reverse'}`} id={data.id}>
      <div className={`desktop-card-content ${index % 2 === 0 ? 'left' : 'right'}`}>
        <div className="inner-content">
          <h1 className="project-title">{data.title}</h1>
          <div className="underline"></div>
          <p className="project-text">{data.text}</p>
          <a className="project-button">
            View Case Study
          </a>
        </div>
      </div>
      <div className={`desktop-card-picture ${index % 2 === 0 ? 'right' : 'left'}`}>
        <img src={data.image} alt={data.id} />
      </div>
    </div>
  )
}

export default DesktopCard
