import React, { useEffect, useState } from 'react';

const UseEffectUnchangedValue = () => {
    const [fakeCount, setFakeCount] = useState(0);
    const [count, setCount] = useState(5);
    useEffect(() => {
        console.log(count);
        console.log(fakeCount);
    }, []);
    const handleClick = () => {
        setCount(5);
        setFakeCount(fakeCount);
    }
    return (
        <>
            <p>The fake count is {fakeCount}</p>
            <p>The real count is {count}</p>
            <button onClick={handleClick}>+1</button>
        </>
    )
}

export default UseEffectUnchangedValue;