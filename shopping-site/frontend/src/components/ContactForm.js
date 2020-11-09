import React from 'react';
import './ContactForm.scss';

const ContactForm = ({ setState, handleSubmit, toggleAddress, validateFields, 
    stateInput: {EmailValid, PhoneAValid, PhoneBValid, showPhoneB, MessageValid, showAddress} }) => {

    return (
        <>
            <div className='contact-form'>
                <form onSubmit={handleSubmit} id='contact-form'>
                    <div>
                        <div className='contact-form__chain'>
                            <div className='flex-column contact-form__input-medium'>
                                <label htmlFor='FullName'>Full name</label>
                                <input onInput={e => setState({ FullName: e.target.value })} id='FullName' required />
                            </div>
                            <div className='flex-column contact-form__input-medium'>
                                <label htmlFor='EmailAddress'>Email address</label>
                                <input onInput={e => setState({ EmailAddress: e.target.value, EmailValid: true })} id='EmailAddress' required />
                                {EmailValid ? null : <label className='error'>Invalid Email</label>}
                            </div>
                        </div>
                        <div className='flex-column'>
                            <label htmlFor='Subject'>Subject</label>
                            <input onInput={e => setState({ Subject: e.target.value })} id='Subject' required />
                        </div>
                        <div className='flex-column'>
                            <label htmlFor='PhoneA'>Phone number 01<span className='note note-phone'> - optional</span></label>
                            <input onInput={e => setState({ PhoneA: e.target.value, PhoneAValid: true })} id='PhoneA' />
                            {PhoneAValid ? null : <label className='error'>Invalid phone number</label>}
                        </div>
                        {showPhoneB ? <div className='flex-column'>
                            <label htmlFor='PhoneB'>Phone number 02<span className='note note-phone'> - optional</span></label>
                            <input onInput={e => setState({ PhoneB: e.target.value, PhoneBValid: true })} id='PhoneB' />
                            {PhoneBValid ? null : <label className='error'>Invalid phone number</label>}
                        </div> : null}
                        <button type='button' onClick={() => setState({ showPhoneB: true })} className='btn btn__light btn__full top-bottom-space'>Add new phone number</button>
                        <div className='flex-column'>
                            <div className='label-set'>
                                <label htmlFor='Message'>Message</label>
                                <label className='note'>Maximum text length is 500 characters</label>
                            </div>
                            <textarea
                                onInput={e => setState({ Message: e.target.value, MessageValid: true })}
                                className='contact-form__message'
                                name="Message"
                                rows="10"
                                cols="30"
                                id='Message'
                                required></textarea>
                            {MessageValid ? null : <label className='error'>Message cannot exceed 500 characters</label>}
                            <div className='flex-row top-bottom-space'>
                                <input onClick={toggleAddress} type="checkbox" id="address"></input>
                                <label className='checkbox__label' htmlFor='address'>Add address details</label>
                            </div>
                        </div>
                        {showAddress ? <div>
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
                        <div className="g-recaptcha" data-sitekey="6LcqftEZAAAAADRm6QgnD3mxlU8-p8TVRZRSDi91"></div>
                        <div>
                            <button className='btn btn__primary btn__full' onClick={validateFields}>
                            <img src={require('../images/icons/Icon_Submit.svg').default} className='icon' alt='PaperPlane' />
                                <span>Submit</span>
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm;