import React, { useReducer } from 'react';

const initialState = {
    name: 'John',
    age: 25
};

const reducer = (state, action) => {
    const { type, name, value } = action;
    switch (type) {
        case 'change':
            return {
                ...state,
                [name]: value
            }
        default:
            return state
    }
}

const UseReducerForm = () => {
    const [formState, dispatch] = useReducer(reducer, initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'change', name, value });
    }
    const { name, age } = formState;
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='reducer-name'>Name: </label>
                <input type='text' id='reducer-name' name='name' placeholder={name} onChange={handleChange} />
                <p>The person's name is {name}.</p>
                <br />
                <label htmlFor='reducer-age'>Age: </label>
                <input type='text' id='reducer-age' name='age' placeholder={age} onChange={handleChange} />
                <p>His/her age is {age}.</p>
            </form>
        </>
    )
}

export default UseReducerForm;