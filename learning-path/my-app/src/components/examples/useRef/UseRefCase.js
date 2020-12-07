import React, { useEffect, useRef } from 'react';

// see UseStateVsUseRef.js
// useRef does not cause re-render
// setting ref is synchronous

const UseRefCase = () => {
    const intervalRef = useRef();
    useEffect(() => {
        const id = setInterval(() => {
            console.log('Hello');
        }, 3000);
        intervalRef.current = id;
        // console.log(intervalRef.current);
        return () => {
            clearInterval(intervalRef.current);
        };
    });
    return ( <></> )
}

export default UseRefCase;