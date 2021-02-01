import React, { useState, useEffect } from 'react';
import { Paragraph } from '../../components/CMS';

const FilterMethod = ({ toggleDetails, openDetails, id }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id)}>
                filter()
            </summary>
            <Paragraph>
                filter
            </Paragraph>
        </details>
    )
}

export default FilterMethod;