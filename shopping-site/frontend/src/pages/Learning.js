import React from 'react';
import './Learning.scss';
import { Helmet } from "react-helmet";
import { ScrollToTopOnMount } from '../functions/ScrollToTopOnMount';
import CodeBlock from '../components/CodeBlock';
import CodeBlockRow from '../components/CodeBlockRow';

const Learning = () => {
    return (
        <>
            <ScrollToTopOnMount />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Learn React - Xiaohan Du</title>
            </Helmet>
            <div className='learning'>
                <div className='center-content'>
                    <h1 className='learning-title'>I learnt React through the following path, you may want to try it too</h1>
                    <p className='learning-content'>Code can be found
                        in <a href='https://github.com/xiaohan-du/code-playground/tree/master/learning-path/my-app'>my Github page</a>.</p>
                    <details>
                        <summary className='learning-subtitle'>
                            Compare React (a JS library) with Angular, Vue, Ember (JS frameworks)
                        </summary>
                        <p className='learning-content'>
                            <a
                                href='https://app.pluralsight.com/course-player?clipId=d27a005e-3729-47e4-ab5e-5b3f2ea13023'
                                target="_blank">
                                Pluralsight course
                            </a>
                        </p>
                    </details>

                    <details>
                        <summary className='learning-subtitle'>
                            Basic set up with Create React App
                        </summary>
                        <p className='learning-content'>
                            Create React App is always my first choice when building React apps. The main reason is that
                            it provides a complete set up for a React application including an initial project structure.
                        </p>
                        <p className='learning-content'>
                            For convenience, this tutorial is going to be based on an React app created via Create React App.
                            Now let's walk through the very basics. Say the app is named as 'my-app',
                            open a terminal in the path where you want to place your React app,
                            type the following commands:
                        </p>
                        <div className='learning-content'>
                            <pre children={`npx create-react-app my-app
cd my-app
npm start`} />
                        </div>
                        <p className='learning-content'>
                            You should be able to
                            see the page being deployed at <code>http://localhost:3000/</code>.
                        </p>
                        <p className='learning-content'>
                            The initial file structure is like this: <br />
                            <img src={require('../images/learning/tree.png').default} alt='tree' /> <br />
                            where <code>index.js</code> invokes <code>App.js</code>, and <code>App.js</code> renders what
                            we are seeing on the page.
                            Try modifying <code>App.js</code>, save and see the change in the page taking effect almost immediately.
                        </p>
                        <p className='learning-content'>
                            Open <code>index.html</code> and you'll see <code>&lt;div id='root'&gt;&lt;/div&gt;</code>. ReactDOM finds <code>root</code>
                            element and renders it in <code>index.js</code>.
                        </p>
                    </details>

                    <details>
                        <summary className='learning-subtitle'>
                            Rendering Elements
                        </summary>
                        <p className='learning-content'>
                            ReactDOM picks up the 'root' DOM and renders it in <code>index.js</code>.
                            Any other elements rendered needs to be passed into
                            the <code>ReactDOM.render()</code> method as follows:
                        </p>
                        <CodeBlock
                            language='react'
                            code={`ReactDOM.render(<App />, document.getElementById('root'));`}
                        />
                    </details>

                    <details>
                        <summary className='learning-subtitle'>
                            First component
                        </summary>
                        <p className='learning-content'>
                            Just like other JS frameworks like Angular or Vue, components in React are independent and reusable code pieces.
                            Let's build our first React component <code>HelloWorld.js</code>.
                        </p>
                        <p className='learning-content'>
                            Create a folder <code>components</code> in <code>./src</code>, then create
                            2 new files: <code>HelloWorld.js</code> and <code>HelloWorld.scss</code> in <code>./src/components</code>. <code>HelloWorld.js</code> could be one of the following code snippets:
                        </p>

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

                        <p className='learning-content'>
                            Then change <code>App.js</code> to:
                        </p>
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
                        <p className='learning-content'>
                            To use a component, first import it using the <code>import</code> keyword, then use it like <code>&lt;HelloWorld /&gt;</code>. A user-defined component
                            name should always start with a capital letter. When use it, always close it with <code>/&gt;</code>.
                        </p>
                        <h1 className='learning-section-title'>Two types of components</h1>
                        <p className='learning-content'>
                            The actual <code>HelloWorld</code> component can be a function component or a class component.
                            You may have already noticed the difference between these two types of components.
                            My recommendation is to use function component, for the following reasons:
                        </p>
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
                        <p className='learning-content'>
                            React added Hooks in version 16.8. React is all about states, and hooks let you use state
                            and other features in function components without writing a class.
                            This is another reason I think there is no need to use class components any more if you are using React v16.8 and later.
                            However, if you are using pre v16.8, you'll still need class components for state management.
                        </p>
                        <h1 className='learning-section-title'>Basic styling</h1>
                        <p className='learning-content'>
                            The first two lines import React and <code>HelloWorld.scss</code>. In order to style the component,
                            define the CSS classes in <code>HelloWorld.scss</code>:
                        </p>
                        <CodeBlock
                            language='react'
                            code={`.hello-world {
    color: green;
}`}
                        />
                        <p className='learning-content'>
                            As the <code>hello-world</code> class is already added to the <code>div</code>, the text becomes green.
                        </p>
                        <h1 className='learning-section-title'>JSX</h1>
                        <CodeBlock
                            language='react'
                            code={`<>
    <div className='hello-world'>
        Hello world!
    </div>
</>`}
                        />
                        <p className='learning-content'>
                            This part of <code>HelloWorld.js</code> is a JSX.
                            JSX is the React syntax extension to JavaScript and it describes the UI.
                            It may look like HTML but also has the full power of JavaScript, e.g. any valid JS expression can be put into JSX
                            with curly braces.
                        </p>
                        <p className='learning-content'>
                            The <code>&lt;&gt;&lt;/&gt;</code> at both ends of the JSX forms a React
                            fragment. <code>&lt;&gt;&lt;/&gt;</code> is equivalent
                            to <code>&lt;React.Fragment&gt;&lt;/React.Fragment&gt;</code>. Wrapping
                            elements inside fragments allows a component to group a list of children. This is allowed:
                        </p>
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
                        <p className='learning-content'>This is not allowed and gives
                        error: <code>Adjacent JSX elements must be wrapped in an enclosing tag</code></p>
                        <CodeBlock
                            language='react'
                            code={`render() {
    return (
        <div>Element 1</div>
        <div>Element 2</div>
    )
}`}
                        />
                    </details>

                    <details>
                        <summary className='learning-subtitle'>
                            State VS Props
                        </summary>
                        <p className='learning-content'>
                            State and props are probably the most commonly used concepts in React. Props is short for properties.
                            In short, props are used to pass data between React components uni-directionally, i.e. parent to child only;
                            state is the local state of the component which is only accesible within the component.
                        </p>
                        <h1 className='learning-section-title'>State</h1>
                        <p className='learning-content'>
                            Let's look at an example of a component state from <a href='https://reactjs.org/docs/hooks-state.html'>React hooks docs</a>: create
                            <code>Counter.js</code> in <code>./src/components</code>:
                        </p>
                        <CodeBlock
                            language='react'
                            title='Counter.js'
                            code={`import React, {useState} from 'react';
const Counter = () => {
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
export default Counter;`}
                        />
                        <p className='learning-content'>
                            Don't forget to import and use <code>Counter</code> in <code>App.js</code>. Click
                            the button to see count increases. In this example we imported a
                            hook <code>useState</code>, which allows function component <code>Counter</code> to use
                            state. <code>const [count, setCount] = useState(0)</code> accepts two parameters:
                            <code>count</code> (state) and <code>setCount</code> (function). An initial value 0
                            is set to <code>count</code>. There are several built-in hooks and we can even define our own hooks.
                            We will cover React hooks later.
                        </p>
                        <p className='learning-content'>
                            In the button element, an <code>onClick</code> event handler is used to increase the count. It invokes
                            the <code>setCount</code> function to update <code>count</code> state on each click. The updated
                            state is presented in <code>&#123;count&#125;</code>.
                        </p>

                        <h1 className='learning-section-title'>Props</h1>
                        <p className='learning-content'>
                            Let's look at an example of passing props from <a href='https://reactjs.org/docs/components-and-props.html'>React components and props doc</a>.
                            In this example a Props is passed from a parent function component to a child component.
                            Create <code>Welcome.js</code> in <code>./src/components</code> and change <code>App.js</code> as follows:
                        </p>

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
                        <p className='learning-content'>
                            In the above example the data flows from parent (<code>App.js</code>) to child (<code>Welcome.js</code>).
                            This is called unidirectional data flow. In other frameworks this may be known as one-way binding,
                            which is opposite to two-way binding. My experience is the data should always be flown from parent
                            to child component, even if sometimes you feel that data needs to be flown from child to parent,
                            you should think twice, resist the urge to do so and think how you could make data flow from parent to child.
                            See <a href='https://medium.com/@duxiaohan_34311/react-pass-data-from-child-to-parent-ba466139a652'>my article</a> for
                            some discussion.
                        </p>
                        <h1 className='learning-section-title'>Destructuring Props is your friend</h1>
                        <p className='learning-content'>
                            The above component <code>Welcome.js</code> contains <code>props.name</code>, which could introduce
                            a lot of repetition in the code. Imagine there are many properties in <code>props</code>, you
                            would not want to write <code>props.</code> in front of each property.
                            The solution is to use Destructuring Props. Check the following code:
                        </p>
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
                        <p className='learning-content'>
                            With destructuring props, repetition is avoided by directly using
                            property name like <code>&#123;name&#125;</code> and <code>&#123;title&#125;</code>.
                        </p>
                        <h1 className='learning-section-title'>Nested destructuring</h1>
                        <p className='learning-content'>
                            Sometimes the properties in an object can be nested, 
                            destructuring props can still be utilised. 
                            Check the following example:
                        </p>
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
                </div>
            </div>
        </>
    )
}

export default Learning;

