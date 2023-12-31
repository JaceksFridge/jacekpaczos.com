import React from 'react'
import Swipe from './Swipe'
import Pattern from './Pattern'

const BehaviorPatterns = ({ behaviorPatterns }) => {
  return (
    <div className="swipe-container">
      <Swipe />
      {behaviorPatterns.map((pattern, index) => (
        <Pattern 
          pattern={pattern}
        />
      ))}
    </div>
  )
}

export default BehaviorPatterns
