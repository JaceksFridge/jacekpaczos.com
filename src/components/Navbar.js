import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        document.body.style.overflow = !menuOpen ? 'hidden' : 'auto';
    }


    const [show, setShow] = useState(true)

    const lastScrollY = useRef(0)

    const controlNavbar = () => {
        const currentScrollY = window.scrollY
        if (currentScrollY < lastScrollY.current) {
            setShow(true)
        } else if (currentScrollY > 100) {
            setShow(false)
        }
        lastScrollY.current = currentScrollY
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)

        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])



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
                        to="/home" 
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
