import React, { useReducer } from 'react';
import './ContactForm.scss';
import { ReactComponent as PaperPlane } from '../images/Icon_Submit.svg';

const ContactForm = () => {

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
            Country: ''
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
            return response.json();
        }).then(data => {
            console.log(data);
        })
    }

    return (
        <>
            <form className='contact-form' onSubmit={handleSubmit}>
                <h1 className='contact-form__title'>Contact us</h1>
                <p className='contact-form__text'>
                    Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri
                    euismod accusata te net, summo accumsan at vix.
                </p>
                <div>
                    <div className='contact-form__chain'>
                        <div className='flex-column contact-form__input-medium'>
                            <label htmlFor='FullName'>Full name</label>
                            <input onInput={e => setState({ FullName: e.target.value })} id='FullName' />
                        </div>
                        <div className='flex-column contact-form__input-medium'>
                            <label htmlFor='EmailAddress'>Email address</label>
                            <input onInput={e => setState({ EmailAddress: e.target.value })} id='EmailAddress' />
                        </div>
                    </div>
                    <div className='flex-column'>
                        <label htmlFor='PhoneA'>Phone number 01<span className='note note-phone'> - optional</span></label>
                        <input onInput={e => setState({ PhoneA: e.target.value })} id='PhoneA' />
                    </div>
                    {state.showPhoneB ? <div className='flex-column'>
                        <label htmlFor='PhoneB'>Phone number 02<span className='note note-phone'> - optional</span></label>
                        <input onInput={e => setState({ PhoneB: e.target.value })} id='PhoneB' />
                    </div> : null}
                    <button type='button' onClick={() => setState({ showPhoneB: true })} className='btn btn__light btn__full top-bottom-space'>Add new phone number</button>
                    <div className='flex-column'>
                        <div className='label-set'>
                            <label htmlFor='Message'>Message</label>
                            <label className='note'>Maximum text length is 500 characters</label>
                        </div>
                        <textarea
                            onInput={e => setState({ Message: e.target.value })}
                            name="Message"
                            rows="10"
                            cols="30"
                            id='Message'></textarea>
                        <div className='flex-row top-bottom-space'>
                            <input onClick={toggleAddress} type="checkbox" id="address"></input>
                            <label className='checkbox__label' htmlFor='address'>Add address details</label>
                        </div>
                    </div>
                    {state.showAddress ? <div>
                        <div className='contact-form__chain'>
                            <div className='flex-column contact-form__input-medium'>
                                <label htmlFor='AddressA'>Address line 1</label>
                                <input onInput={e => setState({ AddressA: e.target.value })} id='AddressA' />
                            </div>
                            <div className='flex-column contact-form__input-medium'>
                                <label htmlFor='AddressB'>Address line 2<span className='note note-phone'> - optional</span></label>
                                <input onInput={e => setState({ AddressB: e.target.value })} id='AddressB' />
                            </div>
                        </div>
                        <div className='contact-form__chain contact-form__address'>
                            <div className='flex-column contact-form__input-small col-a'>
                                <label htmlFor='City'>City/Town</label>
                                <input onInput={e => setState({ City: e.target.value })} id='City' />
                            </div>
                            <div className='flex-column contact-form__input-small col-b'>
                                <label htmlFor='State'>State/County</label>
                                <input onInput={e => setState({ State: e.target.value })} id='State' />
                            </div>
                            <div className='flex-column contact-form__input-small col-a'>
                                <label htmlFor='Postcode'>Postcode</label>
                                <input onInput={e => setState({ Postcode: e.target.value })} id='Postcode' />
                            </div>
                            <div className='flex-column contact-form__input-small col-b'>
                                <label htmlFor='Country'>Country</label>
                                <input onInput={e => setState({ Country: e.target.value })} id='Country' />
                            </div>
                        </div>
                    </div> : null}
                    <div>
                        <button className='btn btn__primary btn__full'>
                            <PaperPlane className='icon' />
                            <span>Submit</span>
                        </button>
                    </div>

                </div>
            </form>
        </>
    )
}

export default ContactForm;