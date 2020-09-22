import React, { useReducer } from 'react';
import ContactForm from '../components/ContactForm';
import ContactResponse from '../components/ContactResponse';
import contactImg from '../images/Img_Contact.png';
import './Contact.scss';

const Contact = () => {

    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
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
            showResponse: false,
            EmailValid: true,
            PhoneAValid: true,
            PhoneBValid: true,
            MessageValid: true

        }
    )

    const validateFields = () => {
        // eslint-disable-next-line
        const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+[^<>()\.,;:\s@\"]{2,})$/;
        if (!state.EmailAddress.trim().length) {
            setState({ EmailValid: true });
        }
        else {
            setState({ EmailValid: emailRegex.test(state.EmailAddress.toLowerCase()) });
        };
        if (state.PhoneA != null) {
            state.PhoneA.length > 20 || isNaN(state.PhoneA) ? state.PhoneAValid = false : state.PhoneAValid = true;
        };
        if (state.PhoneB != null) {
            state.PhoneB.length > 20 || isNaN(state.PhoneB) ? state.PhoneBValid = false : state.PhoneBValid = true;
        };
        if (state.Message != null) {
            state.Message.length > 500 ? state.MessageValid = false : state.MessageValid = true;
        };
    }

    const toggleAddress = () => {
        if (state.showAddress === false) {
            setState({ AddressA: '', AddressB: '', City: '', State: '', Postcode: '', Country: '' });
        };
        setState({ showAddress: !state.showAddress });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch('https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(response => {
            console.log(response);
            response.ok === true ? setState({ showResponse: true }) : setState({ showResponse: false });
            return response.json();
        }).then(data => {
            console.log(data);
        })
    }

    return (
        <>
            <div className='center-content contact'>
                <div className='contact__form'>
                    <h1 className='contact__form__title'>Contact us</h1>
                    <p className='contact__form__subtitle'>
                        Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri
                        euismod accusata te net, summo accumsan at vix.
                    </p>

                    {state.showResponse ? <ContactResponse />
                        : <ContactForm
                            setState={setState}
                            handleSubmit={handleSubmit}
                            toggleAddress={toggleAddress}
                            validateFields={validateFields}
                            showAddress={state.showAddress}
                            showPhoneB={state.showPhoneB}
                            FullName={state.FullName}
                            EmailAddress={state.EmailAddress}
                            PhoneA={state.PhoneA}
                            PhoneB={state.PhoneB}
                            Message={state.Message}
                            AddressA={state.AddressA}
                            AddressB={state.AddressB}
                            City={state.City}
                            State={state.State}
                            Postcode={state.Postcode}
                            Country={state.Country}
                            EmailValid={state.EmailValid}
                            PhoneAValid={state.PhoneAValid}
                            PhoneBValid={state.PhoneBValid}
                            MessageValid={state.MessageValid} />
                    }
                </div>
                <div style={{ backgroundImage: `url(${contactImg})` }} className='contact__img' ></div>
            </div>
        </>
    )
}

export default Contact;