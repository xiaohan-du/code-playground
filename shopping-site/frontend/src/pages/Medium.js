import React from 'react';
import './About.scss';
import { Helmet } from "react-helmet";
import { ScrollToTopOnMount } from '../functions/ScrollToTopOnMount';

const Medium = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <Helmet>
                <meta charSet="utf-8" />
                <title>My Medium - Xiaohan Du</title>
            </Helmet>
            <div className='about'>
                <div className='center-content'>
                    <h1 className='about__title'>I use <a href='https://medium.com/'>Medium</a> as a platform to share knowledge</h1>
                    <p className='about__subtitle'>
                        What is Medium?
                    </p>
                    <p className='about__content'>
                        According to <a href='https://en.wikipedia.org/wiki/Medium_(website)'>Wikipedia Medium page</a>:
                        Medium is an online publishing platform developed by Evan Williams and launched in August 2012. 
                        It is owned by A Medium Corporation. 
                        The platform is an example of social journalism, 
                        having a hybrid collection of amateur and professional people and publications, 
                        or exclusive blogs or publishers on Medium, and is regularly regarded as a blog host.
                    </p>
                    <p className='about__subtitle'>
                        Here is a list of Medium articles I published
                    </p>
                    <div>
                        <ul className='about__float-list'>
                            <li>
                                <a href='https://medium.com/swlh/hide-api-key-in-node-application-and-request-it-from-react-application-175ce257f493'>
                                    Hide API Key in Node application and request it from React application
                                </a>
                            </li>
                            <li>
                                <a href='https://medium.com/@duxiaohan_34311/lets-build-a-full-stack-uk-weather-app-using-node-react-part-1-basic-set-up-8b58534afa7b'>
                                    Let’s build a full stack UK weather app using Node + React: part 1 — basic setup
                                </a>
                            </li>
                            <li>
                                <a href='https://medium.com/@duxiaohan_34311/lets-build-a-full-stack-uk-weather-app-using-node-react-part-2-error-handling-96323ca8e3c5'>
                                    Let’s build a full stack UK weather app using Node + React: part 2 — error handling
                                </a>
                            </li>
                            <li>
                                <a href='https://medium.com/@duxiaohan_34311/lets-build-a-full-stack-uk-weather-app-using-node-react-part-3-ui-5209e99780c8'>
                                    Let’s build a full stack UK weather app using Node + React: part 3 — UI
                                </a>
                            </li>
                            <li>
                                <a href='https://medium.com/@duxiaohan_34311/react-pass-data-from-child-to-parent-ba466139a652'>
                                    React: Pass data from child to parent?
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Medium;