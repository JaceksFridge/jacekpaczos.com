import React from 'react'

const CardDesktop = ({ data }) => {
  return (
    <div className="desk-card">
        <div className="desk-bottom-card"></div>
        <div className="desk-top-card" id={data.title.replace(/\s/g, '-').toLowerCase()}>
            <div
                className="desk-bg-card big-card"
                id={data.id}
            >
                <div className="card-content">
                    <h4 className="card-title">{data.title}</h4>
                    <div className="card-title-line"></div>
                    <p className="card-subtitle">{data.subtitle}</p>
                </div>
                <img 
                    src={data.image}
                    alt={data.title}
                    className="desk-bg-card-image"
                />
                <div className="border-animation"></div>
            </div>
        </div>
    </div>
  )
}

export default CardDesktop
