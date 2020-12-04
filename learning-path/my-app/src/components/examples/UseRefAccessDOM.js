import React, { useRef } from 'react';

const UseRefAccessDOM = () => {
    const inputRef = useRef();
    console.log(inputRef.current);
    const handleClick = (e) => {
        e.preventDefault();
        console.log(inputRef.current);
        inputRef.current.placeholder = 'hello'
    }
    return (
        <form>
            <input type='text' placeholder='Enter name' name='name' ref={inputRef} />
            <button onClick={handleClick}>Click me</button>
        </form>
    )
}

export default UseRefAccessDOM;