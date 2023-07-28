import React from 'react'

const BookSection = ({ books }) => {


  return (
    <div className="books-section">
        <div className="books-grid">
            {books.map((book, index) => (
                <div className="books-card">
                    <h4 className="books-count">0{index}</h4>
                    <img src={book.url} alt={book.image} className="books-image" />
                    <div className="book-info">
                        <h4 className="book-title">{book.title}</h4>
                        <h4 className="book-author">{book.author}</h4>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default BookSection
