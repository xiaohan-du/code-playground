import React from 'react';
import aboutImg from '../images/design.jpg'
import './About.scss';
import TextTile from '../components/TextTile';

const About = () => {
    return (
        <>
            <div className='about'>
                <TextTile />
                <div style={{ backgroundImage: `url(${aboutImg})` }} className='about__img' >.</div>
            </div>
        </>
    )
}

export default About;

