import React from 'react';
import IHeader from '../../interfaces/IHeader';
import './Header.scss';

interface Props {
  header: IHeader;
}

const Header = ({ header: { quoteNumber } }: Props) => {
  return (
    <>
      <div className='header'>
        <div>
          You have <span className='header-quote-number'>{quoteNumber}</span> quotes to choose from
        </div>
      </div>
    </>
  )
};

export default Header;