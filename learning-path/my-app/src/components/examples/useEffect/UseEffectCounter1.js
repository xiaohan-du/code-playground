import React, {useState, useEffect} from 'react';

const UseEffectCounter1 = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);
    return (
        <div>
            <button onClick={() => {setCount(count + 1)}}>+1</button>
        </div>
    )
}
export default UseEffectCounter1;