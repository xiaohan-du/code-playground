import React from 'react';
import './ContactForm.scss';

const ContactForm = () => {
    return (
        <>
            <form className='contact-form'>
                <h1 className='contact-form__title'>Contact us</h1>
                <p className='contact-form__text'>
                    Populo facilisi nam no, dolor deleniti deseruisse ne cum, nam quodsi aliquam eligendi ne. Ferri
                    euismod accusata te net, summo accumsan at vix.
                </p>
                <div>
                    <div className='contact-form__chain'>
                        <div className='flex-column contact-form__input-medium'>
                            <label>Full name</label>
                            <input/>
                        </div>
                        <div className='flex-column contact-form__input-medium'>
                            <label>Email address</label>
                            <input />
                        </div>
                    </div>
                    <div className='flex-column'>
                        <label>Phone number 01<span className='note note-phone'> - optional</span></label>
                        <input />
                        <button className='btn btn__light btn__full up-down-space'>Add new phone number</button>
                    </div>
                    <div className='flex-column'>
                        <div className='label-set'>
                            <label>Message</label>
                            <label className='note'>Maximum text length is 500 characters</label>
                        </div>
                        <textarea name="message" rows="10" cols="30"></textarea>
                        <div className='flex-row up-down-space'>
                            <input type="checkbox" id="address"></input>
                            <label for='address'>Add address details</label>
                        </div>
                    </div>
                    <div>
                        <div className='contact-form__chain'>
                            <div className='flex-column contact-form__input-medium'>
                                <label>Address line 1</label>
                                <input />
                            </div>
                            <div className='flex-column contact-form__input-medium'>
                                <label>Address line 2<span className='note note-phone'> - optional</span></label>
                                <input />
                            </div>
                        </div>
                        <div className='contact-form__chain'>
                            <div className='flex-column contact-form__input-small'>
                                <label>City/Town</label>
                                <input />
                            </div>
                            <div className='flex-column contact-form__input-small'>
                                <label>State/County</label>
                                <input />
                            </div>
                            <div className='flex-column contact-form__input-small'>
                                <label>Postcode</label>
                                <input />
                            </div>
                            <div className='flex-column contact-form__input-small'>
                                <label>Country</label>
                                <input />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className='btn btn__primary btn__full'>Add new phone number</button>
                    </div>

                </div>
            </form>
        </>
    )
}

export default ContactForm;