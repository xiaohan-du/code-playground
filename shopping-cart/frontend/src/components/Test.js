import React from 'react';

const Test = ({ id, title, totalPrice, handleClick }) => {
    return (
        <>
            <div key={id}>
                <p>{id}</p>
                <p>{title}</p>
                <p>{totalPrice}</p>
                <button onClick={() => handleClick(id, 1)}>Click for add one</button>
            </div>
        </>
    )
}

export default Test;