import React from 'react'

const ProjectTab = ({ tab }) => {

    console.log(tab)

    let newClass
    const transformToClass = (tab) => {
        newClass = tab.toLowerCase().split(" ").join("")
        return newClass
    }
    transformToClass(tab)

  return (
    <div className={`tabs-container ${newClass}`}>
        <div className="tabs-color"></div>
        <h6 className="tabs-text">{tab}</h6>
    </div>
  )
}

export default ProjectTab
