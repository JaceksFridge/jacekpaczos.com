import React from 'react'
import Button from '../Button'

const Socials = () => {
  return (
    <div className="socials">
      <h4 className="section-title">Let's Connect</h4>
      <div className="section-content">
          <p className="section-text">Feel free to send a hello ✌️</p>
          <a href="mailto:yes@jacekpaczos.com">
            <p className="section-link">yes@jacekpaczos.com</p>
          </a>
      </div>
      <div className="social-buttons">
        <Button 
          className="icon-medium"
          text='medium'
          url='https://medium.com/@jacekpaczos'
          img="./assets/icons/Socials/medium.svg"
          width='3rem'
        />
        <Button 
          className="icon-linkedin"
          url='https://www.linkedin.com/in/jacek-paczos/'
          img="./assets/icons/Socials/linkedin.svg"
          width='3rem'
        />
        <Button 
          className="icon-twitter"
          url='https://twitter.com/@pacjac'
          img="./assets/icons/Socials/twitter.svg"
          width='3rem'
        />
      </div>
    </div>
  )
}

export default Socials

