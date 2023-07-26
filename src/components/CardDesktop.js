import React from 'react'

const CardDesktop = ({ data }) => {
  return (
    <div className="desk-card">
        <div className="desk-bottom-card"></div>
        <div className="desk-top-card">
            <div
                className="desk-bg-card"
                style={{ background: `${data.color}`}}
            >
                <img 
                    src={data.mockup}
                    alt={data.title}
                    className="desk-bg-card-image"
                />
            </div>
        </div>
    </div>
  )
}

export default CardDesktop
