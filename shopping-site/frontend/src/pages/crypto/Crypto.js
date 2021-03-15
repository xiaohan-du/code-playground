import React from 'react';
import { Helmet } from "react-helmet";
import { ScrollToTopOnMount } from '../../functions/ScrollToTopOnMount';
import './Crypto.scss';

const Crypto = () => {

    return (
        <>
            <ScrollToTopOnMount />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Crypto currencies - Xiaohan Du</title>
            </Helmet>
            <div className='crypto'>
                <div className='center-content'>
                    <h1>
                        Crypto
                    </h1>
                </div>
                <div>
                    Bitcoin real-time price
                </div>
                
            </div>
        </>
    )
}

export default Crypto;