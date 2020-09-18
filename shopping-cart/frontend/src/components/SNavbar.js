import React from 'react';
import { Link } from "react-router-dom";
import './SNavbar.scss';

const SNavbar = () => {
    return (
        <nav className="navbar shop-navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <div className="navbar-start">

                    <Link to="/" className="navbar-item">Home</Link>

                    <Link to="/summary" className="navbar-item">Cart</Link>

                </div>
            </div>
        </nav>
    )
};

export default SNavbar;