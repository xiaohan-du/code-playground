import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './App.scss';
import Header from './components/header/Header';
import IHeader from './interfaces/IHeader';
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card';
import ICard from './interfaces/ICard';
import Modal from './components/modal/Modal';
import IModal from './interfaces/IModal';
import { cardDetails } from './data/cardDetails';

function App() {

  const [priceSummary, setPriceSummary] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(false);
  const [discount, setDiscount] = useState<number>(0);
  const [isDiscountApplied, setIsDiscountApplied] = useState<boolean>(false);

  useEffect(() => {
    setIsDisabled(priceSummary === 0 ? true : false);
  }, [priceSummary]);

  const calculateTotalPrice = useCallback((price: number) => {
    setPriceSummary(priceSummary + price);
  }, [priceSummary]);

  const discountCodes:{} = {
    aug50: 0.5,
    adm20: 0.2
  }

  const handleDiscountCode = (discountCode: string) => {
    setDiscount(0);
    let keys = Object.keys(discountCodes);
    if (keys.indexOf(discountCode) > -1) {
      setDiscount(discountCodes[discountCode as keyof typeof discountCodes]);
      setIsDiscountApplied(true);
    }
  }

  const modalDetails: IModal = {
    quotePrice: priceSummary,
    setIsOpen: setIsOpen,
    discount: discount,
    isDiscountApplied: isDiscountApplied,
    handleDiscountCode: handleDiscountCode
  };

  const headerDetails: IHeader = {
    quoteNumber: cardDetails.length - 1,
    totalPrice: priceSummary
  };

  const fullCardDetails = useMemo(() => (
    cardDetails.map((card) => ({...card, calculateTotalPrice}))
), [calculateTotalPrice]);

  const renderCards = (
    cardDetails: ICard[]): React.ReactNode => {
    return (
      cardDetails.map((c): React.ReactNode => {
        return (
          c.id === 1 ?
            <div className='app-panel' key={c.id}>
              <Card card={c} />
            </div>
            :
            <div className='app-card' key={c.id}>
              <Card card={c} />
            </div>
        )
      })
    )
  };

  return (
    <div className="app">
      <Navbar />
      <Header header={headerDetails} />
      <div className='container'>
        <div className='row mt-4'>
          {renderCards(fullCardDetails)}
        </div>
        <div className='row mt-5'>
          <button className='btn toolbox-btn toolbox-btn-large app-btn-confirm mb-3 fs-4'
            onClick={() => setIsOpen(true)}
            disabled={isDisabled}>
            Buy now
          </button>
        </div>
        {isOpen && <Modal modal={modalDetails} />}
      </div>
    </div>
  );
}

export default App;
