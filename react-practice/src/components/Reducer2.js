import React, { useReducer } from 'react';

const Reducer2 = () => {
    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        { count: 0 }
    );
    
    return (
        <>
            <button onClick={() => setState({count: state.count + 1})}>Add</button>
            <button onClick={() => setState({count: state.count - 1})}>Subtract</button>
            <p>{state.count}</p>
        </>
    )

}

export default Reducer2;