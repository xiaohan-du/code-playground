import React, {useState, useRef} from 'react';

const UseRefVsUseState = () => {
    const countA = useRef(0);
    const handleClick = () => {
        countA.current += 1;
    }
    const [countB, setCountB] = useState(0);
    return (
        <>
            <div>{countA.current}</div>
            <button onClick={handleClick}>+1</button>
            <div>{countB}</div>
            <button onClick={() => {setCountB(countB + 1)}}>Update state and re-render</button>
        </>
    )
}

export default UseRefVsUseState;