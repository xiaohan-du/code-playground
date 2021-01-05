import React from 'react';

const LearningSidebar = ({ toggleDetails }) => {
    return (
        <div className='learning-sidebar'>
            <aside className="menu">
                <p className="menu-label">
                    React Basics
                </p>
                <ul className="menu-list">
                    <li><a onClick={() => toggleDetails('compare')}>Compare</a></li>
                    <li><a onClick={() => toggleDetails('setup')}>Basic Set Up</a></li>
                    <li><a onClick={() => toggleDetails('rendering')}>Rendering Elements</a></li>
                    <li><a onClick={() => toggleDetails('firstComponent')}>First Component</a></li>
                    <li><a onClick={() => toggleDetails('componentLifecycle')}>Component Lifecycle Methods</a></li>
                    <li><a onClick={() => toggleDetails('stateVsProps')}>State VS Props</a></li>
                    <li><a onClick={() => toggleDetails('hooks')}>Hooks</a></li>
                </ul>
                <p className="menu-label">
                    Advanced
                </p>
                <ul className="menu-list">
                    <li><a onClick={() => toggleDetails('pureComponent')}>React PureComponent</a></li>
                    <li><a onClick={() => toggleDetails('unidirectional')}>Unidirectional Data Flow</a></li>
                    <li><a onClick={() => toggleDetails('hoc')}>Higher Order Component</a></li>
                </ul>
            </aside>
        </div>
    )
}

export default LearningSidebar;