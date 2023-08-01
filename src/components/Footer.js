import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  const scrollSmoothly = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }


  return (
    <div className="footer">
      <Link to="/home" onClick={scrollToTop}>
        <Button width={"120px"} text={"Home"} removeAOS />
      </Link>
      <Link onClick={scrollSmoothly} >
        <Button width={"120px"} text={"Up"} removeAOS />
      </Link>
    </div>
  );
};

export default Footer;
