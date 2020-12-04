import React, { useState } from 'react';

const UseStateManageMultiState = () => {
    const initialState = {
        name: 'Tom',
        age: 30,
        height: 175
    };
    const [state, setState] = useState(initialState)
    const handleName = () => {
        setState({ ...state, name: 'John' })
    }
    const handleAge = () => {
        setState({ ...state, age: 24 })
    }
    const handleHeight = () => {
        setState({...state, height: 180});
    }
    const resetState = () => {
        setState(initialState);
    }
    const { name, age, height } = state;
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
            <button onClick={handleName}>Click to update name</button>
            <button onClick={handleAge}>Click to update age</button>
            <button onClick={handleHeight}>Click to update height</button>
            <br />
            <button onClick={resetState}>Click to reset all</button>
        </>
    )
}

export default UseStateManageMultiState;