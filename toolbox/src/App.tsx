import React from 'react';
import './App.css';
import Header from './components/header/Header';
import IHeader from './interfaces/IHeader';
import Navbar from './components/navbar/Navbar';
import Card from './components/card/Card';
import ICard from './interfaces/ICard';

function App() {

  const headerDetails: IHeader = {
    quoteNumber: 3
  };

  const cardDetails: ICard[] = [
    {
      id: 1,
      imgPath: '',
      title: 'Card 1 title',
      content: 'Card 1 content',
      icon1: require('./static/icons/yes.png'),
      icon2: require('./static/icons/no.png'),
      price: 100
    },
    {
      id: 2,
      imgPath: '',
      title: 'Card 2 title',
      content: 'Card 2 content',
      icon1: require('./static/icons/yes.png'),
      icon2: require('./static/icons/no.png'),
      price: 200
    },
  ];

  const renderCards = (
    cardDetails: ICard[]): React.ReactNode => {
    return (
      cardDetails.map((c): React.ReactNode => {
        return (
          <Card card={c} />
        )
      })
    )
  }

  return (
    <div className="App">
      <Navbar />
      <Header header={headerDetails} />
      {renderCards(cardDetails)}
    </div>
  );
}

export default App;
