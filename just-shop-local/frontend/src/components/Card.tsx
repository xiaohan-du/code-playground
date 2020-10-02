import React from 'react';
import IStores from '../interfaces/IStores';
import './Card.scss';

interface Props {
    store: IStores
}

const Card = ({ store: {id, title, imgPath, address, postcode, messageA, messageB, btnText, terms} }: Props) => {
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
                    <a href="#/" className="btn  btn-outline-primary">{btnText}</a>
                    <p className='card-terms'>
                        * {terms}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card; 