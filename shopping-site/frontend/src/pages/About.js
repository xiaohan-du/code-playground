import React from 'react';
import aboutImg from '../images/desktop.jpg'
import './About.scss';
import TextTile from '../components/TextTile';
import Helmet from "react-helmet";

const About = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Career - Xiaohan Du</title>
            </Helmet>
            <div className='about'>
                <TextTile />
                <div style={{ backgroundImage: `url(${aboutImg})` }} className='about__img' >.</div>
            </div>
        </>
    )
}

export default About;

