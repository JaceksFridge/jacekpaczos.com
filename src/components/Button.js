import React from 'react'

const Button = ({ url, text, img, width }) => {
  return (
    <a 
      href={url} 
      className="button"
      style={{ width: `${width}` }}
    >
      <div className="bottom-layer"></div>
      <div className="top-layer">
        {img ? (
          <img src={img} alt={text} className={text} />
          ) : (
            <p>{text}</p>
          )
        }
      </div>
    </a>
  )
}

export default Button
