import React, {useState} from 'react';
import Card from './Card';
import Infobar from './Infobar';

const SendDataOutOfMap = () => {
    const dummyData = [
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

    const [quantity, setQuantity] = useState([]);

    const changeItemQuantity = (id, itemQty) => {
        let _newState = [...quantity];
        let _itemInfo = _newState.find(item => item.id === id);
        if (_itemInfo !== undefined) {
            _itemInfo.itemQty += 1;
        } else {
            _newState.push({ id: id, itemQty: itemQty + 1 });
        };

        setQuantity(_newState);
    }

    const RenderCards = () => {
        let _totalPrice = 0;
        return (
            dummyData.map(
                (d) => {
                    const stateItem = quantity.find(item => item.id === d.id);
                    const itemQty = stateItem ? stateItem.itemQty : 0;
                    _totalPrice += d.price * itemQty;
                    console.log(_totalPrice);
                    return (
                        <Card
                            key={d.id}
                            id={d.id}
                            title={d.title}
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
            <RenderCards/>
            <Infobar totalPrice={0}/>
        </>
    )
}

export default SendDataOutOfMap;