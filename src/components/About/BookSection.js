import React from 'react'
import { motion } from 'framer-motion'

const BookSection = ({ books }) => {

  return (
    <div className="books-section">
        <div className="books-grid">
            {books.map((book, index) => (
                <motion.a 
                    className="books-card" 
                    href={book.link}
                    key={index}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ 
                        opacity: 0, 
                        translateX: -50, 
                        // translateY: index % 2 ? -50 : 50
                        translateY: -50
                    }}
                    animate={{ opacity: 1, translateX: 0, translateY: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.3 }}
                >
                    <h4 className="books-count">0{index}</h4>
                    <motion.img 
                        src={book.url} 
                        alt={book.image} 
                        className="books-image" 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.3 }}
                    />
                    <div className="book-info">
                        <h4 className="book-title">{book.title}</h4>
                        <h4 className="book-author">{book.author}</h4>
                    </div>
                </motion.a>
            ))}
        </div>
    </div>
  )
}

export default BookSection
