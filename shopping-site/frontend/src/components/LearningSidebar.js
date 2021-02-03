import React, { useEffect } from 'react';
import './LearningSidebar.scss';

const LearningSidebar = ({ toggleDetails, detectScroll, fixClass, highlightClass, hlArray, openDetails, setOpenDetails }) => {

    const renderLi = () => {
        let _li = [];
        for (let i = 0; i < hlArray[0].length; ++i) {
            let id = hlArray[1][i];
            _li.push(
                <li key={i}>
                    <a className={hlArray[0][i] ? highlightClass : ''}
                        onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                        {hlArray[2][i]}
                    </a>
                </li>
            )
        }
        return _li;
    }

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
                    {renderLi()}
                </ul>
            </aside>
        </div>
    )
}

export default LearningSidebar;