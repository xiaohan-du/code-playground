import React from 'react';

class ComponentDidUpdateCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    componentDidUpdate() {
        const count = this.state.count
        setTimeout(() => {
            console.log(`You clicked ${count} times`);
        }, 3000);
    }

    render() {
        return (
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>+1</button>
            </div>
        )
    }
}

export default ComponentDidUpdateCounter;