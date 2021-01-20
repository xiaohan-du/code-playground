import React, { useState, useEffect } from 'react';

function Greeting({ name }) {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log('Hello, ' + name);
        console.log('A new effect');
    });

    return (
        <>
            <div>Hello, {name}</div>
            <button onClick={() => setCounter(counter + 1)}>
                Increment
            </button>
        </>
    );
}

export default Greeting;