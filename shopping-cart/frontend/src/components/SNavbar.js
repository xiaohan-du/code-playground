import React from 'react';
import { Link } from "react-router-dom";
import './SNavbar.scss';

const SNavbar = () => {
    return (
        <nav className="navbar shop-navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <div className="navbar-start">

                    <Link to="/" className="navbar-item">Home</Link>

                    <Link to="/summary" className="navbar-item">Summary</Link>

                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link" href='/' onClick={(e) => {e.preventDefault()}}>
                            More
                        </a>

                        <div className="navbar-dropdown">
                            <a className="navbar-item" href='#/'>
                                About
                            </a>
                            <a className="navbar-item" href='#/'>
                                Jobs
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
};

export default SNavbar;