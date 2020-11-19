import React, { useState } from 'react';
import './Learning.scss';
import { Helmet } from "react-helmet";
import { ScrollToTopOnMount } from '../functions/ScrollToTopOnMount';
import { Paragraph, SectionTitle, CodeBlock, CodeBlockRow, CodeDemo } from '../components/CMS/index.js';
import { UseStateCounter, UseStateForm, UseReducerCounter, ComponentDidUpdateDemo } from '../components/tutorial/index.js';
import ComponentWillUnmountDemo from '../components/tutorial/ComponentWillUnmountDemo';


const Learning = () => {
    const [age, setAge] = useState(30);
    const [showUnmount, setShowUnmount] = useState(true);
    return (
        <>
            <ScrollToTopOnMount />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Learn React - Xiaohan Du</title>
            </Helmet>
            <div className='learning'>
                <div className='center-content'>
                    <h1 className='learning-title'>
                        I learnt React through the following path, you may want to try it too
                    </h1>
                    <Paragraph>
                        Code can be found in <a href="https://github.com/xiaohan-du/code-playground/tree/master/learning-path/my-app">my Github page</a>
                    </Paragraph>
                    <h3 className='learning-section-title'>
                        React Basics
                    </h3>

                    <details>
                        <summary className='learning-subtitle'>
                            Compare React (a JS library) with Angular, Vue, Ember (JS frameworks)
                        </summary>
                        <Paragraph>
                            <a
                                href='https://app.pluralsight.com/course-player?clipId=d27a005e-3729-47e4-ab5e-5b3f2ea13023'
                                target="_blank">
                                Pluralsight course
                            </a>
                        </Paragraph>
                    </details>

                    <details>
                        <summary className='learning-subtitle'>
                            Basic set up with Create React App
                        </summary>
                        <Paragraph>
                            Create React App is always my first choice when building React apps. The main reason is that
                            it provides a complete set up for a React application including an initial project structure.
                        </Paragraph>
                        <Paragraph>
                            For convenience, this tutorial is going to be based on a React app created via Create React App.
                            Now let's walk through the very basics. Say the app is named as 'my-app',
                            open a terminal in the path where you want to place your React app,
                            type the following commands:
                        </Paragraph>
                        <div className='learning-content'>
                            <pre children={`npx create-react-app my-app
cd my-app
npm start`} />
                        </div>
                        <Paragraph>
                            You should be able to
                            see the page being deployed at <code>http://localhost:3000/</code>.
                        </Paragraph>
                        <Paragraph>
                            The initial file structure is like this: <br />
                            <img src={require('../images/learning/tree.png').default} alt='tree' /> <br />
                            where <code>index.js</code> invokes <code>App.js</code>, and <code>App.js</code> renders what
                            we are seeing on the page.
                            Try modifying <code>App.js</code>, save and see the change in the page taking effect almost immediately.
                        </Paragraph>
                        <Paragraph>
                            Open <code>index.html</code> and you'll see <code>&lt;div id='root'&gt;&lt;/div&gt;</code>. ReactDOM
                            finds <code>root</code> element and renders it in <code>index.js</code>.
                        </Paragraph>
                    </details>

                    <details>
                        <summary className='learning-subtitle'>
                            Rendering Elements
                        </summary>
                        <Paragraph>
                            ReactDOM picks up the 'root' DOM and renders it in <code>index.js</code>.
                            Any other elements rendered needs to be passed into
                            the <code>ReactDOM.render()</code> method as follows:
                        </Paragraph>
                        <CodeBlock
                            language='react'
                            code={`ReactDOM.render(<App />, document.getElementById('root'));`}
                        />
                    </details>

                    <details>
                        <summary className='learning-subtitle'>
                            First component
                        </summary>
                        <Paragraph>
                            Just like other JS frameworks like Angular or Vue, components in React are independent and reusable code pieces.
                            Let's build our first React component <code>HelloWorld.js</code>.
                        </Paragraph>
                        <Paragraph>
                            Create a folder <code>components</code> in <code>./src</code>, then create
                            2 new files: <code>HelloWorld.js</code> and <code>HelloWorld.scss</code> in <code>./src/components</code>. <code>HelloWorld.js</code> could be one of the following code snippets:
                        </Paragraph>

                        <CodeBlockRow
                            language1='react'
                            code1={`import React from 'react';
import './HelloWorld.scss';
const HelloWorld = () => {
    return (
        <>
            <div className='hello-world'>
                Hello world!
            </div>
        </>
    )
}
export default HelloWorld;`}
                            language2='react'
                            code2={`import React from 'react';
import './HelloWorld.scss';
class HelloWorld extends React.Component {
    render() {
        return (
            <>
                <div className='hello-world'>
                    Hello world!
                </div>
            </>
        )
    }
}
export default HelloWorld;`}
                            title='Function component (left) VS class component (right)'
                        />

                        <Paragraph>
                            Then change <code>App.js</code> to:
                        </Paragraph>
                        <CodeBlock
                            language='react'
                            title='App.js'
                            code={`import './App.css';
import HelloWorld from './components/HelloWorld';
function App() {
    return (
        <div className="App">
            <HelloWorld />
        </div>
    );
}
export default App;`}
                        />
                        <Paragraph>
                            To use a component, first import it using the <code>import</code> keyword, then use it like <code>&lt;HelloWorld /&gt;</code>. A user-defined component
                            name should always start with a capital letter. When using it, always close it with <code>/&gt;</code>.
                        </Paragraph>
                        <SectionTitle>Two types of components</SectionTitle>
                        <Paragraph>
                            The actual <code>HelloWorld</code> component can be a function component or a class component.
                            You may have already noticed the difference between these two types of components.
                            My recommendation is to use function component, for the following reasons:
                        </Paragraph>
                        <ul>
                            <li>
                                Function components usually need less code;
                            </li>
                            <li>
                                Function components are easier to read and test;
                            </li>
                            <li>
                                There might be a performance boost by using function components.
                            </li>
                        </ul>
                        <Paragraph>
                            React added Hooks in version 16.8. React is all about states, and Hooks let you use state
                            and other features in function components without writing a class.
                            This is another reason I think there is no need to use class components any more if you are using React v16.8 and later.
                            However, if you are using pre v16.8, you'll still need class components for state management.
                        </Paragraph>
                        <SectionTitle>Basic styling</SectionTitle>
                        <Paragraph>
                            The first two lines import React and <code>HelloWorld.scss</code>. In order to style the component,
                            define the CSS classes in <code>HelloWorld.scss</code>:
                        </Paragraph>
                        <CodeBlock
                            language='react'
                            code={`.hello-world {
    color: green;
}`}
                        />
                        <Paragraph>
                            As the <code>hello-world</code> class is already added to the <code>div</code>, the text becomes green.
                        </Paragraph>
                        <SectionTitle>JSX</SectionTitle>
                        <CodeBlock
                            language='react'
                            code={`<>
    <div className='hello-world'>
        Hello world!
    </div>
</>`}
                        />
                        <Paragraph>
                            This part of <code>HelloWorld.js</code> is a JSX.
                            JSX is the React syntax extension to JavaScript and it describes the UI.
                            It may look like HTML but also has the full power of JavaScript, e.g. any valid JS expression can be put into JSX
                            with curly braces.
                        </Paragraph>
                        <Paragraph>
                            The <code>&lt;&gt;&lt;/&gt;</code> at both ends of the JSX forms a React
                            fragment. <code>&lt;&gt;&lt;/&gt;</code> is equivalent
                            to <code>&lt;React.Fragment&gt;&lt;/React.Fragment&gt;</code>. Wrapping
                            elements inside fragments allows a component to group a list of children. This is allowed:
                        </Paragraph>
                        <CodeBlock
                            language='react'
                            code={`render() {
    return (
        <>
            <div>Element 1</div>
            <div>Element 2</div>
        </>
    )
}`}
                        />
                        <Paragraph>This is not allowed and gives
                        error: <code>Adjacent JSX elements must be wrapped in an enclosing tag</code>
                        </Paragraph>
                        <CodeBlock
                            language='react'
                            code={`render() {
    return (
        <div>Element 1</div>
        <div>Element 2</div>
    )
}`}
                        />
                        <Paragraph>
                            If there is only one element, the fragment can be ignored, i.e. this is allowed:
                        </Paragraph>
                        <CodeBlock
                            language='react'
                            code={`render() {
    return (
        <div>Element 1</div>
    )
}`}
                        />
                    </details>

                    <details>

                        <summary className='learning-subtitle'>
                            Component Lifecycle for Class Components
                        </summary>
                        <Paragraph>
                            Each component has a lifecycle which contains 3 main phases: Mounting, Updating, Unmounting.
                            Component lifecycle is important for both class and function components, and the way they work
                            in these two component types is different. Although function component is the trend, I
                            think it is beneficial to understand how component lifecycle works in class components.
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
                        <SectionTitle>
                            Mounting: componentDidMount()
                        </SectionTitle>
                        <Paragraph>
                            The following example fetches data from an API immediately after the component is mounted.
                            A function which operates on component mount should be placed in <code>componentDidMount()</code> method.
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
                        <SectionTitle>
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
                            Notice that <code>componentDidUpdate</code> is not invoked after the initial rendering.
                        </Paragraph>
                        <SectionTitle>
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
                            example component is also rendered so console logs 'Mount'; if the button is clicked, the component 
                            is removed (or destroyed, unmounted) and console logs 'Unmount'. 
                        </Paragraph>
                    </details>

                    <details>
                        <summary className='learning-subtitle'>
                            State VS Props
                        </summary>
                        <Paragraph>
                            State and props are probably the most commonly used concepts in React. Props is short for properties.
                            In short, props are used to pass data between React components unidirectionally, i.e. parent to child only;
                            state is the local state of the component which is only accesible within the component.
                        </Paragraph>
                        <SectionTitle>State</SectionTitle>
                        <Paragraph>
                            Let's look at an example of a component state
                            from <a href='https://reactjs.org/docs/hooks-state.html'>React Hooks docs</a>:
                            create <code>UseStateCounter.js</code> in <code>./src/components</code>:
                        </Paragraph>
                        <CodeBlock
                            language='react'
                            title='UseStateCounter.js'
                            code={`import React, {useState} from 'react';
const UseStateCounter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={() => {setCount(count + 1)}}>
                Click me
            </button>
        </>
    )
}
export default UseStateCounter;`}
                        />
                        <CodeDemo demoComponent={<UseStateCounter />} />
                        <Paragraph>
                            Don't forget to import and use <code>UseStateCounter</code> component in <code>App.js</code>. Click
                            the button to see count increases. In this example we imported a
                            Hook <code>useState</code>, which allows the function component <code>UseStateCounter</code> to use
                            state. <code>const [count, setCount] = useState(0)</code> accepts two parameters:
                            <code>count</code> (state) and <code>setCount</code> (function). An initial value 0
                            is set to <code>count</code>. There are several built-in Hooks and we can even define our own Hooks.
                            We will cover React Hooks later.
                        </Paragraph>
                        <Paragraph>
                            In the button element, an <code>onClick</code> event handler is used to increase the count. It invokes
                            the <code>setCount</code> function to update <code>count</code> state on each click. The updated
                            state is presented in <code>&#123;count&#125;</code>.
                        </Paragraph>
                        <Paragraph>
                            So what is state? React state is an object of observable properties that control the behaviour
                            of the component. When the state changes, the component re-renders. As the name implies,
                            a state is the internal state of a component, while props is the external input to a component.
                        </Paragraph>
                        <SectionTitle>Props</SectionTitle>
                        <Paragraph>
                            Let's look at an example of passing props from <a href='https://reactjs.org/docs/components-and-props.html'>React components and props doc</a>.
                            In this example a props is passed from a parent function component to a child component.
                            Create <code>Welcome.js</code> in <code>./src/components</code> and change <code>App.js</code> as follows:
                        </Paragraph>

                        <CodeBlockRow
                            language1='react'
                            code1={`const App = () => {
    return (
        <div className="App">
            <Welcome name='Sara' />
        </div>
    );
}`}
                            language2='react'
                            code2={`const Welcome = (props) => {
    return (
        <>
            <h1>Hello, {props.name}</h1>
        </>
    )
}`}
                            title='Passing props from parent to child component'
                        />
                        <Paragraph>
                            In the above example the data flows from parent (<code>App.js</code>) to child (<code>Welcome.js</code>).
                            This is called unidirectional data flow. In other frameworks this may be known as one-way binding,
                            which is opposite to two-way binding. My experience is that the data should always be flown from parent
                            to child component, even if sometimes you feel that data needs to be flown from child to parent,
                            you should think twice, resist the temptation to do so and think how you could make data flow from parent to child.
                            See <a href='https://medium.com/@duxiaohan_34311/react-pass-data-from-child-to-parent-ba466139a652'>my article</a> for
                            some discussion.
                        </Paragraph>
                        <SectionTitle>Destructuring Props is your friend</SectionTitle>
                        <Paragraph>
                            The above component <code>Welcome.js</code> contains <code>props.name</code>, which could introduce
                            a lot of repetition in the code. Imagine there are many properties in <code>props</code>, you
                            would not want to write <code>props.</code> in front of each property.
                            The solution is to use Destructuring Props. Check the following code:
                        </Paragraph>
                        <CodeBlock
                            language='react'
                            title='Welcome.js with destructuring props'
                            code={`const Welcome = (props) => {
    const { name, title } = props;
    return (
        <>
            <h1>Hello, {name}</h1>
            <p>Your title is {title}</p>
        </>
    )
}`}
                        />
                        <Paragraph>
                            With destructuring props, repetition is avoided by directly using
                            property names like <code>&#123;name&#125;</code> and <code>&#123;title&#125;</code>.
                        </Paragraph>
                        <SectionTitle>Nested destructuring</SectionTitle>
                        <Paragraph>
                            Sometimes the properties in an object are nested,
                            destructuring props can still be utilised.
                            Check the following example:
                        </Paragraph>
                        <CodeBlockRow
                            language1='react'
                            code1={`const Card = ({ props: { name, address: { address1, address2, city } } }) => {
    return (
        <>
            <div>
                {name} lives in {address1}, {address2}, {city}
            </div>
        </>
    )
}`}
                            language2='react'
                            code2={`const props = {
  name: 'John',
  address: {
    address1: '50, 5th Ave',
    address2: 'NY 10118',
    city: 'New York'
  }
}

const App = () => {
  return (
    <div className="App">
      <Card props={props} />
    </div>
  );
}`}
                            title='Nested destructuring'
                        />
                    </details>

                    <details>
                        <summary className='learning-subtitle'>
                            Hooks
                        </summary>
                        <Paragraph>
                            <a href='https://reactjs.org/docs/hooks-intro.html'>Hooks</a> are a new addition in React 16.8. They let you use
                            state and other React features without writing a class. Hooks are introduced in this tutorial before other concepts
                            because I think Hooks are one of the most important concept post v16.8.
                            Hooks enables the full power of function components. There are several built-in Hooks such
                            as <code>useState</code>, <code>useEffect</code>, <code>useContext</code>, <code>useReducer</code>, <code>useRef</code>, etc.
                            You can even build your own Hooks!
                        </Paragraph>
                        <SectionTitle>
                            Rules
                        </SectionTitle>
                        <Paragraph>
                            There are several rules to follow when using Hooks:
                        </Paragraph>
                        <ul>
                            <li>
                                A Hook always starts with <b>use</b>. This is how Hooks are differentiated from other React functions.
                                </li>
                            <li>
                                Hooks don't work in class components, they only work in function components.
                                </li>
                            <li>
                                Hooks should only be called at the top level, i.e. not inside loops, conditions or nested functions.
                                Do not call Hooks from regular JS functions.
                                </li>
                        </ul>
                        <SectionTitle>
                            useState: the state Hook
                        </SectionTitle>
                        <Paragraph>
                            <code>useState</code> Hook is used to introduce state to function components. Let's look at the difference
                            between class and function component when there is a state:
                        </Paragraph>
                        <CodeBlockRow
                            language1='react'
                            code1={`const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>
                Click me
            </button>
        </>
    )
}`}
                            language2='react'
                            code2={`class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    render() {
        return (
            <>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Click me
            </button>
            </> 
        )
    }
}`}
                            title='Class and function component state'
                        />
                        <Paragraph>
                            As you can see, using a class component significantly requires more code. Class components
                            also forces the use of certain syntax rules, making class component prone to errors.
                        </Paragraph>
                        <Paragraph>
                            In a function component, there is no <code>this</code>, so we use <code>useState</code> Hook.
                            The <code>useState</code> Hook declares a 'state variable' <code>count</code>, which is equivalent
                            to <code>this.state</code> in a class component. The only parameter passed into
                            the <code>useState</code> Hook is the initial state 0. The initial state does not need
                            to be an object like in class component, it can be a number, a string, a boolean or an array.
                        </Paragraph>
                        <Paragraph>
                            The <code>useState</code> Hook returns a pair of values: the current state and a function.
                            This is reflected in <code>const [count, setcount] = useState(0)</code>,
                            where <code>count</code> and <code>setCount</code> are equivalent to <code>this.state.count</code> and
                            <code>this.setState</code>, respectively. When the user clicks the
                            button, <code>setCount</code> is called and updates <code>count</code>. React re-renders the component
                            with the updated <code>count</code> value.
                        </Paragraph>
                        <SectionTitle>
                            What if there are many states?
                        </SectionTitle>
                        <Paragraph>
                            Imagine there is a case when several states are needed, we would not want to repeatedly
                            writing <code>useState</code>. In this case an <code>initialState</code> object can be set as the initial value
                            of <code>useState</code> Hook. Check the following code for a form with multiple
                            input fields (this is similar to two-way binding):
                        </Paragraph>
                        <CodeBlock
                            language='react'
                            title='Handle multiple states with useState Hook'
                            code={`const initialState = {
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
}`}
                        />
                        <CodeDemo demoComponent={<UseStateForm />} />
                        <SectionTitle>
                            useReducer: the action Hook
                        </SectionTitle>
                        <Paragraph>
                            The <code>useReducer</code> Hook is considered to be an additional Hook and an alternative to
                            the <code>useState</code> Hook. It is also used to manage state but more preferable to
                            the <code>useState</code> Hook when there is complex state logic. The syntax is:
                        </Paragraph>
                        <div className='learning-content'>
                            <pre children={`const [state, dispatch] = useReducer(reducer, initialArg, init);`} />
                        </div>
                        <Paragraph>
                            Let's take a look at an example from
                            the <a href='https://reactjs.org/docs/hooks-reference.html#usereducer'>official document</a>:
                        </Paragraph>
                        <CodeBlock
                            language='react'
                            title='useReducer Hook'
                            code={`const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        default:
            throw new Error();
    }
}

const UseReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0});
    return (
        <>
            Count: {state.count}
            <br />
            <button onClick={() => dispatch({type: 'increment'})}>+</button>
            <button onClick={() => dispatch({type: 'decrement'})}>-</button>
        </>
    )
}`}>

                        </CodeBlock>
                        <CodeDemo demoComponent={<UseReducerCounter />} />
                        <Paragraph>
                            In this example we first defined a <code>reducer</code> function which contains different cases.
                            This function was then passed into the <code>useReducer</code> Hook with an initial
                            value <code>&lt;count: 0&gt;</code>. The <code>useReducer</code> Hook returned the current
                            state with a <code>dispatch</code> method, which was used in the <code>onClick</code> event
                            to handle different cases.
                        </Paragraph>
                        <SectionTitle>
                            useReducer VS useState
                        </SectionTitle>
                        <Paragraph>
                            Now we can see how <code>useReducer</code> is different from <code>useState</code> in terms of
                            state management. With the above example, <code>useState</code> would need to set up
                            separately to manage 'increment' and 'decrement' states, while <code>useReducer</code> combines
                            both scenarios in one <code>reducer</code> function. As code complexity increases, the advantage
                            of <code>useReducer</code> over <code>useState</code> rises as the latter might be scattered
                            in the code, while the former gathers states in one <code>switch</code> statement.
                        </Paragraph>
                        <SectionTitle>
                            What if there are many states? (useReducer version)
                        </SectionTitle>
                        <Paragraph>
                            In the previous section we showed how <code>useState</code> can be used when there are many
                            states. Let's do a side-by-side comparison to see how the same example can be
                            re-written with <code>useReducer</code> Hook:
                        </Paragraph>
                        <CodeBlockRow
                            language1='react'
                            code1={`const initialState = {
    name: 'John',
    age: 25
};
const UseStateForm = () => {
    const [formState, setFormState] = useState(initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };









    // identical code blow
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
`}
                            language2='react'
                            code2={`const initialState = {
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
const FormUseReducer = () => {
    const [formState, dispatch] = useReducer(reducer, initialState);
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({ type: 'change', name, value });
    }
    // identical code below
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
}`}
                            title='useState VS useReducer'
                        />
                        <Paragraph>
                            The side-by-side example highlights the difference
                            between <code>useState</code> and <code>useReducer</code> in the same scenario. In the
                            same <code>handleChange</code> function, <code>useState</code> updates the state
                            with <code>setFormState</code> method, while <code>useReducer</code> updates the same state
                            with <code>dispatch</code> method, with some help from the <code>reducer</code> function.
                        </Paragraph>
                        <SectionTitle>
                            useEffect: the side effect Hook
                        </SectionTitle>
                        <Paragraph>
                            The <code>useEffect</code> Hook lets you perform side effects in function components. The code
                            in <code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code> can
                            now be placed in <code>useEffect</code>. The <code>useEffect</code> Hook can be used in
                            the following scenarios: fetch data when a component mounts, run code when state changes, set up
                            timers, etc.
                        </Paragraph>
                    </details>

                    <h3 className='learning-section-title'>
                        Advanced
                    </h3>
                    <details>
                        <summary className='learning-subtitle'>
                            React PureComponent
                        </summary>
                        <Paragraph>
                            TBC
                        </Paragraph>
                    </details>
                    <details>
                        <summary className='learning-subtitle'>
                            Unidirection Data flow
                        </summary>
                        <Paragraph>
                            TBC
                        </Paragraph>
                    </details>
                </div>
            </div>
        </>
    )
}

export default Learning;

