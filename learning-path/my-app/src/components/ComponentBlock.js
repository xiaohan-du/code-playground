import React from 'react';

const ComponentBlock = ({title, component }) => {
    return (
        <>
            <p className='component-block-title'>
                {title}
            </p>
            <div className='component-block-content'>
                {component}
            </div>
        </>
    )
}

export default ComponentBlock;