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
      <div className={styles.modalBgDark} onClick={() => setIsOpen(false)} />
      <div className={styles.modalCentered}>
        <div className={styles.modalBody}>
          <div className={styles.modalHeader}>
            <h5 className={styles.modalHeading}>Your shopping cart</h5>
          </div>
          <button aria-label="Close" type='button' className={styles.modalBtnClose} onClick={() => setIsOpen(false)}>
            <RiCloseLine />
          </button>
          <div className={styles.modalContent}>
            Total price: £{quotePrice}
          </div>
          {isSuccessful ? <div className={styles.modalContent}>Purchase successful!</div> : null}
          <div className={styles.modalActions}>
            <div className={styles.modalActionsContainer}>
              <button
                type='button'
                className={`${styles.modalBtnConfirm} btn toolbox-btn toolbox-btn-basic`}
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
