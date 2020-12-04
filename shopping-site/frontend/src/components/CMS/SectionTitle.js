import React from 'react';
import './SectionTitle.scss';

const SectionTitle = ({children, type}) => {
    return (
        <h1 className={`section-${type}`}>
            {children}
        </h1>
    )
}

export default SectionTitle;