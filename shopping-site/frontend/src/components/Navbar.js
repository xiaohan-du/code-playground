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
                        <Link className="navbar-item" onClick={handleClick} to="/my-medium">My Medium</Link>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <div className="navbar-link">
                                My Projects
                            </div>

                            <div className="navbar-dropdown">
                            <Link className="navbar-item" onClick={handleClick} to="/my-projects/learning-path">
                                    A React Learning Path
                                </Link>
                                <Link className="navbar-item" onClick={handleClick} to="/my-projects/custom-hooks">
                                    Custom Hooks
                                </Link>
                                <Link className="navbar-item" onClick={handleClick} to="/my-projects/components-library">
                                    Components Library
                                </Link>
                            </div>
                        </div>
                        <Link className="navbar-item" onClick={handleClick} to="/contact-me">Contact Me</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;