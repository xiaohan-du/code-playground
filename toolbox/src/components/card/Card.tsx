import React from 'react';
import './Card.scss';
import ICard from '../../interfaces/ICard';

interface Props {
  card: ICard;
}

const Card = ({ card: { id, imgPath, title, content, icon1, icon2, price } }: Props) => {
  return (
    <>
      <div className="card" key={id}>
        <div style={{ backgroundImage: `url(${imgPath})` }} className='card-img'>
          {/* <img src={imgPath} className="card-img" alt="img" /> */}
          <div className="card-body">
            <div className='card-section-title'>
              <h5 className="card-title">{title}</h5>
            </div>
            <div className='card-section-text'>
              <p className="card-text">{content}</p>
            </div>
            <div className="card-section-icons">
              <img src={icon1} alt="icon1" />
              <img src={icon2} alt="icon2" />
            </div>
            <div className='card-section-price'>
              £{price}
            </div>
            <div className='card-section-buttons'>
              <button type='button' className='btn card-btn-add'>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Card;