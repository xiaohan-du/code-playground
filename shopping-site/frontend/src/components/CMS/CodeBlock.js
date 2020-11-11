import React from 'react';
import './CodeBlock.scss';
import Highlight from 'react-highlight.js';

const CodeBlock = (props) => {
    const { language, title, code } = props;
    return (
        <>
            <Highlight className={language}>
                <div children={code} />
            </Highlight>
            <p className='code-block-title'>{title}</p>
        </>
    )
}

export default CodeBlock;