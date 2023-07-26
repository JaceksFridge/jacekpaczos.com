import React from 'react'
import ProjectTab from './ProjectTab'

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
                <div className="tabs-pool">
                    {data.tabs && data.tabs.map((tab) => (
                        <ProjectTab key={tab} tab={tab} />
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card
