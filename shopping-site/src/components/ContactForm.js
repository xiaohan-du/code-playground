import React, { useState } from 'react';
import './ContactForm.scss';
import { ReactComponent as PaperPlane } from '../images/Icon_Submit.svg';

const ContactForm = () => {

    const [showSecondNo, setShowSecondNo] = useState(false);
    const [showAddress, setShowAddress] = useState(false);

    const handleAddPhoneClick = () => {
        setShowSecondNo(true);
    }

    const handleAddressClick = () => {
        setShowAddress(true);
    }

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
                            <input />
                        </div>
                        <div className='flex-column contact-form__input-medium'>
                            <label>Email address</label>
                            <input />
                        </div>
                    </div>
                    <div className='flex-column'>
                        <label>Phone number 01<span className='note note-phone'> - optional</span></label>
                        <input />
                    </div>
                    {showSecondNo ? <div className='flex-column'>
                        <label>Phone number 02<span className='note note-phone'> - optional</span></label>
                        <input />
                    </div> : null}
                    <button onClick={handleAddPhoneClick} className='btn btn__light btn__full up-down-space'>Add new phone number</button>
                    <div className='flex-column'>
                        <div className='label-set'>
                            <label>Message</label>
                            <label className='note'>Maximum text length is 500 characters</label>
                        </div>
                        <textarea name="message" rows="10" cols="30"></textarea>
                        <div className='flex-row up-down-space'>
                            <input onClick={handleAddressClick} type="checkbox" id="address"></input>
                            <label for='address'>Add address details</label>
                        </div>
                    </div>
                    {showAddress ? <div>
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