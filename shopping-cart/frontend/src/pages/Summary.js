import React from 'react';
import SSummaryCard from '../components/SSummaryCard';
import './Summary.scss';

const Summary = () => {

    const dummyData = [
        {
            id: 1,
            title: 'Camera',
            subtitle: 'Canon',
            price: 10,
            imgIndex: 0
        },
        {
            id: 3,
            title: 'Headphone',
            subtitle: 'Sony',
            price: 12,
            imgIndex: 2
        },
        {
            id: 5,
            title: 'Laptop',
            subtitle: 'Dell',
            price: 14,
            imgIndex: 4
        }
    ];

    const RenderCards = () => {
        return (
            dummyData.map(
                (d) => {
                    return (
                        <SSummaryCard
                            key={d.id}
                            id={d.id}
                            title={d.title}
                            subtitle={d.subtitle}
                            price={d.price}
                            imgIndex={d.imgIndex}
                            quantity={1}
                            itemTotalPrice={d.price * 1}
                        />
                    )
                }
            )
        )
    }

    return (
        <>
            <div className='summary'>
                <RenderCards />
            </div>
        </>
    )
}

export default Summary;