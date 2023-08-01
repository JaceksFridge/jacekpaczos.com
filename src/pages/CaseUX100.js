import React from 'react'
import CaseTop from '../components/CaseTop'

const CaseUX100 = () => {
  return (
    <CaseTop />
  )
}

export default CaseUX100

































// import React, { useState, useEffect } from 'react'

// // Constant Component
// import CaseHero from '../components/CaseHero'

// // Case Variable Components
// import Book from '../components/UX100/Book'
// import Read from '../components/UX100/Read'
// import Cards from '../components/UX100/Cards'
// import BehaviorPatterns from '../components/UX100/BehaviorPatterns'

// const CaseUX100 = () => {
//   const [data, setData] = useState({
//     hero: {},
//     read: {},
//     book: {},
//     cards: [],
//     behaviorPatterns: [],
//   })

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('/data/CaseUX100.json')
//       const jsonData = await response.json()
//       setData(jsonData)
//     }

//     fetchData();
//   }, []);

//   const { hero, read, book, cards, behaviorPatterns } = data

//   return (
//     <div>
//       <CaseHero hero={hero} />
//       <Book book={book} />
//       <Read read={read} />
//       <Cards cards={cards.cards} />  
//       <BehaviorPatterns behaviorPatterns={behaviorPatterns} />
//     </div>
//   )
// }

// export default CaseUX100;
