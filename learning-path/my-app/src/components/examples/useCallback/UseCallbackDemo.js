import React, { useState, memo, useCallback } from 'react';

const Child = memo(({ reset }) => {
    console.log("re-render child component.")
    return (
        <div>
            <p>child component which resets count</p>
            <button onClick={reset}>Reset Count</button>
        </div>
    );
});

const UseCallbackDemo = () => {
    const [count, setCount] = useState(0);
    console.log("re-render parent component");
    const resetCount = useCallback(() => {
        setCount(0);
    }, [setCount]);
    return (
        <main>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count => (count + 1))}>Increment</button>
            <Child reset={resetCount} />
        </main>
    )
}

export default UseCallbackDemo;