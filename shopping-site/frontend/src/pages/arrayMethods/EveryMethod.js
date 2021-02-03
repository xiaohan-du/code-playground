import React, { useState, useEffect } from 'react';
import { Paragraph } from '../../components/CMS';

const EveryMethod = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                every()
            </summary>
            <Paragraph>
                every
            </Paragraph>
        </details>
    )
}

export default EveryMethod;