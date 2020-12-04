import React, { useState, useRef } from 'react';

// see UseStateVsUseRef.js
// useRef does not cause re-render
// setting ref is synchronous

const UseRefVsUseState = () => {
    /* const intervalRef = useRef();
    useEffect(() => {
        const id = setInterval(() => {
            console.log('Hello');
        }, 3000);
        intervalRef.current = id;
        console.log(intervalRef.current);
        return () => {
            clearInterval(intervalRef.current);
        };
    }); */
    const countA = useRef(0);
    const handleClick = () => {
        countA.current += 1;
    }
    const [countB, setCountB] = useState(0);
    return (
        <>
            <div>{countA.current}</div>
            <button onClick={handleClick}>+1</button>
            <div>{countB}</div>
            <button onClick={() => {setCountB(countB + 1)}}>Update state and re-render</button>
        </>
    )
}

export default UseRefVsUseState;