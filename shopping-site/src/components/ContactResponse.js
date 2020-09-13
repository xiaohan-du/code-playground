import React from 'react';
import './ContactResponse.scss';
import { ReactComponent as Valid } from '../images/Icon_Valid.svg';

const ContactResponse = () => {
    return (
        <>
            <div className='contact-response '>
                <div className='contact-response__wrapper'>
                    <Valid className='contact-response__icon' />
                    <p>Your message has been sent</p>
                    <p>We will be in contact with you within 24 hours.</p>
                </div>
            </div>
        </>
    )
}

export default ContactResponse;