import React from 'react';
import './Tile.scss';
import tileBg from '../images/side.jpg';
import tileImg from '../images/design.jpg';

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
                                I have front end working experience with JavaScript, HTML and SCSS. I learned React JS through self-study and focus on using hooks. 
                                I'm proficient with responsive design, percisely achieving the prototype and delivering a friendly user experience is my prioritised goal.  
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
                        <div style={{backgroundImage: `url(${tileImg})`}} className='tile__image'>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${tileBg})` }} className='tile__wrapper'>
                <div className='center-content'>
                    <div className='tile'>
                        <div className='tile__textbox tile__textbox-bg'>
                            <p className='tile__textbox__title'>
                                Experienced in software development and design
                            </p>
                            <p className='tile__textbox__content'>
                                Having worked in software company and digital agency, I gained experience in both software development and website design. 
                                I enjoy working in an agile team, familiar with Scrum and Kanban. Git is my first choice for version control, see <a href='https://github.com/xiaohan-du'>here</a> for source code of this website and some other of my personal projects.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Tile;