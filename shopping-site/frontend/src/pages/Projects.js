import React from 'react';
import { Helmet } from "react-helmet";
import { ScrollToTopOnMount } from '../functions/ScrollToTopOnMount';
import './Projects.scss';

const Projects = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Projects - Xiaohan Du</title>
            </Helmet>
            <div className='center-content projects'>
                <h1>Hello</h1>
            </div>
        </>
    )
}

export default Projects;