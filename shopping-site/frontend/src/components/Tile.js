import React from 'react';
import './Tile.scss';
import tileBg from '../images/passion.jpg';
import tileImg from '../images/design.jpg';
import tileImg1 from '../images/xps.jpg';

const Tile = () => {

    return (
        <>
            <div className='tile__wrapper'>
                <div className='center-content'>
                    <div className='tile'>
                        <div className='tile__textbox'>
                            <p className='tile__textbox__title'>
                                Professional skills
                            </p>
                            <p className='tile__textbox__content'>
                                I have front end working experience with JavaScript, HTML and SCSS. I learn React JS through self-study and focus on using hooks (this website is built by using React).
                                I'm proficient with responsive design. Achieving the prototype precisely and delivering a friendly user experience is my prioritised goal.
                            </p>
                            <ul className='tile__textbox__list'>
                                <li>
                                    React JS and hooks
                                </li>
                                <li>
                                    JavaScript (jQuery), HTML (CSHTML) and SCSS
                                </li>
                                <li>
                                    Responsive design with Bulma + Blazorise, or plain CSS
                                </li>
                            </ul>
                        </div>
                        <div style={{ backgroundImage: `url(${tileImg})` }} className='tile__image'>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${tileBg})` }} className='tile__wrapper tile__bg'>
                <div className='center-content tile__full-width'>
                    <div className='tile'>
                        <div className='tile__textbox tile__textbox-bg'>
                            <p className='tile__textbox__title'>
                                Technical/Key skills
                            </p>
                            <p className='tile__textbox__content'>
                                Here is a list of tools I'm proficient in
                            </p>
                            <ul className='tile__textbox__list'>
                                <li>
                                    Tools: Github, Azure DevOps, NPM
                                </li>
                                <li>
                                    Platforms: Windows, Linux, MacOS
                                </li>
                                <li>
                                    Other: MATLAB, LaTex, Abaqus
                                </li>
                            </ul>
                            <p className='tile__textbox__content'>
                                Here is a list of tools I've used 
                            </p>
                            <ul className='tile__textbox__list'>
                                <li>
                                    Test frameworks: Jasmine + Karma, Jest + Enzyme, Selenium
                                </li>
                                <li>
                                    Framework: .Net MVC
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='tile__wrapper'>
                <div className='center-content'>
                    <div className='tile'>
                        <div className='tile__textbox'>
                            <p className='tile__textbox__title'>
                                Experience in software development and website design
                            </p>
                            <p className='tile__textbox__content'>
                                Having worked in software company and digital agency, I gained experience in both software development and website design.
                                I am familiar with both Scrum and Kanban. Git is my first choice for version control,
                                check my <a href='https://github.com/xiaohan-du'>GitHub</a> for source code of this website and some other of my personal projects.
                                Azure DevOps is my favourite CI/CD tool.
                            </p>
                        </div>
                        <div style={{ backgroundImage: `url(${tileImg1})` }} className='tile__image'>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tile;