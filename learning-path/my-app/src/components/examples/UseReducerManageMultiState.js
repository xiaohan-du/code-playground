import React, { useReducer } from 'react';

const initialState = {
    name: 'Tom',
    age: 30,
    height: 175
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'name':
            return {
                ...state,
                name: 'John'
            }
        case 'age':
            return {
                ...state,
                age: 24
            }
        case 'height':
            return {
                ...state,
                height: 180
            }
        case 'reset':
            return initialState
        default:
            return state
    }
}
const UseReducerManageMultiState = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { name, age, height } = state;
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
            <button onClick={() => dispatch({ type: 'name' })}>Click to update name</button>
            <button onClick={() => dispatch({ type: 'age' })}>Click to update age</button>
            <button onClick={() => dispatch({ type: 'height' })}>Click to update height</button>
            <br />
            <button onClick={() => dispatch({ type: 'reset' })}>Click to reset all</button>
        </>
    )
}

export default UseReducerManageMultiState;