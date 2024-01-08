

import React, { useState, useEffect, useRef } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import Button from './Button';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(false);
  const lastScrollY = useRef(0);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    document.body.style.overflow = !menuOpen ? 'hidden' : 'auto';
  };

  const controlNavbar = (event) => {
    const currentScrollY = event.target === document ? window.scrollY : event.target.scrollTop;

    if (currentScrollY < lastScrollY.current) {
      setShow(true);
    } else if (currentScrollY > 100) {
      setShow(false);
    }
    lastScrollY.current = currentScrollY;
  };


  

  useEffect(() => {
    const scrollContainer = document.querySelector('.projects-desk-container');
    const target = scrollContainer || window;

    target.addEventListener('scroll', controlNavbar);

    return () => {
      target.removeEventListener('scroll', controlNavbar);
    };
  }, []);



    return(
        <header className={` navbar ${show ? 'visible' : 'hidden'}`} id="navbar">
            <Link to="/" className="home-button navbutton">
                <div className="bottom-layer"></div>
                <div className="top-layer">
                    <div className="home-icon"></div>
                </div>
            </Link>
            <div className="menu-button navbutton" onClick={toggleMenu}>
                <div className="bottom-layer"></div>
                <div className="top-layer">
                    <p>Menu</p>
                </div>
            </div>
            <div className={`overlay-menu${menuOpen ? ' open' : ''}`}>
                <ul>
                <li>
                    <Link 
                        to="/home#main" 
                        smooth
                        onClick={toggleMenu} 
                        className="pageLink">
                        <h3>Work</h3>
                        <div className="underline"></div>
                    </Link>
                </li>
                <li>
                    <Link to="/about" onClick={toggleMenu} className="pageLink">
                        <h3>About</h3>
                        <div className="underline"></div>
                    </Link>
                </li>
                </ul>
                <div className="close" onClick={toggleMenu}>
                    <Button  text={'X'}/>
                </div>
            </div>
        </header>
    )
}

export default Navbar;
