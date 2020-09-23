import React from 'react';
import { Link } from "react-router-dom";
import './TextTile.scss';
import './Tile.scss';

const TextTile = () => {

    return (
        <>
            <div className='tile__wrapper'>
                <div className='center-content'>
                    <div className='tile texttile'>
                        <p className='texttile__title'>Personal profile</p>
                        <p className='texttile__subtitle'>I'm a front end developer with a PhD degree</p>
                        <div className='texttile__content'>
                            <p className='texttile__content-strong'>
                                I’m always learning and keen to gain more tech experience.
                                Working in an agile team is my favourite.
                                Worked as the front end developer in many tech companies,
                                I strive to apply cutting edge technologies and frameworks to help the
                                company to achieve higher business goals.
                                Thinking from clients’ perspective,
                                I am able to create user-friendly, reactive and easy-to-use web applications.
                                I pay attention to details, care for UX, and have a sense of beauty.
                            </p>
                            <p>
                                During my time in UpriseVSI I finished the majority of front end work of a booking website to serve the new COVID-19 normal.
                                My work included front end development using Blazor framework, responsive website design with Blazorise (Bulma).
                                I worked closely with UX/UIdesigner, tester and focused on precisely achieving the design as well as delivering a friendly user experience.
                            </p>
                            <p>
                                Prior to UpriseVSI, I worked as a Front End Software Engineer in W2 Global Data Limited.
                                I was involved in the development and UI design of several projects.
                                My role included front end development, software application development, fixing support tickets, etc.
                                I Worked on multiple projects and support tickets using JavaScript (jQuery) in .NET MVC framework. 
                                I also have experience in CI/CD with Azure DevOps, Version control with Git, JavaScript unit test with Jasmine + Karma,
                                JavaScript package management using NPM. I Worked in an agile environment with a good understanding of Scrum / Kanban.
                            </p>
                            <p>
                                Prior to W2 Global Data, I worked as a Trainee Product Consultant in Ebase Technology Limited. 
                                In this short period I began my journey of frontend web development and quickly found it enjoyable. 
                                I also provided pre-sales support for company's Verj.io platform, on-site software installation, configuration etc. 
                            </p>
                        </div>
                        <button className='btn btn__primary'>
                            <Link to="/contact-us">Contact me</Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )

}

export default TextTile;
