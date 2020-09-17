// If components are rendered automatically by mapping objects array, how to individualize behaviour of each component?

import React from 'react';

const CompOperateOnMappedObjects = ({ id, title, totalPrice, handleClick }) => {
    return (
        <>
            <div key={id}>
                <p>{id}. {title}</p>
                <p>{totalPrice}</p>
                <button onClick={() => handleClick(id, 1)}>Click for add one</button>
            </div>
        </>
    )
}

export default CompOperateOnMappedObjects;