import React from 'react'
import '../styles/Button.scss'

const Button = ({ url, text, width }) => {
  return (
    <a 
      href={url} 
      className="button"
      style={{ width: `${width}` }}
    >
      <div className="bottom-layer"></div>
      <div className="top-layer">
        <p>{text}</p>
      </div>
    </a>
  )
}

export default Button
