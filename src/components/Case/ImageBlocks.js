
import React from 'react'

const ImageBlocks = ({ images }) => {
  return (
    <div className="case-imageblocks">
        { images.map((image) => (
            <img src={image.url} alt="moonlog" />
        ))}
  </div>
  )
}

export default ImageBlocks
