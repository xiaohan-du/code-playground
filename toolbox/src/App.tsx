import React, { useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import IHeader from './interfaces/IHeader';
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card';
import ICard from './interfaces/ICard';
import Modal from './components/modal/Modal';
import IModal from './interfaces/IModal';

function App() {

  const [priceSummary, setPriceSummary] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const calculateTotalPrice = (price: number) => {
    setPriceSummary(priceSummary + price);
  };

  const modalDetails: IModal = {
    quotePrice: priceSummary,
    setIsOpen: setIsOpen
  };

  const headerDetails: IHeader = {
    quoteNumber: 3,
    totalPrice: priceSummary
  };

  const cardDetails: ICard[] = [
    {
      id: 1,
      imgPath: '',
      title: 'Tools cover',
      content: 'We will cover your tools when they are stored in your home overnight',
      icon1: require('./static/icons/yes.png'),
      icon2: require('./static/icons/no.png'),
      price: 100,
      calculateTotalPrice: calculateTotalPrice
    },
    {
      id: 2,
      imgPath: '',
      title: 'Laptop cover',
      content: 'We will cover one business laptop or tablet you use for work',
      icon1: require('./static/icons/yes.png'),
      icon2: require('./static/icons/no.png'),
      price: 200,
      calculateTotalPrice: calculateTotalPrice
    },
    {
      id: 3,
      imgPath: '',
      title: 'Repair cover',
      content: 'We will pay for the full original purchase price when your tools are not repairable',
      icon1: require('./static/icons/yes.png'),
      icon2: require('./static/icons/no.png'),
      price: 50,
      calculateTotalPrice: calculateTotalPrice
    }
  ];

  const renderCards = (
    cardDetails: ICard[]): React.ReactNode => {
    return (
      cardDetails.map((c): React.ReactNode => {
        return (
          <div className='col' key={c.id}>
            <Card card={c} />
          </div>
        )
      })
    )
  };

  return (
    <div className="App">
      <Navbar />
      <Header header={headerDetails} />
      <div className='container'>
        <div className='row mt-5'>
          {renderCards(cardDetails)}
        </div>
        <button
          className='btn btn-primary mb-3 fs-4'
          onClick={() => setIsOpen(true)}
        >
          Buy now
        </button>
        {isOpen && <Modal modal={modalDetails} />}
      </div>
    </div>
  );
}

export default App;
