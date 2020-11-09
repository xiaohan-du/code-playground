import React from 'react';
const Welcome = (props) => {
    const { name, title } = props
    return (
        <>
            <h1>Hello, {name}</h1>
            <p>Your title is {title}</p>
        </>
    )
}
export default Welcome;