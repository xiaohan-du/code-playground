// If components are rendered automatically by mapping objects array, how to individualize behaviour of each component?

import React from 'react';

const CompOperateOnMappedObjects = ({ id, testid, title, totalPrice, handleClick }) => {
    return (
        <>
            <div key={id} data-testid={testid}>
                <p>{id}. {title}</p>
                <p className='total-price'>{totalPrice}</p>
                <button className='add' onClick={() => handleClick(id, 1)}>Add 1</button>
            </div>
        </>
    )
}

export default CompOperateOnMappedObjects;