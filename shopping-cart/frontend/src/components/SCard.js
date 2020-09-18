import React from 'react';
import './SCard.scss';

const SCard = ({ id, testid, title, subtitle, price, quantity, changeItemQuantity, itemTotalPrice }) => {

    return (
        <>
            <div className="card shop-card" key={id} data-testid={testid}>
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
                            <p className='shop-card--price'>Price: £{price}</p>
                            <p className='shop-card--quantity'>Quantity: {quantity}</p>
                            <p className='shop-card--total-price'>Total price: {itemTotalPrice}</p>
                        </div>
                        <div className='shop-card--btn-set'>
                            <div className='add-minus'>
                                <button
                                    className='button is-primary is-large square add'
                                    onClick={() => changeItemQuantity(id, 0, 'add')}>
                                    + 1
                                </button>
                                <button
                                    className='button is-primary is-large square remove'
                                    onClick={() => changeItemQuantity(id, 0, 'remove')}>
                                    - 1
                                </button>
                            </div>
                            <button className='button is-warning is-large clear'
                                onClick={() => changeItemQuantity(id, 0, 'clear')}>
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