import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss';
import { ReactComponent as Logo } from '../images/Logo.svg';

const Navbar = () => {

    return (
        <div className='navbar__wrapper'>
            <nav className='center-content navbar'>
                <a href='#/'>
                    <Logo className='navbar__logo' href='#' />
                </a>
                <div className='navbar__links'>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/about-us">COMPONENT LIBRARY</Link>
                        </li>
                        <li>
                            <Link to="/contact-us">CONTACT ME</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;