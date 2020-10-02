import React from 'react';
import './FlipCard.scss';

const FlipCard = ({img: { id, path, title, content }}) => {

    return (
        <>
            <div key={id} className="card flipcard">
                <div className='flipcard__inner'>
                    <div className='flipcard__front'>
                        <div className="card-image">
                            <figure className="image is-square">
                                <img src={path} alt="Placeholder" />
                            </figure>
                        </div>
                    </div>
                    <div className='flipcard__back'>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="flipcard__title">{title}</p>
                                </div>
                            </div>

                            <div className="flipcard__content">
                                {content}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FlipCard;