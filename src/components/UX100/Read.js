import React from 'react'
import SectionHead from '../SectionHead'

const Read = ({ read }) => {
  return (
    <div className="read">
      <SectionHead />
      <div className="container">
        <h4 className="title">{read.title}</h4>
        <p className="text">{read.text}</p>
      </div>
      <div className="boxgrid">
        <div className="box">
          <div className="checkbox"></div>
          <p className="boxtext">{read.box1}</p>
        </div>
        <div className="box">
          <div className="checkbox"></div>
          <p className="boxtext">{read.box2}</p>
        </div>
        <div className="box">
          <div className="checkbox"></div>
          <p className="boxtext">{read.box3}</p>
        </div>
      </div>
    </div>
  )
}

export default Read
