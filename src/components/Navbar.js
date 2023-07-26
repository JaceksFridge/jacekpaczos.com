import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }
    
    return(
        <header className="navbar">
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
                    <Link to="/home" onClick={toggleMenu}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="/about" onClick={toggleMenu}>
                        About
                    </Link>
                </li>
                </ul>
                <div className="close" onClick={toggleMenu}>
                    X
                </div>
            </div>
        </header>
    )
}

export default Navbar;
