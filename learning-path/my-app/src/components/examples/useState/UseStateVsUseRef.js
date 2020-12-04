import React, { useEffect, useState } from 'react';

// see UseRefVsUseState.js
// useState causes re-render
// setting state is asynchronous

const UseStateVsUseRef = () => {
    const [intervalId, setIntervalId] = useState();
    useEffect(() => {
        const id = setInterval(() => {
            console.log('Hi');
        }, 3000);
        setIntervalId(id);
        return () => {
            clearInterval(c => c)
        };
    }, []);
    const [count, setCount] = useState(0);
    return (
        <>
            <div>{intervalId}</div>
            <div>{count}</div>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </>
    )
}

export default UseStateVsUseRef;
