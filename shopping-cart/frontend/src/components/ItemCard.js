import React from 'react';
import './ItemCard.scss';

const ItemCard = ({ id, title, subtitle, price }) => {
    return (
        <>
            <div className="card item-card" key={id}>
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder" />
                    </figure>
                </div>
                <div className="card-content">
                    <div className="media">
                        <div className="media-content">
                            <p className="title is-4">{title}</p>
                            <p className="subtitle is-6">{subtitle}</p>
                        </div>
                    </div>

                    <div className="content">
                        <p>Price: {price}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ItemCard;