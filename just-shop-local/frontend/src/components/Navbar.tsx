import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar navbar-light border-bottom">
            <a href="#/" className='d-flex justify-content-center align-items-center'>
                <img className='home-logo' src={require('../images/just_shop_local_logo.png')} alt='logo' />
            </a>
        </nav>
    )
}

export default Navbar;