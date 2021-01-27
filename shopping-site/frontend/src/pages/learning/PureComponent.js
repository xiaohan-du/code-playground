import React, { useState, useEffect } from 'react';
import { Paragraph } from '../../components/CMS/index.js';

const PureComponent = ({ toggleDetails, openDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes('pureComponent'));
    })
    return (
        <details open={isOpen} onClick={() => toggleDetails('pureComponent')}>
            <summary className='learning-subtitle'>
                React PureComponent
            </summary>
            <Paragraph>
                TBC
            </Paragraph>
        </details>
    )
}

export default PureComponent;