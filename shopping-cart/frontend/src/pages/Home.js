import React, { useState } from 'react';
import SCard from '../components/SCard';
import SInfobar from '../components/SInfobar';

import './Home.scss';

const cardData = [
    {
        id: 1,
        title: 'Camera',
        subtitle: 'Canon',
        price: 10,
        imgIndex: 0
    },
    {
        id: 2,
        title: 'Mobile phone',
        subtitle: 'Apple',
        price: 11,
        imgIndex: 1
    },
    {
        id: 3,
        title: 'Headphone',
        subtitle: 'Sony',
        price: 12,
        imgIndex: 2
    },
    {
        id: 4,
        title: 'Controller',
        subtitle: 'Microsoft',
        price: 13,
        imgIndex: 3
    },
    {
        id: 5,
        title: 'Laptop',
        subtitle: 'Dell',
        price: 14,
        imgIndex: 4
    },
    {
        id: 6,
        title: 'Watch',
        subtitle: 'Apple',
        price: 15,
        imgIndex: 5
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
                            imgIndex={d.imgIndex}
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