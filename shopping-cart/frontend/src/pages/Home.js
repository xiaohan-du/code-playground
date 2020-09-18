import React, { useState } from 'react';
import SCard from '../components/SCard';
import SInfobar from '../components/SInfobar';

import './Home.scss';

const cardData = [
    {
        id: 1,
        title: 'hat',
        subtitle: 'striploin',
        price: 10
    },
    {
        id: 2,
        title: 'breezer',
        subtitle: 'tropical',
        price: 11
    },
    {
        id: 3,
        title: 'wine',
        subtitle: 'cabernet',
        price: 12
    },
    {
        id: 4,
        title: 'cabbage',
        subtitle: 'nappa',
        price: 13
    },
    {
        id: 5,
        title: 'spring',
        subtitle: 'cup',
        price: 14
    },
    {
        id: 6,
        title: 'bread',
        subtitle: 'malt',
        price: 15
    }
];

const Home = () => {
    const [totalPrice, setTotalPrice] = useState(0);

    const [quantity, setQuantity] = useState([]);

    const changeItemQuantity = (id, itemQty, actionType) => {
        let _newState = [...quantity];
        let _itemInfo = _newState.find(item => item.id === id);
        switch (actionType) {
            case 'add':
                if (_itemInfo !== undefined) {
                    _itemInfo.itemQty += 1;
                } else {
                    _newState.push({ id: id, itemQty: itemQty + 1 });
                };
                break;
            case 'remove':
                if (_itemInfo !== undefined) {
                    _itemInfo.itemQty -= 1;
                } else {
                    _newState.push({ id: id, itemQty: itemQty - 1 });
                };
                if (_newState.find(item => item.id === id).itemQty < 0) {
                    _newState.find(item => item.id === id).itemQty = 0;
                };
                break;
            case 'clear':
                _itemInfo.itemQty = 0;
                break;
            default:
                break;
        };
        setQuantity(_newState);
    }

    const RenderCards = () => {
        let _totalPrice = 0;
        return (
            cardData.map(
                (d) => {
                    const stateItem = quantity.find(item => item.id === d.id);
                    const itemQty = stateItem ? stateItem.itemQty : 0;
                    _totalPrice += d.price * itemQty;
                    setTotalPrice(_totalPrice);

                    return (
                        <SCard
                            key={d.id}
                            id={d.id}
                            testid={d.id}
                            title={d.title}
                            subtitle={d.subtitle}
                            price={d.price}
                            quantity={itemQty}
                            changeItemQuantity={changeItemQuantity}
                            itemTotalPrice={d.price * itemQty}
                        />
                    )
                }
            )
        )
    }

    return (

        <>
            <div className='home--cards'>
                <RenderCards />
            </div>
            <SInfobar totalPrice={totalPrice} />
        </>
    )
};

export default Home;