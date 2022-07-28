import IModal from '../../interfaces/IModal';
import styles from './Modal.module.scss';
import { RiCloseLine } from "react-icons/ri";
import { useState } from 'react';

interface Props {
  modal: IModal;
}

const Modal = ({ modal: { quotePrice, setIsOpen } }: Props) => {

  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);

  return (
    <>
      <div className={styles['modal-bg-dark']} onClick={() => setIsOpen(false)} />
      <div className={styles['modal-centered']}>
        <div className={styles['modal-body']}>
          <div className={styles['modal-header']}>
            <h5 className={styles['modal-heading']}>Your shopping cart</h5>
          </div>
          <button aria-label="Close" type='button' className={styles['modal-btn-close']} onClick={() => setIsOpen(false)}>
            <RiCloseLine />
          </button>
          <div className={styles['modal-content']}>
            Total price: £{quotePrice}
          </div>
          {isSuccessful ? <div className={styles['modal-content']}>Purchase successful!</div> : null}
          <div className={styles['modal-actions']}>
            <div className={styles['modal-actions-container']}>
              <button
                type='button'
                className={`${styles['modal-btn-confirm']} btn toolbox-btn toolbox-btn-basic`}
                onClick={() => setIsSuccessful(true)}
                disabled={isSuccessful}
              >
                Pay
              </button>
              <button
                type='button'
                className={'btn btn-danger toolbox-btn toolbox-btn-basic'}
                onClick={() => setIsOpen(false)}
              >
                {isSuccessful ? 'Close' : 'Cancel'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
