import React from 'react'
import { Link } from 'react-router-dom';

import CardDesktop from '../CardDesktop'

const TrainingsDesktop = ({ trainings }) => {
  return (

    <div className="trainings-desk">
      <div className="trainings-desk-container">
        {trainings.map((training, index) => (
              <div className="training-desk-sec" key={index}>
                  <div className="training-desk-text">
                      <h4 className="training-desk-title">{training.title}</h4>
                      <h3 className="training-desk-large">{training.text}</h3>
                      <Link to={`/${training.link}`} class="training-link">
                        <h4 className="training-desk-link">{training.open}</h4>
                      </Link>
                  </div>
                  <div className="training-desk-image">
                    <Link to={`/${training.link}`} >
                      <CardDesktop key={index} data={training} />
                    </Link>
                  </div>
              </div>
          ))}
      </div>
    </div>
  )
}

export default TrainingsDesktop
