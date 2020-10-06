import React, { useState } from 'react';
import IStores from '../interfaces/IStores';
import './Card.scss';
import ScanQR from '../functions/ScanQR';

interface Props {
    store: IStores
}

const Card = ({ store: { id, title, imgPath, address, postcode, messageA, messageB, btnText, terms } }: Props) => {

    const [showCam, setShowCam] = useState(false);

    return (
        <>
            <div className="card" key={id}>
                <div className='card-body'>
                    <h5 className="card-title">
                        {title}
                    </h5>
                    <img className="card-img card-img-top" src={imgPath} alt="Card cap" />
                    <h6 className="card-text">
                        {address}
                    </h6>
                    <p className='card-text'>
                        {postcode}
                    </p>
                    <p className="card-text">
                        {messageA}
                    </p>
                    <p className='card-text'>
                        {messageB}
                    </p>
                </div>
                <div className='card-footer'>
                    <a href="#/" className="btn btn-outline-primary" onClick={() => setShowCam(true)}>
                        <span className='h3 mb-0'>{btnText}</span>
                    </a>
                    <p className='card-terms'>
                        * {terms}
                    </p>
                    {ScanQR(showCam)}
                </div>
            </div>
        </>
    )
}

export default Card; 