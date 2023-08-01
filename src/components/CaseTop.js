import React from 'react'

const CaseTop = ({ case }) => {


  return (
    <div className="case">
        <div className="case-background">
            <img src={case.img} alt={case.title} className="case-background-image" />
        </div>
        <div className="case-info">
            <h1 className="case-title">{case.title}</h1>
            <div className="case-boxes">
                <div className="case-box">
                <h3 className="case-box-key">/type</h3>
                <h5 className="case-box-value">{case.type}</h5>
                </div>
                <div className="case-box">
                <h3 className="case-box-key">/time</h3>
                <h5 className="case-box-value">{case.time}</h5>
                </div>
                <div className="case-box">
                <h3 className="case-box-key">/role</h3>
                <h6 className="case-box-value">{case.role}</h6>
                </div>
            </div>
        </div>
  </div>
  )
}

export default CaseTop
