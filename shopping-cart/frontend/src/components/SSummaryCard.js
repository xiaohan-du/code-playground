import React from 'react';
import './SSummaryCard.scss';

const SSummaryCard = ({id, title, subtitle, price, quantity, itemTotalPrice}) => {
    return (
        <>
            <div className="card shop-summarycard" key={id}>
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
                    </div>
                </div>
            </div>
        </>
    )
}

export default SSummaryCard;