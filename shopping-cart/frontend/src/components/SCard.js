import React from 'react';
import './SCard.scss';
import camera from '../images/camera.png';
import iphone from '../images/iphone.png';
import headphone from '../images/headphone.png';
import controller from '../images/controller.png';
import laptop from '../images/laptop.png';
import watch from '../images/watch.png';

const images = [camera, iphone, headphone, controller, laptop, watch];

const SCard = ({ id, testid, title, subtitle, price, imgIndex, quantity, changeItemQuantity, itemTotalPrice }) => {

    return (
        <>
            <div className="card shop-card" key={id} data-testid={testid}>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src={images[imgIndex]} alt="Placeholder" />
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