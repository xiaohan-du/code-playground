import React, { useState } from 'react';
import CompOperateOnMappedObjects from './CompOperateOnMappedObjects';

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

const TestMappedObjects = () => {

    const [totalPrice, setTotalPrice] = useState([]);

    const handleClick = (id, qty) => {
        let newState = [...totalPrice];
        if (newState.find(item => item.id === id) !== undefined) {
            newState.find(item => item.id === id).qty += qty
        } else {
            newState.push({ id: id, qty: qty });
        }
        setTotalPrice(newState);
    }

    return (
        dummyData.map(
            (d) => {
                const stateItem = totalPrice.find(item => item.id === d.id); // return the item or undefined
                const qty = stateItem ? stateItem.qty : 0 // retreive qty from state by id or 0 if the product is not in the array
                return (
                    <CompOperateOnMappedObjects key={d.id} id={d.id} testid={d.id} title={d.title} totalPrice={d.price * qty} handleClick={handleClick} />  //calculate the total    
                )
            }
        )
    )
};

export default TestMappedObjects;