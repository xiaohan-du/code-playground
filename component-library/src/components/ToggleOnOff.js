// useReducer to toggle on / off

import React, { useReducer } from 'react';

const ToggleOnOff = () => {
    const [state, setState] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        { toggleOn: false }
    )

    const toggle = () => {
        setState({ toggleOn: !state.toggleOn });
    };

    return (
        <>
            <button onClick={toggle}>Click me to toggle on / off</button>
            {state.toggleOn ? <div>Toggled on</div> : null}
        </>
    )
}

export default ToggleOnOff;
