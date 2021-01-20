import React from 'react';

class ComponentDidMountFetchApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: null,
            title: '',
            err: null
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(
                (result) => {
                    this.setState({
                        userId: result.userId,
                        title: result.title
                    });
                },
                (err) => {
                    this.setState({
                        err
                    })
                }
            )
    }
    render() {
        const { err, userId, title } = this.state;
        if (err) {
            return <div>Error: {err}</div>
        }
        else {
            return (
                <div>
                    <p>Your user ID is {userId}</p>
                    <p>Your title is {title}</p>
                </div>
            )
        }
    }
}

export default ComponentDidMountFetchApi;