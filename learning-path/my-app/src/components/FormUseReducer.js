import React, { useReducer } from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case 'change':
            return {
                ...state,
                [action.name]: action.value
            }
        default:
            return state
    }
}

const FormUseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: 'John',
        age: 25
    });
    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        dispatch({type: 'change', name, value});
    }
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor='name'>Name: </label>
                <input type='text' id='name' name='name' placeholder={state.name} onChange={handleChange} />
                <p>The person's name is {state.name}.</p>
                <br />
                <label htmlFor='age'>Age: </label>
                <input type='text' id='age' name='age' placeholder={state.age} onChange={handleChange} />
                <p>His/her age is {state.age}.</p>
            </form>
        </>
    )
}

export default FormUseReducer;