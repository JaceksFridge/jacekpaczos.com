import React from 'react'
import '../styles/Home.scss'

const Card = ({ data }) => {
  return (
    <div key={data.index} className="projectcard" data-aos="fade-up">
        <div className="bottom-card"></div>
        <div className="top-card">
            <div 
                className="bg-card"
                style={{ background: `${data.color}`}}
            >
                <img 
                    src={data.mockup} 
                    alt={data.title}
                    className="bg-card-image" 
                />
                <div className="border-animation"></div>
            </div>
            <div className="content-card">
                <h4>{data.title}</h4>
                <p>{data.text}</p>
            </div>
        </div>
    </div>
  )
}

export default Card
