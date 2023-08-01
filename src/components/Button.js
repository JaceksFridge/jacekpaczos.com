import React from 'react'

const Button = ({ onClick, text, img, width }) => {
  return (
    <button 
      onClick={onClick} 
      className="button"
      style={{ width: `${width}` }}
    >
      <div className="bottom-layer"></div>
      <div className="top-layer">
        {img ? (
          <img src={img} alt={text} className={text} />
        ) : (
          <p>{text}</p>
        )}
      </div>
    </button>
  )
}


export default Button
