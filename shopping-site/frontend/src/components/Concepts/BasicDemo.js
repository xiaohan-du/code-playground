import React, { useState } from 'react';


const BasicDemo = () => {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [output, setOutput] = useState(0);

    const testFunc = (m, n) => {
        let _m = parseInt(m, 10);
        let _n = parseInt(n, 10);
        _m += _n;
        return _m;
    };

    const callTestFunc = (m, n, o) => {
        const p = m * n;
        const q = p * o(m, n)
        return q;
    };

    const handleClick = () => {
        setOutput(callTestFunc(input1, input2, testFunc));
    };

    return (
        <div>
            <div>Input 2 numbers</div>
            a: <input type='number' value={input1} onChange={e => setInput1(e.target.value)} /> &nbsp; 
            b: <input type='number' value={input2} onChange={e => setInput2(e.target.value)} /> <br></br>
            a x b x (a + b) = { output } <br></br>
            <button onClick={handleClick}>Click to calculate</button>
        </div>
    )
}

export default BasicDemo;