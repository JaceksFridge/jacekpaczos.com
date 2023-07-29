import React from 'react'
import Button from '../Button'

const Socials = () => {
  return (
    <div className="socials">
      <h4 className="section-title">Let's Connect</h4>
      <div className="section-content">
        Feel free to reach out for collaborations or just a hello ✌️
      </div>
      <div className="social-buttons">
        <Button 
          name="medium"
          url='https://medium.com/@jacekpaczos'
          img="./assets/Socials/linkedin.svg"
          width='3rem'
        />
        <Button 
          name="linkedin"
          url='https://linkedin.com/@jacekpaczos'
          img="./assets/Socials/linkedin.svg"
          width='3rem'
        />
        <Button 
          name="twitter"
          url='https://twitter.com/@jacekpaczos'
          img="./assets/Socials/twitter.svg"
          width='3rem'
        />
      </div>
    </div>
  )
}

export default Socials
