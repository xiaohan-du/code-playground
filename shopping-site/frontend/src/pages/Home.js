import React from 'react';
import Banner from '../components/Banner';
import Tile from '../components/Tile';
import { Helmet } from "react-helmet";
import { ScrollToTopOnMount } from '../functions/ScrollToTopOnMount';

const Home = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Xiaohan Du</title>
            </Helmet>
            <Banner />
            <Tile />
        </>
    )
}

export default Home;