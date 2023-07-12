
import React from 'react'
import Card from './Card'

import '../styles/Trainings.scss'
import { Link } from 'react-router-dom'

const Trainings = ({ trainings }) => {
  return (
    <div className="projects" id="trainings">
      {trainings.map((training, index) => (
        <Link to={`/${training.link}`}>
          <Card key={index} data={training} />
        </Link>
      ))}
    </div>
    
  );
};

export default Trainings;
