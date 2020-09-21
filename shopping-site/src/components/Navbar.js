import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss';
import Logo from '../images/Logo.png';

const Navbar = () => {

    return (
        <div className='navbar__wrapper'>
            <nav className='center-content navbar'>
                <a href='#/'>
                    <img src={Logo} className='navbar__logo' href='#' />
                    <p>Xiaohan Du</p>
                </a>
                <div className='navbar__links'>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/about-us">STATIC PAGE</Link>
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