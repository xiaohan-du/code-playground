import React from 'react';
import './SCard.scss';

const SCard = ({ id, title, subtitle, price, quantity, addToCart, itemTotalPrice }) => {

    return (
        <>
            <div className="card shop-card" key={id}>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{id}. {title}</p>
                            <p className="subtitle is-6">{subtitle}</p>
                        </div>
                    </div>

                    <div className="shop-card--footer">
                        <div>
                            <p>Price: £{price}</p>
                            <p>Quantity: {quantity}</p>
                            <p>Total price: {itemTotalPrice}</p>
                        </div>
                        <div className='shop-card--btn-set'>
                            <div className='add-minus'>
                                <button
                                    className='button is-primary is-large square'
                                    onClick={() => addToCart(id, 1)}>
                                    + 1
                                </button>
                                <button
                                    className='button is-primary is-large square'
                                    onClick={() => addToCart(id, 1)}>
                                    - 1
                                </button>
                            </div>
                            <button
                                className='button is-warning is-large'>
                                Clear
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SCard;