import { useEffect, useState } from 'react';
import './Card.scss';
import ICard from '../../interfaces/ICard';

interface Props {
  card: ICard;
}

const Card = ({ card: { isPanel, imgPath, title, content, icon1, icon2, icon3, price, quote, calculateTotalPrice, calculateTotalQuotes } }: Props) => {
  const [btnText, setBtnText] = useState<string>('Add to cart');
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [quotePrice, setQuotePrice] = useState(price);
  const [quoteNumber, setQuoteNumber] = useState(quote);

  useEffect(() => {
    setBtnText(isAdded ? 'Remove from cart' : 'Add to cart');
  }, [isAdded]);

  const handleClick = (): void => {
    calculateTotalPrice(quotePrice);
    calculateTotalQuotes(quoteNumber);
    setIsAdded(value => !value);
    setQuotePrice(value => -value);
    setQuoteNumber(isAdded ? 1 : -1);
  };

  return (
    <>
      <div className="card ms-2 me-2">
        <div style={{ backgroundImage: `url(${imgPath})` }} className='card-img'>
          <div className="card-body">
            {isPanel
              ?
              <div className='card-panel-title'>{title}</div>
              :
              <div className='card-section-title'>{title}</div>
            }
            <div className='card-section-text'>{content}</div>
            {isPanel ?
              <div className="mt-3">
                <div className='card-panel-content'>
                  <div className='card-panel-text'>{icon1}</div>
                  <div className='card-panel-text'>{icon2}</div>
                  <div className='card-panel-text'>{icon3}</div>
                </div>
              </div>
              :
              <div className="card-section-icons mt-3">
                <div>
                  <img className='card-section-icon' src={icon1} alt="icon1" />
                  <img className='card-section-icon' src={icon2} alt="icon2" />
                  <img className='card-section-icon' src={icon3} alt="icon3" />
                </div>
              </div>
            }
            <div className='card-section-price'>
              {isPanel ? null : `Price: £${price}`}
            </div>
            <div className='card-section-buttons'>
              {isPanel ? null : <button type='button'
                className='btn toolbox-btn toolbox-btn-basic card-btn-add'
                onClick={handleClick}>
                {btnText}
              </button>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Card;