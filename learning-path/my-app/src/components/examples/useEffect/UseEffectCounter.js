import React, { useEffect, useState } from 'react';

const UseEffectCounter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            console.log(`You clicked ${count} times`);
        }, 3000);
    }, [count]);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
        </div>
    )
}

export default UseEffectCounter;