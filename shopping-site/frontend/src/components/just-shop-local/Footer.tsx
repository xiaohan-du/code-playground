import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <>
            <div className='footer d-flex justify-content-center align-items-center border-top'>
                <div className='row w-100 no-gutters'>
                    <div className='col d-flex justify-content-center'>
                        <button className='btn btn-primary btn-points'><span className='h3'>Get Points</span></button>
                    </div>
                    <div className='col d-flex justify-content-center'>
                        <button className='btn btn-primary'><span className='h3'>Redeem Points</span></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;