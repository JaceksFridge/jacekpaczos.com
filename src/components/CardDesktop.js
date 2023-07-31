import React from 'react'

const CardDesktop = ({ data }) => {
  return (
    <div className="desk-card">
        <div className="desk-bottom-card"></div>
        <div className="desk-top-card">
            <div
                id={data.title}
                className="desk-bg-card"
                style={{ background: `${data.color}`}}
            >
                {data.video ? (
                    <video 
                        src={data.video} 
                        autoPlay 
                        loop 
                        muted 
                        style={{width: "100%", height: "auto"}}
                    />
                ) : 
                (
                    <img 
                        src={data.mockup}
                        alt={data.title}
                        className="desk-bg-card-image"
                    />
                )}
                <div className="border-animation"></div>
            </div>
        </div>
    </div>
  )
}

export default CardDesktop
