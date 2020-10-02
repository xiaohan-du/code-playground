import React from 'react';
import Card from '../components/Card';
import IStores from '../interfaces/IStores';
import './Home.scss';

const storeDetails: IStores[] = [
    {
        id: 1,
        title: 'Beddau Stores',
        imgPath: require('../images/beddau_stores_v2.png'),
        address: '111 MOORLAND CRESCENT, BEDDAU, Pontypridd',
        postcode: 'CF38 2DW',
        messageA: 'Get £5 off your next shopping when you REDEEM 200 points',
        messageB: 'Get 10 points when you spend £5 or more',
        btnText: 'Redeem',
        terms: 'exclusions and minimum spend terms apply'
    },
    {
        id: 2,
        title: 'Abercynon PostOffice',
        imgPath: require('../images/post_office.png'),
        address: '45 Margaret St, Abercynon, Mountain Ash',
        postcode: 'CF45 4RB',
        messageA: 'Get £5 off your next shopping',
        messageB: 'When you redeem Loyalty points',
        btnText: 'Redeem',
        terms: 'exclusions and minimum spend terms apply'
    },
    {
        id: 3,
        title: 'KTA Premier Shop',
        imgPath: require('../images/kta_general.png'),
        address: '45 Margaret St, Abercynon, Mountain Ash',
        postcode: 'CF45 4RB',
        messageA: 'Get £5 off your next shopping',
        messageB: 'When you redeem Loyalty points',
        btnText: 'Redeem',
        terms: 'exclusions and minimum spend terms apply'
    }
]

const Home = () => {
    return (
        <>
            <div className='center-content home'>
                <h1>Just shop local</h1>
                <div className='home-cards'>
                    {
                        storeDetails.map(
                            (d) => {
                                return (
                                    <Card store={d} key={d.id}/>
                                )
                            }
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Home;