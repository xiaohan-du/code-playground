import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss';
import { ReactComponent as Logo } from '../images/Logo.svg';

const Navbar = () => {

    return (
        <nav className='center-content center-vertically navbar'>
            <Logo className='navbar__logo' />
            <ul className='navbar__links center-vertically'>
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
        </nav>
    )
}

export default Navbar;