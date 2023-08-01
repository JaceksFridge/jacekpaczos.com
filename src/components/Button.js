import React, { useEffect, useRef } from 'react'

const Button = ({ onClick, text, img, width, removeAOS }) => {

  const buttonRef = useRef(null);

  useEffect(() => {
    if (removeAOS && buttonRef.current) {
      buttonRef.current.removeAttribute('data-aos')
    }
  }, [removeAOS])

  return (
    <button 
      onClick={onClick} 
      className="button"
      style={{ width: `${width}` }}
      ref={buttonRef}
      data-aos="fade-up"
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
