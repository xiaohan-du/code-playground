import { useEffect, useState } from 'react';
import './Card.scss';
import ICard from '../../interfaces/ICard';

interface Props {
  card: ICard;
}

const Card = ({ card: { imgPath, title, content, icon1, icon2, price, calculateTotalPrice } }: Props) => {
  const [btnText, setBtnText] = useState<string>('Add to cart');
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [quotePrice, setQuotePrice] = useState(price);

  useEffect(() => {
    setBtnText(isAdded ? 'Remove from cart' : 'Add to cart');
  }, [isAdded]);

  const handleClick = (): void => {
    calculateTotalPrice(quotePrice);
    setIsAdded(value => !value);
    setQuotePrice(value => -value);
  };

  return (
    <>
      <div className="card">
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
              <button type='button' className='btn card-btn-add' onClick={handleClick}>{btnText}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Card;