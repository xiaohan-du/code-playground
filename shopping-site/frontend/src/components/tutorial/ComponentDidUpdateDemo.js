import React from 'react';

class ComponentDidUpdateDemo extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            name: 'John'
        };
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('prevState is ', prevState);
        console.log('prevProps is ', prevProps);
    }

    render() {
        const { name } = this.state;
        return (
            <>
                <div>The name is {name}</div>
                <label htmlFor='prevstate'>Type here to see prevState in console: </label>
                <input id='prevstate' onChange={(e) => { this.setState({ name: e.target.value }) }} />
                <div>The age is {this.props.age}</div>
            </>
        )
    }
}

export default ComponentDidUpdateDemo;