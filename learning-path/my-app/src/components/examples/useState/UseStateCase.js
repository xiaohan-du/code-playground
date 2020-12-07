import React, { useEffect, useState } from 'react';

// see UseRefVsUseState.js
// useState causes re-render
// setting state is asynchronous

const UseStateCase = () => {
    const [intervalId, setIntervalId] = useState();
    useEffect(() => {
        const id = setInterval(() => {
            console.log('Hi');
        }, 3000);
        setIntervalId(id);
        // console.log(intervalId);
        return () => {
            clearInterval(c => c)
        };
    }, []);
    return ( <></> )
}

export default UseStateCase;
