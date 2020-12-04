import React, { useState } from 'react';
import { Paragraph, SectionTitle, CodeBlock, CodeBlockRow, CodeDemo } from '../../components/CMS/index.js';
import ComponentDidMountFetchApi from '../../components/tutorial/ComponentDidMountFetchApi';
import ComponentDidUpdateDemo from '../../components/tutorial/ComponentDidUpdateDemo';
import ComponentWillUnmountDemo from '../../components/tutorial/ComponentWillUnmountDemo.js';

const ClassLifecycle = () => {
    const [age, setAge] = useState(30);
    const [showUnmount, setShowUnmount] = useState(true);
    return (
        <details>
            <summary className='learning-subtitle'>
                Component Lifecycle Methods for Class Components
            </summary>
            <Paragraph>
                Each component has a lifecycle which contains 3 main phases: Mounting, Updating, Unmounting.
                Component lifecycle is important for both class and function components, and the way they work
                in these two component types is different. Although function component is the trend, I
                think it is beneficial to understand how component lifecycle methods work in class components.
                Let's look at the three phases:
            </Paragraph>
            <ul>
                <li>
                    Mounting: putting components in the DOM. The <code>componentDidMount()</code> method is
                    called immediately after mounting a component.
                </li>
                <li>
                    Updating: a component is updated whenever the component state or props is
                    changed. The <code>componentDidUpdate()</code> method is called when updating a component.
                </li>
                <li>
                    Unmounting: when a component is removed (unmounted) from the DOM. The <code>componentWillUnmount()</code> method
                    is called when the component is about to be unmounted from the DOM.
                </li>
            </ul>
            <SectionTitle type={'title'}>
                Mounting: componentDidMount()
            </SectionTitle>
            <Paragraph>
                The following example fetches data from an API immediately after the component is mounted.
                A function which operates on component mounting should be placed in <code>componentDidMount()</code> method.
            </Paragraph>
            <CodeBlock
                language='react'
                title='Fetch api on component mounting'
                code={`class ComponentDidMountFetchApi extends React.Component {
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
}`}>
            </CodeBlock>
            <CodeDemo demoComponent={<ComponentDidMountFetchApi />} />
            <SectionTitle type={'title'}>
                Updating: componentDidUpdate()
            </SectionTitle>
            <Paragraph>
                <code>componentDidUpdate()</code> is invoked everytime after the component is updated, i.e. state or props is changed.
                Initial rendering does not invoke this method. It takes three
                parameters: <code>prevProps</code>, <code>prevState</code> and <code>snapshot</code>. The third parameter is rarely used
                so we are going to demo with the first two parameters. Let's take a look at the following simple example:
            </Paragraph>
            <CodeBlockRow
                language1='react'
                code1={`class ComponentDidUpdateDemo extends React.Component {
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
}`}
                language2='react'
                code2={`const App = () => {
    const [age, setAge] = useState(30);
    return (
        <div className="App">
            <ComponentDidUpdateDemo age={age}/>
            <label htmlFor='prevprops'>Type here to see prevProps in console: </label>
            <input id='prevprops' onChange={(e) => {setAge(e.target.value)}} />
        </div>
    );
}`}
                title='Understand componentDidUpdate lifecycle method'
            />
            <details className='code-demo'>
                <summary>Demo, please open the browser console</summary>
                <ComponentDidUpdateDemo age={age} />
                <label htmlFor='prevprops'>Type here to see prevProps in console: </label>
                <input id='prevprops' onChange={(e) => { setAge(e.target.value) }} />
            </details>
            <Paragraph>
                The above example updates its inner <code>state</code> and accepts a <code>props</code> from the parent
                component. When typing in the first input field, the parameter <code>prevState</code> is updated, which as
                its name implies, logs value of the previous state. The first time it updates with the initial value of the state,
                the second time it updates with the first input value, the third time with the second input value, etc.
                Similarly, when typing in the second input field, the <code>prevProps</code> is updated in the same pattern.
            </Paragraph>
            <SectionTitle type={'title'}>
                Unmounting: componentWillUnmount()
            </SectionTitle>
            <Paragraph>
                <code>componentWillUnmount()</code> is invoked immediately <b>before</b> a component is
                unmounted and destroyed. Let's look at the following simple example:
            </Paragraph>
            <CodeBlockRow
                language1='react'
                code1={`class ComponentWillUnmountDemo extends React.Component {
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
}`}
                language2='react'
                code2={`const App = () => {
    const [showUnmount, setShowUnmount] = useState(true);
    return (
        <div className="App">
            {showUnmount ? <ComponentWillUnmountDemo /> : null}
            <button onClick={() => {setShowUnmount(false)}}>Remove</button>
        </div>
    );
}`}
                title='componentWillUnmount method is invoked before the component is destroyed'
            />
            <details className='code-demo'>
                <summary>Demo, please open the browser console</summary>
                {showUnmount ? <ComponentWillUnmountDemo /> : null}
                <button onClick={() => { setShowUnmount(false) }}>Remove</button>
            </details>
            <Paragraph>
                In the above example, a button is set below to remove the component. When the tutorial is loaded, the
                example component is also rendered and the console logs 'Mount'; if the button is clicked, the component
                is removed (or destroyed, unmounted) and the console logs 'Unmount'.
            </Paragraph>
        </details>
    )
}

export default ClassLifecycle;