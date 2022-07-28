import React from 'react';
import IHeader from '../../interfaces/IHeader';
import './Header.scss';

interface Props {
  header: IHeader;
}

const Header = ({ header: { quoteNumber, totalPrice, handlePayment } }: Props) => {
  return (
    <>
      <div className='header'>
        <div className='header-content'>
          <div>
            You have <span className='header-number'>{quoteNumber}</span> quotes to choose from
          </div>
          <div className='header-content-subtitle'>
            Total price is <span className='header-number'>£{totalPrice}</span>
            <div>
              <button className='btn btn-outline-light mb-3 fs-4' onClick={handlePayment}>Go to payment</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Header;