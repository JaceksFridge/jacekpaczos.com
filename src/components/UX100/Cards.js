import React from 'react'
import SectionHead from '../SectionHead'


const Cards = ({ cards }) => {


  return (
    <div className="cards">
      <SectionHead sec={{ cards }} />
      {cards?.map((card, index) => (
      <div className="card" key={index}>
          <img 
            src={card.icon} 
            alt={card.title}
          />
          <h5 className="title">{card.title}</h5>
          <p className="text">{card.text}</p>
          <h6 className="substring">{card.substring}</h6>
      </div>
      ))}
    </div>
  )
}

export default Cards;

