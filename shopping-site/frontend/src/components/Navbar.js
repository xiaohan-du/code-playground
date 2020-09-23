import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss';
import Logo from '../images/logos/Logo.png';

const Navbar = () => {

    return (
        <div className='navbar__wrapper'>
            <nav className='center-content navbar'>
                <a href='#/'>
                    <img src={Logo} className='navbar__logo' href='#' alt='logo'/>
                    <p>Xiaohan Du</p>
                </a>
                <div className='navbar__links'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about-us">My Career</Link>
                        </li>
                        <li>
                            <Link to="/phd">My PhD</Link>
                        </li>
                        <li>
                            <Link to="/contact-us">Contact Me</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;