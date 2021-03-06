import React, { useState, useEffect } from 'react';

const initialState = {
    userId: null,
    title: '',
    err: null
};
const UseEffectFetchApi = () => {
    const [userState, setUserState] = useState(initialState);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(
                (result) => {
                    setUserState({
                        ...userState,
                        userId: result.userId,
                        title: result.title
                    });
                },
                (err) => {
                    setUserState({
                        ...userState,
                        err: err
                    })
                }
            )
    })
    const { userId, title, err } = userState;
    if (err) {
        return (<div>Error: {err}</div>)
    }
    else {
        return (
            <div>
                <div>{err}</div>
                <p>Your user ID is {userId}</p>
                <p>Your title is {title}</p>
            </div>
        )
    }
}

export default UseEffectFetchApi;