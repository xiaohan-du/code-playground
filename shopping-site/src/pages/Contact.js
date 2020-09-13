import React from 'react';
import ContactForm from '../components/ContactForm';
import contactImg from '../images/Img_Contact.png';
import './Contact.scss';

const Contact = () => {
    return (
        <>
            <div className='center-content contact'>
                <ContactForm />
                <div style={{backgroundImage: `url(${contactImg})`}} className='contact__img' ></div>
            </div>
        </>
    )
}

export default Contact;