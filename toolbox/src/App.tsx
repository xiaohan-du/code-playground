import React, { ReactNode, useState } from 'react';
import './App.scss';
import Header from './components/header/Header';
import IHeader from './interfaces/IHeader';
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card';
import ICard from './interfaces/ICard';

function App() {

  const [priceSummary, setPriceSummary] = useState<number>(0);

  const calculateTotalPrice = (price: number) => {
    setPriceSummary(priceSummary + price);
  };

  const handlePayment = (): ReactNode => {
    return (
      <>
      </>
    )
  }

  const headerDetails: IHeader = {
    quoteNumber: 3,
    totalPrice: priceSummary,
    handlePayment: handlePayment
  };

  const cardDetails: ICard[] = [
    {
      id: 1,
      imgPath: '',
      title: 'Card 1 title',
      content: 'Card 1 content',
      icon1: require('./static/icons/yes.png'),
      icon2: require('./static/icons/no.png'),
      price: 100,
      calculateTotalPrice: calculateTotalPrice
    },
    {
      id: 2,
      imgPath: '',
      title: 'Card 2 title',
      content: 'Card 2 content',
      icon1: require('./static/icons/yes.png'),
      icon2: require('./static/icons/no.png'),
      price: 200,
      calculateTotalPrice: calculateTotalPrice
    },
    {
      id: 3,
      imgPath: '',
      title: 'Card 3 title',
      content: 'Card 3 content',
      icon1: require('./static/icons/yes.png'),
      icon2: require('./static/icons/no.png'),
      price: 150,
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
      </div>
    </div>
  );
}

export default App;
