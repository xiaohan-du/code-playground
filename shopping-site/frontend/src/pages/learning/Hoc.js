import React, { useState, useEffect } from 'react';
import { Paragraph } from '../../components/CMS/index.js';

const Hoc = ({ toggleDetails, openDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes('hoc'));
    })
    return (
        <details open={isOpen} onClick={() => toggleDetails('hoc')}>
            <summary className='learning-subtitle'>
                Higher Order Component (HOC)
            </summary>
            <Paragraph>
                TBC
            </Paragraph>
        </details>
    )
}

export default Hoc;