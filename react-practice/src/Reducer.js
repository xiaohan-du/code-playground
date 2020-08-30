import React, { useReducer } from 'react';

const myReducer = (state, action) => {
    switch (action.type) {
        case ('add'):
            return {
                ...state,
                count: state.count + 1
            }
        default:
            return state
    }
}

const Reducer = ( ) => {
    const [state, dispatch] = useReducer(myReducer, { count: 0 });

    return (
        <div>
            <button onClick={() => dispatch({ type: 'add'})}>
                +1
            </button>
            <p>Count: {state.count}</p>
        </div>
    )
}

export default Reducer;