import React, { useState } from 'react';

const initialState = {
    name: 'John',
    age: 25
};
const UseStateForm = () => {
    const [formState, setFormState] = useState(initialState);
    const handleChange = (e) => {
        const { targetName, targetValue } = e.target;
        setFormState({
            ...formState,
            [targetName]: targetValue
        });
    };
    const { name, age } = formState;
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' name='name' placeholder={name} onChange={handleChange} />
                <p>The person's name is {name}.</p>
                <br />
                <label htmlFor='age'>Age: </label>
                <input type='text' id='age' name='age' placeholder={age} onChange={handleChange} />
                <p>His/her age is {age}.</p>
            </form>
        </>
    )
}

export default UseStateForm;  