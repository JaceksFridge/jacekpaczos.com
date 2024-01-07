

import React from 'react'

const BigCard = ({ data }) => {
  return (
    <div className="big-card-padding">
        <div className="big-card" id={data.id}>
            <div className="card-content">
                <h4 className="card-title">{data.title}</h4>
                <div className="card-title-line"></div>
                <p className="card-subtitle">{data.subtitle}</p>
            </div>
            <img src={data.image} alt="" />
        </div>
    </div>
  )
}

export default BigCard
