import IHeader from '../../interfaces/IHeader';
import styles from './Header.module.scss';

interface Props {
  header: IHeader;
}

const Header = ({ header: { totalQuote, totalPrice } }: Props) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            You have chosen <span>{totalQuote <= 1 ? `${totalQuote} cover` : `${totalQuote} covers`}</span>
          </div>
          <div className={styles.headerContentSubtitle}>
            Your price: <span className={styles.headerNumber}>£{totalPrice}</span>
          </div>
        </div>
      </div>
    </>
  )
};

export default Header;
