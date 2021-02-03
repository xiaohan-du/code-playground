import React, { useState, useEffect } from 'react';
import { Paragraph, CodeBlock } from '../../components/CMS';

const MapMethod = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                map()
            </summary>
            <Paragraph>
                map 
            </Paragraph>
        </details>
    )
}

export default MapMethod;