import React from 'react';
import { Helmet } from "react-helmet";
import { ScrollToTopOnMount } from '../functions/ScrollToTopOnMount';
import './Hooks.scss';
import GlassTile from '../components/GlassTile';

const Hooks = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Custom Hooks - Xiaohan Du</title>
            </Helmet>
            <div className='about'>
                <div className='center-content'>
                    <h1 className='about__title'>Custom Hooks</h1>
                    <p className='about__subtitle'>
                        Here are some custom hooks which can be really useful
                    </p>
                    <GlassTile />
                </div>
            </div>
        </>
    )
}

export default Hooks;