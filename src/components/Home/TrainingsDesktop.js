import React from 'react'

import { Link } from 'react-router-dom';

const TrainingsDesktop = ({trainings }) => {
  return (

    <div className="projects-desk">
        {trainings.map((training, index) => (
            <div className="project-desk-sec">
                <div className="project-desk-text">
                    <h4 className="project-desk-title">{training.title}</h4>
                    <h3 className="project-desk-large">{training.text}</h3>
                    <Link to={`/$training.link}`} class="project-link">open</Link>
                </div>
                <div className="project-desk-image">

                </div>
            </div>
        ))}
    </div>
  )
}

export default TrainingsDesktop
