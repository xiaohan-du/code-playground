import React, { useState, useEffect } from 'react';
import { Paragraph } from '../../components/CMS/index.js';

const Hoc = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                Higher Order Component (HOC)
            </summary>
            <Paragraph>
                TBC
            </Paragraph>
        </details>
    )
}

export default Hoc;