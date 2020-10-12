import React from 'react';
import Banner from '../components/Banner';
import Tile from '../components/Tile';
import { Helmet } from "react-helmet";
import { ScrollToTopOnMount } from '../functions/ScrollToTopOnMount';

const personalDetails = [
    {
        id: 1,
        title: 'React JS development',
        subtitle: 'I specialise in web development using React JS',
        imgUrl: require('../images/trooper.jpg')
    },
    {
        id: 2,
        title: 'Responsive design',
        subtitle: 'I understand the art of responsive design',
        imgUrl: require('../images/responsive.jpg')
    },
    {
        id: 3,
        title: 'Software development',
        subtitle: 'I\'m an experienced software developer',
        imgUrl: require('../images/code.jpg')
    },
    {
        id: 4,
        title: 'Scientific computing',
        subtitle: 'I have a PhD degree in computational mechanics',
        imgUrl: require('../images/dashboard.jpg')
    }
]

const Home = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home - Xiaohan Du</title>
            </Helmet>
            <Banner props={personalDetails}/>
            <Tile />
        </>
    )
}

export default Home;