import React, { useState } from 'react';
const UseStateCounter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <div>You clicked {count} times</div>
            <button onClick={() => { setCount(count + 1) }}>
                Click me
            </button>
        </>
    )
}
export default UseStateCounter;