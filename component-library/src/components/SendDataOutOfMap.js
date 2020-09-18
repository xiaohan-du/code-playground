import React, { useEffect, useState } from 'react';
import Card from './Card';
import Infobar from './Infobar';

const cards = [
    {
        id: 1,
        title: 'hat',
        price: 10
    },
    {
        id: 2,
        title: 'tshirt',
        price: 11
    }
]

const SendDataOutOfMap = () => {

    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState([]);

    useEffect(() => {
        const totalItemAmount = quantity.map(
            ({ id, itemQty }) => cards.find(({ id: cardId }) => id === cardId)?.price * itemQty ?? 0
        );

        const totalCost = totalItemAmount.reduce(
            (total, itemAmount) => total + itemAmount, 0
        );

        setTotalPrice(totalCost);
    }, [quantity]);

    const changeItemQuantity = (id, itemQty) => {
        setQuantity((prev) => {
            const exists = prev.find((item) => item.id === id);
            if (exists)
                return prev.map((item) =>
                    item.id === id ? { ...item, itemQty: item.itemQty + 1 } : item
                );
            else return [...prev, { id, itemQty: itemQty + 1 }];
        });
    };

    return (
        <>
            {cards.map(({ id, title, price }) => {
                const stateItem = quantity.find((item) => item.id === id);
                const itemQty = stateItem ? stateItem.itemQty : 0;
                return (
                    <Card
                        key={id}
                        id={id}
                        title={title}
                        price={price}
                        quantity={itemQty}
                        changeItemQuantity={changeItemQuantity}
                        itemTotalPrice={price * itemQty}
                    />
                );
            })}
            <Infobar totalPrice={totalPrice} />
        </>
    );
}

export default SendDataOutOfMap;