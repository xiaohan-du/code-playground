import React from 'react';

class SetStateMultiState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Tom',
            age: 30
        }
    }
    render() {
        return (
            <>
                <p>Name: {this.state.name}</p>
                <p>Age: {this.state.age}</p>
                <button onClick={() => { this.setState({ name: 'John' }) }}>
                    Click to update name
                </button>
            </>
        )
    }
}

export default SetStateMultiState;