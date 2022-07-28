import IHeader from '../../interfaces/IHeader';
import './Header.scss';

interface Props {
  header: IHeader;
}

const Header = ({ header: { quoteNumber, totalPrice } }: Props) => {
  return (
    <>
      <div className='header'>
        <div className='header-content'>
          <div>
            You have <span className='header-number'>{quoteNumber}</span> covers to choose from
          </div>
          <div className='header-content-subtitle'>
            Your price: <span className='header-number'>£{totalPrice}</span>
          </div>
        </div>
      </div>
    </>
  )
};

export default Header;
