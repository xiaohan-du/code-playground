import IModal from '../../interfaces/IModal';
import styles from './Modal.module.scss';
import { RiCloseLine } from "react-icons/ri";
import { useState } from 'react';

interface Props {
  modal: IModal;
}

const Modal = ({ modal: { quotePrice, setIsOpen, discount, isDiscountApplied, handleDiscountCode } }: Props) => {

  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');

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
            Total price: £{quotePrice * (1 - discount)}
          </div>
          {isSuccessful ? <div className={styles.modalContent}>Purchase successful!</div> : null}
          {isSuccessful ?
            null
            :
            isDiscountApplied ?
              <div className={styles.modalContent}>
                Code {input} applied!
              </div>
              :
              <div className={`${styles.modalInputGroup} input-group mb-3`}>
                <input type="text" className="form-control" placeholder="Discount code" aria-label="Discount code" value={input} onInput={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} />
                <button className={`${styles.modalBtnInput} btn btn-outline-secondary toolbox-btn`} type="button" id="button-addon2" onClick={() => handleDiscountCode(input)}>Apply</button>
                <div className={styles.modalContent}>
                  Use discount code: adm20 or aug50
                </div>
              </div>
          }
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
