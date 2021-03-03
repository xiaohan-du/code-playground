import React, { useMemo, useState } from 'react';

const UseMemoDemo = () => {
    const [count, setCount] = useState(0);
    const [val, setVal] = useState('');
    const computeExpensiveValue = useMemo(() => {
        console.log('Inside the expensive computation');
        let sum = 0;
        for (let i = 0; i < count; i++) {
            sum += i;
        }
        return sum
    }, [count])
    return (
        <div>
            <div>
                Input value: {val}
                <input value={val} onChange={e => setVal(e.target.value)} />
            </div>
            <div>
                Count: {count}
                <button onClick={() => setCount(count + 1)}>+1</button>
            </div>
            <div>Function output: {computeExpensiveValue}</div>
        </div>
    )
}

export default UseMemoDemo