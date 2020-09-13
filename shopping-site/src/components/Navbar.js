import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss';
import { ReactComponent as Logo } from '../images/Logo.svg';

const Navbar = () => {

    return (
        <div className='navbar__wrapper'>
            <nav className='center-content center-vertically navbar'>
                <a href='#/'>
                    <Logo className='navbar__logo' href='#' />
                </a>
                <div className='navbar__links'>
                    <ul className='center-vertically'>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/about-us">ABOUT US</Link>
                        </li>
                        <li>
                            <Link to="/contact-us">CONTACT US</Link>
                        </li>
                        <li>
                            <button className='btn btn__light'>Log in</button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;