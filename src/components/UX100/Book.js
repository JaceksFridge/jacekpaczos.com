import React from 'react'

import SectionHead from '../SectionHead'
import Button from '../Button'

const Book = ({ book }) => {
  return (
    <div className="book">
        <SectionHead sec={book} />
        <div className="container">
            <h4>{book.title}</h4>
            <p>{book.text}</p>
            <img src={book.imageURL} alt={book.title} />
        </div>
        <div className="buttoncontainer">
        <Button 
          url={book.buttonURL}
          text={book.buttonText} 
        />
        </div>
    </div>
  )
}

export default Book
