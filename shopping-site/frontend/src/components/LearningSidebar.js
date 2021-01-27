import React, { useEffect } from 'react';
import './LearningSidebar.scss';

const LearningSidebar = ({ toggleDetails, detectScroll, fixClass, highlightClass, hlArray }) => {

    useEffect(() => {
        window.addEventListener('scroll', detectScroll);
    }, []);

    return (
        <div className={`learning-sidebar ${fixClass}`}>
            <aside className="menu">
                <p className="menu-label">
                    Quick Nav
                </p>
                <ul className="menu-list">
                    <li><a className={hlArray[0][0] ? highlightClass : ''} onClick={() => toggleDetails(hlArray[1][0])}>{hlArray[2][0]}</a></li>
                    <li><a className={hlArray[0][1] ? highlightClass : ''} onClick={() => toggleDetails(hlArray[1][1])}>{hlArray[2][1]}</a></li>
                    <li><a className={hlArray[0][2] ? highlightClass : ''} onClick={() => toggleDetails(hlArray[1][2])}>{hlArray[2][2]}</a></li>
                    <li><a className={hlArray[0][3] ? highlightClass : ''} onClick={() => toggleDetails(hlArray[1][3])}>{hlArray[2][3]}</a></li>
                    <li><a className={hlArray[0][4] ? highlightClass : ''} onClick={() => toggleDetails(hlArray[1][4])}>{hlArray[2][4]}</a></li>
                    <li><a className={hlArray[0][5] ? highlightClass : ''} onClick={() => toggleDetails(hlArray[1][5])}>{hlArray[2][5]}</a></li>
                    <li><a className={hlArray[0][6] ? highlightClass : ''} onClick={() => toggleDetails(hlArray[1][6])}>{hlArray[2][6]}</a></li>
                    <li><a className={hlArray[0][7] ? highlightClass : ''} onClick={() => toggleDetails(hlArray[1][7])}>{hlArray[2][7]}</a></li>
                    <li><a className={hlArray[0][8] ? highlightClass : ''} onClick={() => toggleDetails(hlArray[1][8])}>{hlArray[2][8]}</a></li>
                    <li><a className={hlArray[0][9] ? highlightClass : ''} onClick={() => toggleDetails(hlArray[1][9])}>{hlArray[2][9]}</a></li>
                </ul>
            </aside>
        </div>
    )
}

export default LearningSidebar;