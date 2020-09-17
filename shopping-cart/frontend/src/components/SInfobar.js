import React from 'react';
import { Link } from "react-router-dom";
import cart from '../images/cart.png';
import './SInfobar.scss';

const SInfobar = ({totalPrice}) => {
    return (
        <nav className="navbar infobar" role="navigation" aria-label="main navigation">
            <div className="navbar-menu">
                <div className="navbar-start">

                    <div>Total Price: {totalPrice}</div>

                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to="/summary" className="navbar-item"><img src={cart} alt='cart' /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default SInfobar;