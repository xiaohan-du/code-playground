import React from 'react';
import './FlipCard.scss';

const FlipCard = ({ imgId, imgPath, title, content }) => {

    return (
        <>
            <div key={imgId} className="card flipcard">
                <div className='flipcard__inner'>
                    <div className='flipcard__front'>
                        <div className="card-image">
                            <figure className="image is-square">
                                <img src={imgPath} alt="Placeholder" />
                            </figure>
                        </div>
                    </div>
                    <div className='flipcard__back'>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-content">
                                    <p className="title is-3">{title}</p>
                                </div>
                            </div>

                            <div className="content">
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