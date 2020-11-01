import React from 'react';
import { Helmet } from "react-helmet";
import { ScrollToTopOnMount } from '../functions/ScrollToTopOnMount';
import './Components.scss';

const Components = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Components library - Xiaohan Du</title>
            </Helmet>
            <div className='about'>
                <div className='center-content'>
                    <h1 className='about__title'>Components Library</h1>
                    <p className='about__subtitle'>
                        Components library
                    </p>
                </div>
            </div>
        </>
    )
}

export default Components;