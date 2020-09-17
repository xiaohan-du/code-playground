import React, { useState } from 'react';
import CompMapObjects from './components/CompMapObjects';
import CompOperateOnMappedObjects from './components/CompOperateOnMappedObjects';
import PassStateToChild from './components/PassStateToChild';
import ToggleOnOff from './components/ToggleOnOff';
import './App.scss';

const dummyData = [
  {
    id: 1,
    title: 'car',
    price: 10
  },
  {
    id: 2,
    title: 'bike',
    price: 20
  },
  {
    id: 3,
    title: 'plane',
    price: 30
  }
]

const App = () => {
  // ================================== CompMapObjects

  const RenderMappedObjects = () => {
    return (
      dummyData.map(
        (d) => <CompMapObjects key={d.id} id={d.id} title={d.title} price={d.price} />
      )
    )
  };

  // ================================== CompOperateOnMappedObjects
  const [totalPrice, setTotalPrice] = useState([]); // an empty array for start

  const handleClick = (id, qty) => {
    let newState = [...totalPrice]; // copy the state
    if (newState.find(item => item.id === id) !== undefined) { // find the item to add qty, if not exists, add one
      newState.find(item => item.id === id).qty += qty
    } else {
      newState.push({ id: id, qty: qty });
    }
    setTotalPrice(newState); // set the new state
  }

  const RenderCompOperateOnMappedObjects = () => {
    return (
      dummyData.map(
        (d) => {
          const stateItem = totalPrice.find(item => item.id === d.id); // return the item or undefined
          const qty = stateItem ? stateItem.qty : 0 // retreive qty from state by id or 0 if the product is not in the array
          return (
            <CompOperateOnMappedObjects key={d.id} id={d.id} title={d.title} totalPrice={d.price * qty} handleClick={handleClick} />  //calculate the total    
          )
        }
      )
    )
  };

  // ================================== PassStateToChild
  const country = 'UK';

  // ==================================
  return (
    <div className="App">
      <div className='wrapper'>
        <h3>Map objects array</h3>
        <RenderMappedObjects />
      </div>
      <div className='wrapper'>
        <h3>Individualize mapped components</h3>
        <RenderCompOperateOnMappedObjects />
      </div>
      <div className='wrapper'>
        <h3>Pass data from parent to child</h3>
        <PassStateToChild country={country} />
      </div>
      <div className='wrapper'>
        <h3>Toggle on and off with useReducer</h3>
        <ToggleOnOff />
      </div>
    </div>
  );
}

export default App;
