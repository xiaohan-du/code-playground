import React, { useState } from 'react';

const UseStateExample1 = () => {
    const initialState = {
        name: 'Tom',
        age: 30
    };

    const [state, setState] = useState(initialState)

    const handleClick1 = () => {
        setState({ ...state, name: 'John' })
    }

    const handleClick2 = () => {
        setState({ ...state, age: 24 })
    }

    const { name, age } = state;

    return (
        <>
            <p>{name}</p>
            <p>{age}</p>
            <button onClick={handleClick1}>Click 1</button>
            <button onClick={handleClick2}>Click 2</button>
        </>
    )
}

export default UseStateExample1;