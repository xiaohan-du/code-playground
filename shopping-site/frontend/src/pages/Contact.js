import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactResponse from '../components/ContactResponse';
import './Contact.scss';
import { Helmet } from "react-helmet";
import { ScrollToTopOnMount } from '../functions/ScrollToTopOnMount';
import emailjs from 'emailjs-com';
import Spinner from '../components/Spinner';

const Contact = () => {

    const initialState = {
        showAddress: false,
        showPhoneB: false,
        FullName: '',
        EmailAddress: '',
        PhoneA: null,
        PhoneB: null,
        Message: '',
        AddressA: '',
        AddressB: '',
        City: '',
        State: '',
        Postcode: '',
        Country: '',
        Subject: '',
        showResponse: false,
        showSpinner: false,
        showError: false,
        EmailValid: true,
        PhoneAValid: true,
        PhoneBValid: true,
        MessageValid: true
    };

    const [state, setState] = useState(initialState);

    const validateFields = () => {
        // eslint-disable-next-line
        const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
        if (!state.EmailAddress.trim().length) {
            setState({ ...state, EmailValid: true });
        }
        else {
            setState({ ...state, EmailValid: emailRegex.test(state.EmailAddress.toLowerCase()) });
        }
        if (state.PhoneA != null) {
            state.PhoneA.length > 20 || isNaN(state.PhoneA) ? state.PhoneAValid = false : state.PhoneAValid = true;
        }
        if (state.PhoneB != null) {
            state.PhoneB.length > 20 || isNaN(state.PhoneB) ? state.PhoneBValid = false : state.PhoneBValid = true;
        }
        if (state.Message != null) {
            state.Message.length > 500 ? state.MessageValid = false : state.MessageValid = true;
        }
    }

    const toggleAddress = () => {
        if (state.showAddress === false) {
            setState({ ...state, AddressA: '', AddressB: '', City: '', State: '', Postcode: '', Country: '', Subject: '' });
        }
        setState({ ...state, showAddress: !state.showAddress });
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        setState({ ...state, showSpinner: true });

        const emailParameters = {
            from_name: state.FullName,
            to_name: 'Xiaohan',
            subject: state.Subject,
            message: state.Message,
            email: state.EmailAddress,
            phoneA: state.PhoneA,
            phoneB: state.PhoneB,
            addressA: state.AddressA,
            addressB: state.AddressB,
            city: state.City,
            county: state.State,
            postcode: state.Postcode,
            country: state.Country
        }
        emailjs.send('service_jas6kd9', 'template_01fh4ho', emailParameters, 'user_aRVETyULWNuBVasxNLEFn')
            .then((result) => {
                console.log(result.status, result.text);
                result.status === 200 ? setState({ ...state, showResponse: true, showSpinner: false }) : setState({ ...state, showResponse: false });
            }, (error) => {
                setState({ ...state, showSpinner: false, showError: true })
                console.log(error.text);
            });

    }

    const renderContactForm = () => {
        if (!state.showSpinner && !state.showResponse) {
            return (
                <ContactForm
                    state={state}
                    setState={setState}
                    handleSubmit={handleSubmit}
                    toggleAddress={toggleAddress}
                    validateFields={validateFields}
                    stateInput={state}
                />
            )
        }
        else if (state.showError) {
            return (
                <div>
                    <p>Email error, please message me on Linkedin, thank you.</p>
                </div>
            )
        }
        else if (state.showSpinner && !state.showResponse) {
            return (
                <div className='spinner__wrapper'>
                    <Spinner />
                </div>
            )
        }
        else if (!state.showSpinner && state.showResponse)
            return (
                <ContactResponse />
            )
    }

    return (
        <>
            <ScrollToTopOnMount />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Contact Me - Xiaohan Du</title>
            </Helmet>
            <div className='center-content contact'>
                <div className='contact__form'>
                    <div className='contact-form__chain'>
                        <div className='contact__form__column'>
                            <h1 className='contact__form__title hide-on-mobile'>Contact me</h1>
                            <p className='contact__form__subtitle'>
                                Please use the following form to contact me regarding: <br />
                                What you think of this website? <br />
                                Job opportunities and collaboration <br /> Thank you!
                            </p>
                        </div>
                        <div className='contact__form__column'>
                            <h1 className='contact__form__title hide-on-mobile'>&shy;</h1>
                            <a href='https://github.com/xiaohan-du' className='btn btn__zoom-in btn__log-in'>
                                <img src={require('../images/logos/github.svg').default} alt='github' />
                                <p>My GitHub</p>
                            </a>
                            <a href='https://www.linkedin.com/in/xiaohan-du-055a0713a/' className='btn btn__zoom-in btn__log-in'>
                                <img src={require('../images/logos/linkedin.png').default} alt='github' />
                                <p>My Linkedin</p>
                            </a>
                        </div>
                    </div>
                    {renderContactForm()}
                </div>
            </div>
        </>
    )
}

export default Contact;