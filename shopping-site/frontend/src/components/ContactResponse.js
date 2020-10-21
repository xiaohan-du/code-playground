import React from 'react';
import './ContactResponse.scss';
import { Link } from "react-router-dom";
import { ScrollToTopOnMount } from '../functions/ScrollToTopOnMount';

const ContactResponse = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <div className='contact-response'>
                <div className='contact-response__wrapper'>
                    <div className='contact-response__icon-bg'>
                        <img src={require('../images/icons/Icon_Valid.svg').default} className="contact-response__icon" alt='Valid' />
                    </div>
                    <p className='contact-response__title'>Your message has been sent</p>
                    <p className='contact-response__subtitle'>Thank you for your time</p>
                    <Link to="/">
                        <button className='btn btn__primary'>
                            Homepage
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ContactResponse;