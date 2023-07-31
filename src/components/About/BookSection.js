import React from 'react'
import { motion } from 'framer-motion'

const BookSection = ({ books }) => {

    // const skillsVariants = {

    //     hidden: {
    //         opacity: 0,
    //         translateX: -50,
    //     },

    //     visible: {
    //         opacity: 1,
    //         translateX: 0,
    //         transition: {
    //             duration: 3,
    //             delay: index * 0.3,
    //         }
    //     }
    // }

  return (
    <div className="books-section">
        <div className="books-grid">
            {books.map((book, index) => (
                <motion.div 
                    className="books-card" 
                    key={index}
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
                    <img src={book.url} alt={book.image} className="books-image" />
                    <div className="book-info">
                        <h4 className="book-title">{book.title}</h4>
                        <h4 className="book-author">{book.author}</h4>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
  )
}

export default BookSection
