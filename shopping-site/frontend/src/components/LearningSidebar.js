import React from 'react';

const LearningSidebar = ({toggleDetails}) => {
    return (
        <div className='learning-sidebar'>
            <aside className="menu">
                <p className="menu-label">
                    React Basics
                </p>
                <ul className="menu-list">
                    <li><a onClick={() => toggleDetails('compare')}>Compare</a></li>
                    <li><a onClick={toggleDetails}>Basic Set Up</a></li>
                    <li><a>Rendering Elements</a></li>
                    <li><a>First Component</a></li>
                    <li><a>Component Lifecycle Methods</a></li>
                    <li><a>State VS Props</a></li>
                    <li>
                        <a>Hooks</a>
                        <ul>
                            <li><a>Change Your Mindset!</a></li>
                            <li><a>Rules</a></li>
                            <li><a>useState</a></li>
                        </ul>
                    </li>
                </ul>
                <p className="menu-label">
                    Advanced
                </p>
                <ul className="menu-list">
                    <li><a>React PureComponent</a></li>
                    <li><a>Unidirectional Data Flow</a></li>
                    <li><a>Higher Order Component</a></li>
                </ul>
            </aside>
        </div>
    )
}

export default LearningSidebar;