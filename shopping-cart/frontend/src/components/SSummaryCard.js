import React from 'react';
import './SSummaryCard.scss';
import camera from '../images/camera.png';
import iphone from '../images/iphone.png';
import headphone from '../images/headphone.png';
import controller from '../images/controller.png';
import laptop from '../images/laptop.png';
import watch from '../images/watch.png';

const images = [camera, iphone, headphone, controller, laptop, watch];

const SSummaryCard = ({id, title, subtitle, price, imgIndex, quantity, itemTotalPrice}) => {
    return (
        <>
            <div className="card shop-summarycard" key={id}>
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

                    <div className="shop-summarycard--footer">
                        <div>
                            <p>Price: £{price}</p>
                            <p>Quantity: {quantity}</p>
                            <p>Total price: {itemTotalPrice}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SSummaryCard;