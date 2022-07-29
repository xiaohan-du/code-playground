import React, { useState, useEffect } from 'react';
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
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  useEffect(() => {
    setIsDisabled(priceSummary === 0 ? true : false);
  }, [priceSummary]);

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
      isPanel: true,
      imgPath: require('./static/images/tool.jpg'),
      title: 'Features',
      content: '',
      icon1: 'Home',
      icon2: 'Work',
      icon3: 'All',
      price: 0,
      calculateTotalPrice: calculateTotalPrice
    },
    {
      id: 2,
      isPanel: false,
      imgPath: require('./static/images/tool2.jpg'),
      title: 'Cover at home',
      content: 'We will cover your tools when they are stored in your home overnight',
      icon1: require('./static/icons/yes.png'),
      icon2: require('./static/icons/no.png'),
      icon3: require('./static/icons/no.png'),
      price: 100,
      calculateTotalPrice: calculateTotalPrice
    },
    {
      id: 3,
      isPanel: false,
      imgPath: require('./static/images/laptop1.jpg'),
      title: 'Computer cover',
      content: 'We will cover one business laptop or tablet you use for work',
      icon1: require('./static/icons/yes.png'),
      icon2: require('./static/icons/yes.png'),
      icon3: require('./static/icons/no.png'),
      price: 200,
      calculateTotalPrice: calculateTotalPrice
    },
    {
      id: 4,
      isPanel: false,
      imgPath: require('./static/images/repair2.jpg'),
      title: 'Repair cover',
      content: 'We will pay for the full original purchase price when your tools or laptops are not repairable',
      icon1: require('./static/icons/yes.png'),
      icon2: require('./static/icons/yes.png'),
      icon3: require('./static/icons/yes.png'),
      price: 50,
      calculateTotalPrice: calculateTotalPrice
    }
  ];

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
          {renderCards(cardDetails)}
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
