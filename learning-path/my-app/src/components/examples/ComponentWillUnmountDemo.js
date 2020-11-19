import React from 'react';

class ComponentWillUnmountDemo extends React.PureComponent {

    componentDidMount() {
        console.log('Mount');
    };
    componentWillUnmount() {
        console.log('Unmount');
    }

    render() {
        return(
            <>
                <div>Click the button to remove the element</div>
            </>
        )
    }
}

export default ComponentWillUnmountDemo;