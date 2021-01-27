import React, { useState, useEffect } from 'react';
import { Paragraph } from '../../components/CMS/index.js';

const UniDirectional = ({ toggleDetails, openDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes('unidirectional'));
    })
    return (
        <details open={isOpen} onClick={() => toggleDetails('unidirectional')}>
            <summary className='learning-subtitle'>
                Unidirectional Data flow
            </summary>
            <Paragraph>
                TBC
            </Paragraph>
        </details>
    )
}

export default UniDirectional;