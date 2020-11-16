import React, { useState } from 'react';

const UseStateExample = () => {
    const initialState = {
        name: 'Mike',
        age: 20
    };

    const [state, setState] = useState(initialState);
    const handleClick = () => {
        setState({
            name: ['Tom', ' Will'],
            age: 30
        });
    };
    const {name, age} = state;
    return (
        <>
            <p>{name}</p>
            <p>{age}</p>
            <button onClick={handleClick}>Click</button>
        </>
    )
}

export default UseStateExample;