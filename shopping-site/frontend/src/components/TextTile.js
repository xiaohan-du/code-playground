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
                                Worked as the front end developer in several tech companies,
                                I strive to apply cutting edge technologies and frameworks to help the
                                business to achieve higher goals.
                                Being able to think from clients’ perspective,
                                I create user-friendly, reactive and easy-to-use web applications.
                                I pay attention to details, care for UX, and have a sense of beauty.
                            </p>
                            <p>
                                During my time working in a digital agency, I finished the majority of front end work for a booking website to serve the COVID-19 new normal.
                                My work included front end development using Blazor framework, responsive website design with Blazorise (Bulma).
                                I worked closely with UX/UI designer, tester and focused on precisely achieving the design as well as delivering a friendly user experience.
                            </p>
                            <p>
                                Prior to the digital agency, I worked as a Front End Software Engineer in a FinTech company.
                                I was involved in the development and UI design of several projects.
                                My role included front end development, software application development, fixing support tickets, etc.
                                I Worked across multiple projects and support tickets using JavaScript (jQuery) in .NET MVC framework. 
                                I also have experience in CI/CD with Azure DevOps, Version control with Git, JavaScript unit test with Jasmine + Karma,
                                JavaScript package management using NPM. I Worked in agile teams with a good understanding of Scrum / Kanban.
                            </p>
                            <p>
                                Prior to the FinTech company, I worked as a Trainee Product Consultant in a Saas company. 
                                In this short period I began my journey of frontend web development and quickly fell in love with it. 
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
