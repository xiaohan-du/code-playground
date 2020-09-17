import React, { useState } from 'react';
/* import { Link } from "react-router-dom";
 */import Test from '../components/Test';

const Details = () => {
    const dummyData = [
        {
            id: 1,
            title: 'tshirt',
            price: 10
        },
        {
            id: 2,
            title: 'hat',
            price: 20
        }
    ]

    const [totalPrice, setTotalPrice] = useState([]); //<-- an empty array for start

    const handleClick = (id, qty) => {
        let newState = [...totalPrice]; //<--- copy the state
        if (newState.find(item => item.id === id) !== undefined) { // find the item to add qty, if not exists, add one
            newState.find(item => item.id === id).qty += qty
        } else {
            newState.push({ id: id, qty: qty });
        }
        setTotalPrice(newState); //<-- set the new state
    }

    const RenderCards = () => {
        return (
            dummyData.map(
                (d) => {
                    const stateItem = totalPrice.find(item => item.id === d.id); // return the item or undefined
                    const qty = stateItem ? stateItem.qty : 0 // retreive qty from state by id or 0 if the product is not in the array
                    return (
                        <Test key={d.id} id={d.id} title={d.title} price={d.price} totalPrice={d.price * qty} handleClick={handleClick} />  //calculate the total    
                    )
                }
            )
        )
    }

    return (
        <>
            <RenderCards />
        </>
    )
}

export default Details;