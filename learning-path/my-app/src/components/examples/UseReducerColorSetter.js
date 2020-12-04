import React, { useReducer } from 'react';
import './UseReducerColorSetter.scss';

const initialState = {
    color: 'black',
    bgColor: 'white'
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'dawn':
            return {
                color: 'blue'
            }
        case 'reset':
            return initialState
        default:
            return {
                state
            }
    }
}

const UseReducerColorSetter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { color, bgColor } = state;
    return (
        <>
            <div style={{ color: `${color}`, backgroundColor: `${bgColor}` }} className='card'>
                Hello
            </div>
            <button onClick={() => dispatch({ type: 'dawn' })}>Dawn mode</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </>
    )
}

export default UseReducerColorSetter;