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
            showResponse: false
        }
    )

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
                            Country={state.Country} />
                    }
                </div>
                <div style={{ backgroundImage: `url(${contactImg})` }} className='contact__img' ></div>
            </div>
        </>
    )
}

export default Contact;