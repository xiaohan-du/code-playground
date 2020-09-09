import React, { useReducer } from 'react';

const testReducer = (state, action) => {
    switch (action.type) {
        case 'show':
            return {
                showDiv: state.showDiv = true,
                data: state.data = [1, 2, 3]
            }
        /* case 'hide':
            return {
                showDiv: state.showDiv = false,
                data: state.data = []
            } */
        default:
            return {
                showDiv: state.showDiv = false,
                data: state.data = []
            }
    }
}

const TestUseReducer = () => {
    const [state, dispatch] = useReducer(testReducer, { showDiv: false, data: [] });

    const handleClick = () => {
        state.showDiv === true ? dispatch({ type: '' }) : dispatch({ type: 'show' });
    }

    return (
        <>
            <button onClick={handleClick}>Click to show text and data</button>
            <p>Data: {state.data}</p>
            {state.showDiv ? <p>Some text</p> : null}
        </>
    )
}

export default TestUseReducer;