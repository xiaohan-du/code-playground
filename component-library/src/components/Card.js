import React from 'react';

const Card = ({ id, title, price, quantity, changeItemQuantity, itemTotalPrice }) => {
    return (
        <>
            <div key={id}>
                <p>{id}. {title}</p>
                <p>Quantity: {quantity}</p>
                <p>Price: {price}</p>
                <p>Item total price: {itemTotalPrice}</p>
                <button onClick={() => changeItemQuantity(id, 0)}>Add item</button>
            </div>
        </>
    )
}

export default Card