import React from 'react';
import './SectionBlock.scss';

const SectionBlock = ({ title, componentBlocks }) => {
    return (
        <>
            <div className='section-block'>
                <h1>{title}</h1>
                <div className='section-block-content'>
                    {componentBlocks.map(block => {
                        return (
                            block
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default SectionBlock;