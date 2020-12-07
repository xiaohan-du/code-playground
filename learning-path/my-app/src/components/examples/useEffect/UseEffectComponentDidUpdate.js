import React, { useState, useEffect, useRef } from 'react';
const UseEffectComponentDidUpdate = () => {
    const [count, setCount] = useState(0);
    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            mounted.current = true;
        }
        else {
            document.title = `You clicked ${count} times`
        }
    });
    return (
        <>
            <button onClick={() => { setCount(count + 1) }}>+1</button>
        </>
    )
}

export default UseEffectComponentDidUpdate;