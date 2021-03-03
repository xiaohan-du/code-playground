import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const handleAlertClick = () => {
        setTimeout(() => {
            console.log('You clicked on: ' + count);
        }, 3000)
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {setCount(count + 1)}}>+1</button>
            <button onClick={handleAlertClick}>Alert</button>
        </div>
    )
}

export default Counter;