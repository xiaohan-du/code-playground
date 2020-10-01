import React from 'react';
import IStores from '../interfaces/IStores';
import './Card.scss';

interface Props {
    store: IStores
}

const Card = ({ store }: Props) => {
    return (
        <>
            <div className="card" key={store.id}>
                <div className='card-body'>
                    <h5 className="card-title">
                        {store.title}
                    </h5>
                    <img className="card-img card-img-top" src={store.imgPath} alt="Card cap" />
                    <h6 className="card-text">
                        {store.address}
                    </h6>
                    <p className='card-text'>
                        {store.postcode}
                    </p>
                    <p className="card-text">
                        {store.messageA}
                    </p>
                    <p className='card-text'>
                        {store.messageB}
                    </p>
                </div>
                <div className='card-footer'>
                    <a href="#/" className="btn  btn-outline-primary">{store.btnText}</a>
                    <p className='card-terms'>
                        * {store.terms}
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card; 