import React, { useState } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import IStores from '../interfaces/IStores';
import './Home.scss';
import ScanQR from '../functions/ScanQR';

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

    const [showCam, setShowCam] = useState(false);

    const handleClick = () => {
        setShowCam(true);
    }

    for (let i: number = 0; i < storeDetails.length; i = i + 2) {
        cardRows.push(
            <div className='row no-gutters' key={i}>
                {
                    storeDetails.slice(i, i + 2).map(
                        (d) => {
                            return (
                                <div className='col d-flex justify-content-center' key={d.id} >
                                    <Card store={d} key={d.id} handleClick={handleClick}/>
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
            <Navbar />
            {ScanQR(showCam)}
            <div className='center-content home mt-5'>
                {cardRows}
            </div>
            <Footer />
        </>
    )
}

export default Home;