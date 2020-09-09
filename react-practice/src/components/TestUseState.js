import React, { useState } from 'react';

const TestUseState = () => {
    const [showDiv, setShowDiv] = useState(false);
    const [data, setData] = useState([]);

    const handleClick = () => {
        setShowDiv(true);
        setData([1, 2, 3]);
    }

    return (
        <>
            <button onClick={handleClick}>Click to show text and data</button>
            <p>Data: {data}</p>
            {showDiv ? <p>Some text</p> : null}
        </>
    )
}

export default TestUseState;