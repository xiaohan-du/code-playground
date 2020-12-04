import React, { useState, useEffect } from 'react';

const UseEffectTitleCounter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(c => c + 1)
    }, []);
    return (
        <>
            The count is {count}
        </>
    )
}

export default UseEffectTitleCounter;