import React from 'react';
import './App.css';
import Header from './components/header/Header';
import IHeader from './interfaces/IHeader';
import Navbar from './components/navbar/Navbar';

function App() {

  const headerDetails: IHeader = {
    quoteNumber: 3
  }

  return (
    <div className="App">
      <Navbar />
      <Header header={headerDetails}/>
      <button className='btn btn-danger'>Hello</button>
    </div>
  );
}

export default App;
