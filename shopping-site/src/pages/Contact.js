import React from 'react';
import ContactForm from '../components/ContactForm';
import contactImg from '../images/Img_Contact.png';
import './Contact.scss';

const Contact = () => {
    return (
        <>
            <div className='center-content contact'>
                <ContactForm />
                <img /* className='contact__img' */ src={contactImg} alt='contact'/>
            </div>
        </>
    )
}

export default Contact;