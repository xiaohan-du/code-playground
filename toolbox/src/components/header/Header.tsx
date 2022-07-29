import IHeader from '../../interfaces/IHeader';
import styles from './Header.module.scss';

interface Props {
  header: IHeader;
}

const Header = ({ header: { quoteNumber, totalPrice } }: Props) => {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.headerContent}>
          <div>
            You have <span className={styles.headerNumber}>{quoteNumber}</span> covers to choose from
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
