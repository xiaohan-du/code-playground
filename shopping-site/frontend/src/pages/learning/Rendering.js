import React, { useState, useEffect } from 'react';
import { Paragraph, CodeBlock } from '../../components/CMS/index.js';

const Rendering = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
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