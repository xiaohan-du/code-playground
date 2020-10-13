import React from 'react';
import './Card.scss';

const Card = ({ title }) => {
    return (
        <>
            <a href='xiaohan-du.netlify.app' className="card">
                <div className="card-image">
                    <img src={require('../images/projects/shopping-cart.png')} alt="Placeholder" />
                    <div className="card-image-description is-size-2">
                        {title}
                    </div>
                </div>
            </a>
        </>
    )
}

export default Card;