import React from 'react';
const Welcome = (props) => {
    const { name, title } = props
    return (
        <>
            <h3>Hello, {name}</h3>
            <p>Your title is {title}</p>
        </>
    )
}
export default Welcome;