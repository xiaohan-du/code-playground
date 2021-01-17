import React, { useEffect } from 'react';
import './LearningSidebar.scss';

const LearningSidebar = ({ toggleDetails, detectScroll, fixClass, booHighlighted }) => {

    useEffect(() => {
        window.addEventListener('scroll', detectScroll);
    })
    return (
        <div className={`learning-sidebar ${fixClass}`}>
            <aside className="menu">
                <p className="menu-label">
                    React Basics
                </p>
                <ul className="menu-list">
                    <li><a className={booHighlighted[0] ? 'learning-sidebar-highlighted' : ''} onClick={() => toggleDetails('compare')}>Compare</a></li>
                    <li><a className={booHighlighted[1] ? 'learning-sidebar-highlighted' : ''} onClick={() => toggleDetails('setup')}>Basic Set Up</a></li>
                    <li><a className={booHighlighted[2] ? 'learning-sidebar-highlighted' : ''} onClick={() => toggleDetails('rendering')}>Rendering Elements</a></li>
                    <li><a className={booHighlighted[3] ? 'learning-sidebar-highlighted' : ''} onClick={() => toggleDetails('firstComponent')}>First Component</a></li>
                    <li><a className={booHighlighted[4] ? 'learning-sidebar-highlighted' : ''} onClick={() => toggleDetails('componentLifecycle')}>Component Lifecycle Methods</a></li>
                    <li><a className={booHighlighted[5] ? 'learning-sidebar-highlighted' : ''} onClick={() => toggleDetails('stateVsProps')}>State VS Props</a></li>
                    <li><a className={booHighlighted[6] ? 'learning-sidebar-highlighted' : ''} onClick={() => toggleDetails('hooks')}>Hooks</a></li>
                </ul>
                <p className="menu-label">
                    Advanced
                </p>
                <ul className="menu-list">
                    <li><a className={booHighlighted[7] ? 'learning-sidebar-highlighted' : ''} onClick={() => toggleDetails('pureComponent')}>React PureComponent</a></li>
                    <li><a className={booHighlighted[8] ? 'learning-sidebar-highlighted' : ''} onClick={() => toggleDetails('unidirectional')}>Unidirectional Data Flow</a></li>
                    <li><a className={booHighlighted[9] ? 'learning-sidebar-highlighted' : ''} onClick={() => toggleDetails('hoc')}>Higher Order Component</a></li>
                </ul>
            </aside>
        </div>
    )
}

export default LearningSidebar;