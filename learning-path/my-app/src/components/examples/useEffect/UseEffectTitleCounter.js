import React, { useState, useEffect } from 'react';

const UseEffectTitleCounter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    return (
        <>
            <button onClick={() => {setCount(count + 1)}}>+1</button>
        </>
    )
}

export default UseEffectTitleCounter;