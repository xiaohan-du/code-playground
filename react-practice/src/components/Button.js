import React, { useState } from 'react';

function Button() {
    const [buttonText, setButtonText] = useState('Click me');
    function onClick() {
        setButtonText('Clicked');
    }
    return (
        <button onClick={onClick}>{buttonText}</button>
    )
}

export default Button;