import React from 'react';
/* import { Link } from "react-router-dom"; */
import ItemCard from '../components/ItemCard';
import './Home.scss';

const Home = () => {

    const dummyData = [
        {
            id: 1,
            title: 'buffalo',
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

    const RenderCard = () => {
        return (
            dummyData.map(
                (d) => {
                    return (
                        <ItemCard key={d.id} title={d.title} subtitle={d.subtitle} price={d.price}/>
                    )
                }
            )
        )
    }

    return (
        <>
            <h1>Shop</h1>
            <h3>This is the shop page</h3>
            {/* <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/details">Details</Link>
                </li>
                <li>
                    <Link to="/summary">Summary</Link>
                </li>
            </ul> */}
            <div className='home--cards'>
                <RenderCard />
            </div>
        </>
    )
};

export default Home;