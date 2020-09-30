import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss';
import Logo from '../images/logos/Logo.png';

const Navbar = () => {

    const burgerRef = useRef();

    const handleClick = () => {
        burgerRef.current.checked = false;
    }

    return (
        <nav className='navbar is-fixed-top' role="navigation" aria-label="main navigation">
            <div className='center-content navbar__wrapper'>
                <div className="navbar-brand">
                    <a href='#/'>
                        <img src={Logo} className='navbar__logo' href='#' alt='logo' />
                        <p>Xiaohan Du</p>
                    </a>
                    <label role="button"
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        htmlFor="nav-toggle-state">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </label>
                </div>
                <input type="checkbox" id="nav-toggle-state" ref={burgerRef} />
                <div className="navbar-menu">
                    <div className='navbar-end'>
                        <Link className="navbar-item" onClick={handleClick} to="/">Home</Link>
                        <Link className="navbar-item" onClick={handleClick} to="/my-career">My Career</Link>
                        <Link className="navbar-item" onClick={handleClick} to="/my-phd">My PhD</Link>
                        <Link className="navbar-item" onClick={handleClick} to="/my-projects">My Projects</Link>
                        <Link className="navbar-item" onClick={handleClick} to="/contact-me">Contact Me</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;