import React, { useState, useEffect } from 'react';
import { Paragraph } from '../../components/CMS/index.js';

const PureComponent = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                React PureComponent
            </summary>
            <Paragraph>
                TBC
            </Paragraph>
        </details>
    )
}

export default PureComponent;