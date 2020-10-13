import React, { useReducer } from 'react';

const myReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {
                count: state.count + 1
            }
        case 'subtract':
            return {
                count: state.count - 1
            }
        default:
            return state
    }
}

const Reducer = () => {
    const [state, dispatch] = useReducer(myReducer, { count: 0 });

    return (
        <>
            <button onClick={() => dispatch({ type: 'add' })}>Add</button>
            <button onClick={() => dispatch({ type: 'subtract' })}>Subtract</button>
            <p>{state.count}</p>
        </>
    )
}

export default Reducer;