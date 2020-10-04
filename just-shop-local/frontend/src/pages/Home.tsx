import React, { useRef } from 'react';
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
    },
    {
        id: 4,
        title: 'Kairali Spices Centre',
        imgPath: require('../images/Kairali_spices_centre.png'),
        address: '23, Pen-y-lan Road, Roath, Cardiff',
        postcode: 'CF24 3PG',
        messageA: 'Get FREE 2pk of Crisps (£1 value)',
        messageB: 'When you redeem Loyalty points',
        btnText: 'Redeem',
        terms: 'exclusions and minimum spend terms apply'
    }
]

const Home = () => {

    let cardRows: Array<object> = [];

    for (let i: number = 0; i < storeDetails.length; i = i + 2) {
        cardRows.push(
            <div className='row no-gutters' key={i}>
                {
                    storeDetails.slice(i, i + 2).map(
                        (d) => {
                            return (
                                <div className='col d-flex justify-content-center' key={d.id} >
                                    <Card store={d} key={d.id} />
                                </div>
                            )
                        }
                    )
                }
            </div>
        )
    }

    return (
        <>
            <div className='center-content home'>
                <img className='home-logo' src={require('../images/just_shop_local_logo.png')} alt='logo' />
                {
                    cardRows
                }
            </div>
        </>
    )
}

export default Home;