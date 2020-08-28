import React from 'react';

class ButtonClass extends React.Component {
    constructor() {
        super()
        this.state = {
            buttonText: 'Click me!'
        }
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.setState({
            buttonText: 'Clicked!'
        })
    }

    render() {
        return (
            <button onClick={this.onClick}>{this.state.buttonText}</button>
        )
    }
}

export default ButtonClass;