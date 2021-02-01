import React, { useState, useEffect } from 'react';
import { Paragraph } from '../../components/CMS/index.js';

const UniDirectional = ({ toggleDetails, openDetails, id }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id)}>
                Unidirectional Data flow
            </summary>
            <Paragraph>
                TBC
            </Paragraph>
        </details>
    )
}

export default UniDirectional;