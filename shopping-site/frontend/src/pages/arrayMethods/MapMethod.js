import React, { useState, useEffect } from 'react';
import { Paragraph } from '../../components/CMS';

const MapMethod = ({ toggleDetails, openDetails, id }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id)}>
                map()
            </summary>
            <Paragraph>
                map
            </Paragraph>
        </details>
    )
}

export default MapMethod;