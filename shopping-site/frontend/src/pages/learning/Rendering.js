import React, { useState, useEffect } from 'react';
import { Paragraph, CodeBlock } from '../../components/CMS/index.js';

const Rendering = ({ toggleDetails, openDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes('rendering'));
    })
    return (
        <details open={isOpen} onClick={() => toggleDetails('rendering')}>
            <summary className='learning-subtitle'>
                Rendering Elements
            </summary>
            <Paragraph>
                ReactDOM picks up the 'root' DOM and renders it in <code>index.js</code>.
                Any other elements rendered needs to be passed into
                the <code>ReactDOM.render()</code> method as follows:
            </Paragraph>
            <CodeBlock
                language='react'
                code={`ReactDOM.render(<App />, document.getElementById('root'));`}
            />
        </details>
    )
}

export default Rendering;