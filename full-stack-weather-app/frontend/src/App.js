import React from 'react';
import Weather from './components/Weather'
import './App.scss';

function App() {
  return (
    <div>
      <h1 className='title is-1'>This is our full stack weather app!</h1>
      <Weather />
    </div>
  );
}

export default App;
