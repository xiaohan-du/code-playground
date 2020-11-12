import React from 'react';
import './CodeDemo.scss';

const CodeDemo = ({ demoComponent }) => {
    return (
        <details className='code-demo'>
            <summary>Demo</summary>
            {demoComponent}
        </details>
    )
}

export default CodeDemo;