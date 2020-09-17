import React from 'react';
import SSummaryCard from '../components/SSummaryCard';
import './Summary.scss';

const Summary = () => {

    const dummyData = [
        {
            id: 1,
            title: 'buffalo',
            subtitle: 'striploin',
            price: 10
        },
        {
            id: 3,
            title: 'wine',
            subtitle: 'cabernet',
            price: 12
        },
        {
            id: 5,
            title: 'spring',
            subtitle: 'cup',
            price: 14
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