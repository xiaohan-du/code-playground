import IModal from '../../interfaces/IModal';
import styles from './Modal.module.scss';
import { RiCloseLine } from "react-icons/ri";

interface Props {
  modal: IModal;
}

const Modal = ({ modal: { quotePrice, setIsOpen } }: Props) => {
  return (
    <>
      <div className={styles['modal-bg-dark']} onClick={() => setIsOpen(false)} />
      <div className={styles['modal-centered']}>
        <div className={styles['modal-body']}>
          <div className={styles['modal-header']}>
            <h5 className={styles['modal-heading']}>Your shopping cart</h5>
          </div>
          <button type='button' className={styles['modal-btn-close']} onClick={() => setIsOpen(false)}>
            <RiCloseLine />
          </button>
          <div className={styles['modal-content']}>
            Total price: £{quotePrice}
          </div>
          <div>
            What's covered:
          </div>
          <div className={styles['modal-actions']}>
            <div className={styles['modal-actions-container']}>
              <button
                type='button'
                className={`${styles['modal-btn-confirm']} btn toolbox-btn-basic`}
              >
                Pay
              </button>
              <button
                type='button'
                className={'btn btn-danger toolbox-btn-basic'}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
