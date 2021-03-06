import React, { useState, useEffect } from 'react';
import { Paragraph, SectionTitle, CodeBlock, CodeBlockRow, CodeDemo } from '../../components/CMS/index.js';
import UseStateManageMultiState from '../../components/Learning/UseStateManageMultiState';
import UseReducerCounter from '../../components/Learning/UseReducerCounter';
import UseRefVsUseState1 from '../../components/Learning/UseRefVsUseState1';
import Counter from '../../components/Learning/useEffect/Counter';
import SetStateMultiState from '../../components/Learning/useState/SetStateMultiState';
import UseEffectGreet from '../../components/Learning/useEffect/Greeting';
import SetUserProfileDemo from '../../components/Learning/useEffect/SetUserProfileDemo';
import Panel from '../../components/Learning/useContext/Panel';
import UseMemoDemo from '../../components/Learning/useMemo/UseMemoDemo';

const Hooks = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                Hooks
            </summary>
            <Paragraph>
                <a href='https://reactjs.org/docs/hooks-intro.html'>Hooks</a> are a new addition in React 16.8. They let you use
                state and other React features without writing a class. I think Hooks are one of the most important concept post v16.8.
                Hooks enables the full power of function components. There are several built-in Hooks such
                as <code>useState</code>, <code>useEffect</code>, <code>useContext</code>, <code>useReducer</code>, <code>useRef</code>, etc.
                You can even build your own Hooks!
            </Paragraph>
            <SectionTitle type={'title'}>
                Change Your Mindset!
            </SectionTitle>
            <Paragraph>
                Before reading this section, I suggest you
                read <a href='https://overreacted.io/a-complete-guide-to-useeffect/'>A Complete Guide to useEffect</a> from
                the great Dan Abramov. This article is about the <code>useEffect</code> Hook which will be introduced in
                this section, but you can read the beginning and TL;DR first. An important note I took from the article
                is: when using Hooks, <b>stop thinking in the class component lifecycle way!</b>
            </Paragraph>
            <SectionTitle type={'title'}>
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

            {/* ============================================= */}
            <SectionTitle type={'title'}>
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
                title='State with class and function component'
            />
            <Paragraph>
                As you can see, using a class component significantly requires more code. Class components
                also forces the use of certain syntax rules, making class component prone to errors.
            </Paragraph>
            <Paragraph>
                In a function component, there is no <code>this</code>, so we use <code>useState</code> Hook to assign values to state.
                The <code>useState</code> Hook declares a 'state variable' <code>count</code>, which is equivalent
                to <code>this.state</code> in a class component. The only parameter passed into
                the <code>useState</code> Hook is the initial state. The initial state does not need
                to be an object like in class component, it can be a number, a string, a boolean or an array.
            </Paragraph>
            <Paragraph>
                The <code>useState</code> Hook returns a pair of values: the current state and a function.
                This is reflected in <code>const [count, setcount] = useState(0)</code>,
                where <code>count</code> and <code>setCount</code> are equivalent to <code>this.state.count</code> and
                <code>this.setState</code>, respectively. When the user clicks the
                button, <code>setCount</code> is called and updates <code>count</code>. React re-renders the component
                with the updated <code>count</code> value. Notice that <code>count</code> does not listen to or monitor any state
                changes, or do any 'data binding', it is rendered with the new value when React re-renders the component
                due to state update.
            </Paragraph>
            <SectionTitle type={'subtitle'}>
                What if there are many states?
            </SectionTitle>
            <Paragraph>
                Imagine there is a case when several states are needed, we would not want to repeatedly
                writing <code>useState</code>. In this case an <code>initialState</code> object can be set as the initial value
                of <code>useState</code> Hook.
                The <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax'>spread operator</a> is
                also necessary to preserve and avoid repeating states. In other words, without spreading the root state object, any values
                not explicitly set in the new object will be lost. Check the following code example which has three
                different states (try removing the <code>...state</code> to see the issue caused):
            </Paragraph>
            <CodeBlock
                language='react'
                title='Handle multiple states with useState Hook'
                code={`const UseStateManageMultiState = () => {
    const initialState = {
        name: 'Tom',
        age: 30,
        height: 175
    };
    const [state, setState] = useState(initialState)
    const handleName = () => {
        setState({ ...state, name: 'John' })
    }
    const handleAge = () => {
        setState({ ...state, age: 24 })
    }
    const handleHeight = () => {
        setState({...state, height: 180});
    }
    const resetState = () => {
        setState(initialState);
    }
    const { name, age, height } = state;
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
            <button onClick={handleName}>Click to update name</button>
            <button onClick={handleAge}>Click to update age</button>
            <button onClick={handleHeight}>Click to update height</button>
            <br />
            <button onClick={resetState}>Click to reset all</button>
        </>
    )
}`}
            />
            <CodeDemo demoComponent={<UseStateManageMultiState />} />
            <SectionTitle type={'subtitle'}>
                useState is different from setState
            </SectionTitle>
            <Paragraph>
                The <code>useState</code> Hook is different from class component <code>setState</code> method.
                As shown in the above example, <code>useState</code> Hook overwrites the previous state without any merging. To preserve
                the previous state, <code>...state</code> has to be used or the entire state object has to be passed.
                The <code>setState</code> method merges the previous state with the new one, so no need to pass the entire object.
                See the following example:
            </Paragraph>
            <CodeBlock
                language='react'
                title='Class component setState method does NOT overwrite state'
                code={`class SetStateMultiState extends React.Component {
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
}`}
            />
            <CodeDemo demoComponent={<SetStateMultiState />} />
            <Paragraph>
                In the above example, both state values are preserved after updating one key/value pair.
            </Paragraph>
            <SectionTitle type={'subtitle'}>
                Each render has its own event handlers
            </SectionTitle>
            <Paragraph>
                Each React render (re-render) returns its own event handler, as well as its own state. Let's take a look at this example:
            </Paragraph>
            <CodeBlock
                language='react'
                title='Each render has its own event handler'
                code={`const Counter = () => {
    const [count, setCount] = useState(0);
    const handleAlertClick = () => {
        setTimeout(() => {
            alert('You clicked on: ' + count);
        }, 3000)
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => {setCount(count + 1)}}>+1</button>
            <button onClick={handleAlertClick}>Alert</button>
        </div>
    )
}`}
            />
            <CodeDemo demoComponent={<Counter />} />
            <Paragraph>
                Let's do something like this: click '+1' button four times, then click 'Alert' button, before the three seconds
                timeout executes, click the '+1' button four more times so it shows 'You clicked 8 times'. Now the question
                is: would the alert show '4' or '8'?
            </Paragraph>
            <Paragraph>
                The answer is 4. This is because everytime '+1' button is clicked, <code>setCount</code> is invoked and updates
                the <code>count</code> state, which causes a re-render. Each React render has its
                own <code>handleAlertClick</code>. Therefore when clicking the 'Alert' button after the fourth click of '+1',
                the <code>handleAlertClick</code> which belongs to the fourth state update is executed and shows '4'.
                This has nothing to do with the eighth button click.
            </Paragraph>

            {/* ============================================= */}
            <SectionTitle type={'title'}>
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
                title='Counter with useReducer Hook'
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
            <SectionTitle type={'subtitle'}>
                What if there are many states? (useReducer version)
            </SectionTitle>
            <Paragraph>
                In the previous section we showed how <code>useState</code> can be used when there are many
                states. Let's do a side-by-side comparison to see how the same example can be
                re-written with <code>useReducer</code> Hook:
            </Paragraph>
            <CodeBlockRow
                language1='react'
                code1={`const UseStateManageMultiState = () => {
    const initialState = {
        name: 'Tom',
        age: 30,
        height: 175
    };
    const [state, setState] = useState(initialState)
    const handleName = () => {
        setState({ ...state, name: 'John' })
    }
    const handleAge = () => {
        setState({ ...state, age: 24 })
    }
    const handleHeight = () => {
        setState({...state, height: 180});
    }
    const resetState = () => {
        setState(initialState);
    }
    const { name, age, height } = state;
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
            <button onClick={handleName}>Click to update name</button>
            <button onClick={handleAge}>Click to update age</button>
            <button onClick={handleHeight}>Click to update height</button>
            <br />
            <button onClick={resetState}>Click to reset all</button>
        </>
    )
}`}
                language2='react'
                code2={`const initialState = {
    name: 'Tom',
    age: 30,
    height: 175
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'name':
            return {
                ...state,
                name: 'John'
            }
        case 'age':
            return {
                ...state,
                age: 24
            }
        case 'height':
            return {
                ...state,
                height: 180
            }
        case 'reset':
            return initialState
        default:
            return state
    }
}
const UseReducerManageMultiState = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { name, age, height } = state;
    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
            <button onClick={() => dispatch({ type: 'name' })}>Click to update name</button>
            <button onClick={() => dispatch({ type: 'age' })}>Click to update age</button>
            <button onClick={() => dispatch({ type: 'height' })}>Click to update height</button>
            <br />
            <button onClick={() => dispatch({ type: 'reset' })}>Click to reset all</button>
        </>
    )
}`}
                title='useState VS useReducer'
            />
            <Paragraph>
                The <code>useReducer</code> Hook requires more code in this case, but under the hood they do the same thing.
                Most of the time the <code>useState</code> Hook is sufficient, but there are cases when <code>useReducer</code> is preferable.
                Check the <a href='https://reactjs.org/docs/hooks-reference.html#:~:text=useReducer%20is%20usually%20preferable%20to,dispatch%20down%20instead%20of%20callbacks.'>official doc</a> for
                more explanation.
            </Paragraph>

            {/* ============================================= */}
            <SectionTitle type={'title'}>
                useEffect: the side effect Hook
            </SectionTitle>
            <Paragraph>
                The <code>useEffect</code> Hook lets you perform side effects in function components. Side effeccts includes
                data fetching, setting up subscriptions, manually changing the DOM, etc.
            </Paragraph>
            <Paragraph>
                I hope you still remember the beginning of this section: change your mindset and stop thinking in the component lifecycle way.
                Let's check the following simple example:
            </Paragraph>
            <CodeBlock
                language='react'
                title='A simple useEffect demo'
                code={`const UseEffectTitleCounter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = \`You clicked \${count} times\`;
    });
    return (
        <>
            <button onClick={() => {setCount(count + 1)}}>+1</button>
        </>
    )
}`}>
            </CodeBlock>
            <Paragraph>
                The <code>useEffect</code> Hook no longer differentiate between mount and update. As shown in the above example,
                <code>useEffect</code> is executed on both mount and update. It can also return a clean-up function to execute
                the unsubscription:
            </Paragraph>
            <CodeBlock
                language='react'
                title='Unsubscribe with useEffect'
                code={`useEffect(() => {
    const subscription = props.source.subscribe();
    return () => {
        subscription.unsubscribe(); // Clean up the subscription
    };
});`}>
            </CodeBlock>
            <Paragraph>
                We can also fetch API on component render with <code>useEffect</code>. Let's look at an example similar to
                the code shown in class component <code>componentDidMount</code> method:
            </Paragraph>
            <CodeBlock
                language='react'
                title='Fetch API with useEffect'
                code={`const initialState = {
    userId: null,
    title: '',
    err: null
};
const UseEffectFetchApi = () => {
    const [userState, setUserState] = useState(initialState);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(
                (result) => {
                    setUserState({
                        userId: result.userId,
                        title: result.title
                    });
                },
                (err) => {
                    setUserState({
                        err: err
                    })
                }
            )
    })
    const { userId, title, err } = userState;
    if (err) {
        return (<div>Error: {err}</div>)
    }
    else {
        return (
            <div>
                <p>Your user ID is {userId}</p>
                <p>Your title is {title}</p>
            </div>
        )
    }
}`}>
            </CodeBlock>
            <SectionTitle type={'subtitle'}>
                Each render has its own effects
            </SectionTitle>
            <Paragraph>
                In the above <code>UseEffectTitleCounter</code> example, each time clicking the '+1'
                button, <code>setCount</code> executes and updates the <code>count</code> value. We already know that each
                state update triggers a re-render thus triggers <code>useEffect</code> too. It is important to know that
                the effect in each re-render belongs to itself, which is similar to the previous event handler
                section. In other words, each re-render generates a different, new effect.
            </Paragraph>
            <SectionTitle type='subtitle'>
                useEffect deps
            </SectionTitle>
            <Paragraph>
                As mentioned before, the <code>useEffect</code> Hook no longer differentiate between 'mount' and 'update'. However a
                question might pop up in your mind: is this the most efficient way? What if at some stage I do not want to
                invoke <code>useEffect</code>? React provides a second argument to be passed to the <code>useEffect</code> Hook: a
                dependency array (deps). If a dependency array is passed to <code>useEffect</code>, the Hook will only be
                invoked if the properties in the dependency array update. Check the following example:
            </Paragraph>
            <CodeBlockRow
                language1='react'
                code1={`function Greeting({ name }) {
    const [counter, setCounter] = useState(0);
    useEffect(() => {
        console.log('Hello, ' + name);
        console.log('A new effect');
    });
    return (
        <>
            <div>Hello, {name}</div>
            <button onClick={() => setCounter(counter + 1)}>
                Increment
            </button>
        </>
    );
}`}
                language2='react'
                code2={`import Greeting from './Greeting';
const App = () => {
    return (
        <div className='App'>
            <UseEffectGreet name={'Andy'} />
        </div>
    )
};`}
                title='Pass a deps array to avoid unnecessary effects'
            />
            <details className='code-demo'>
                <summary>Demo, please open the browser console</summary>
                <UseEffectGreet name={'Andy'} />
            </details>
            <Paragraph>
                In this example, a <code>name</code> prop is passed into the <code>useEffect</code> Hook in <code>Greeting</code>.
                There is no state update inside <code>useEffect</code>, i.e. <code>name</code> does not change on button click.
                Therefore clicking the button should not generate a new effect. However, in this example a new effect is generated
                everytime the button is clicked, which can be seen in the console log. This is due to <code>setCounter</code> re-renders
                the component and <code>useEffect</code> is invoked on component render.
            </Paragraph>
            <Paragraph>
                The solution is passing the correct dependency <code>name</code> to <code>useEffect</code> as deps like this:
            </Paragraph>
            <CodeBlock
                language='react'
                title='A simple useEffect demo'
                code={`useEffect(() => {
    console.log('Hello, ' + name);
    console.log('A new effect');
}, [name]);`}>
            </CodeBlock>
            <Paragraph>
                <code>useEffect</code> will only be invoked if the value inside deps update. In this case <code>name</code> does not
                update after the initial render, so clicking the button will not log 'A new effect' any more. React recommends that all
                values from the component scope that updates should be included in the array.
            </Paragraph>
            <SectionTitle type={'subtitle'}>
                Do not lie to React about deps
            </SectionTitle>
            <Paragraph>
                Sometimes you just want to run <code>useEffect</code> on component mount, and you Google and find this solution:
            </Paragraph>
            <CodeBlock
                language='react'
                title='Passing an empty array to useEffect (?)'
                code={`useEffect(() => {
    // some code
}, []);`}>
            </CodeBlock>
            <Paragraph>
                This is sometimes okay, if there is actually no dependency, like the following example:
            </Paragraph>
            <CodeBlock
                language='react'
                title='No actual dependency'
                code={`const Counter = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(c => c + 1)
    }, []);
    return (
        <>
            The count is {count}
        </>
    )
}`}>
            </CodeBlock>
            <Paragraph>
                There is no dependency
                because <a href='https://reactjs.org/docs/hooks-reference.html#functional-updates'>Functional updates</a> is
                used: <code>setCount(c =&gt; c + 1)</code>. However it is not always
                okay to pass empty array as deps. For example: a component is used to display a user profile. On click of a button, the
                previous user profile is updated with a new user profile. Check the following code:
            </Paragraph>
            <CodeBlockRow
                language1='react'
                code1={`const SetUserProfile = ({ userId, userName }) => {
    const [user, setUser] = useState('');
    useEffect(() => {
        setUser(userId + '. ' + userName);
    }, [userId, userName]);
    return (
        <>
            <p>User: {user}</p>
        </>
    )
}`}
                language2='react'
                code2={`const userInfo = [
    {
        id: 1,
        name: 'Tom'
    },
    {
        id: 2,
        name: 'John'
    }
];
const [userProf, setUserProf] = useState(userInfo[0]);
const updateUserProfile = () => {
    setUserProf(userInfo[1])
}
<SetUserProfile userId={userProf.id} 
    userName={userProf.name} />
<button onClick={updateUserProfile}>Update</button>
                  `}
                title='userId and userName should not be ignored in this example'
            />
            <CodeDemo demoComponent={<SetUserProfileDemo />} />
            <Paragraph>
                Using <code>[]</code> instead of <code>[userId, userName]</code> stops the profile update.
                Passing <code>[]</code> as deps means nothing changes in the update, so <code>useEffect</code> would not
                execute even if <code>userId</code> and <code>userName</code> update. React linter should give
                the following warning for ignoring the deps:
            </Paragraph>
            <div className='learning-content'>
                <pre children={`React Hook useEffect has missing dependencies: 'userId' and 'userName'. Either include them or remove the dependency array.`} />
            </div>

            {/* ============================================= */}
            <SectionTitle type={'title'}>
                useRef: the reference Hook
            </SectionTitle>
            <Paragraph>
                According to React <a href='https://reactjs.org/docs/hooks-reference.html#useref'>official doc</a>, <code>useRef</code> is like a
                'box' that can hold a mutable value in its <code>.current</code> property. It accepts
                an input and assign a <code>current</code> property to the variable,
                e.g. <code>const inputRef = useRef(null)</code> assigns <code>null</code> to <code>inputRef.current</code>.
                The returned object will persist for the full lifetime of the component. This can be similar to
                the <code>useState</code> hook, which also declares a 'state variable'.
                However, they have a few differences. Check the following example:
            </Paragraph>
            <CodeBlockRow
                language1='react'
                code1={`const UseStateCase = () => {
    const [intervalId, setIntervalId] = useState();
    useEffect(() => {
        const id = setInterval(() => {
            console.log('Hi');
        }, 3000);
        setIntervalId(id);
        // console.log(intervalId);
        return () => {
            clearInterval(c => c)
        };
    }, []);
    return ( <></> )
}`}
                language2='react'
                code2={`const UseRefCase = () => {
    const intervalRef = useRef();
    useEffect(() => {
        const id = setInterval(() => {
            console.log('Hello');
        }, 3000);
        intervalRef.current = id;
        // console.log(intervalRef.current);
        return () => {
            clearInterval(intervalRef.current);
        };
    });
    return ( <></> )
}`}
                title='Difference between useState and useRef'
            />
            <Paragraph>
                The difference between those two cases are that <code>useState</code> causes re-render, while <code>useRef</code> does not.
                In the first case, when the component is rendered for the first time, <code>useEffect</code> is invoked
                thus <code>setIntervalId</code> is invoked too. However as <code>setIntervalId</code> causes
                re-render, <code>useEffect</code> is called for the second time and so on, thus an infinite loop
                happens. As there is no deps being passed to <code>useEffect</code>, it is okay to add a <code>[]</code> to eliminate
                the infinite loop and make the code work, otherwise this console error shows:
            </Paragraph>
            <div className='learning-content'>
                <pre children={`Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, 
but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.`} />
            </div>
            <Paragraph>
                The <code>useRef</code> Hook does not cause re-render, thus <code>[]</code> is not needed. Another difference is
                that <code>useState</code> is asynchronous and <code>useRef</code> is synchronous. This can be seen from the second console log
                of each case: the first case logs <code>undefined</code> and second case logs the actual value. In most cases when dealing
                with state, <code>useState</code> should be used as it is declarative.
            </Paragraph>
            <Paragraph>
                Another example which addresses the re-render difference is as follows:
            </Paragraph>
            <CodeBlock
                language='react'
                title='Difference between useState and useRef'
                code={`const UseRefVsUseState = () => {
    const countA = useRef(0);
    const handleClick = () => {
        countA.current += 1;
    }
    const [countB, setCountB] = useState(0);
    return (
        <>
            <div>{countA.current}</div>
            <button onClick={handleClick}>+1</button>
            <div>{countB}</div>
            <button onClick={() => {setCountB(countB + 1)}}>Update state and re-render</button>
        </>
    )
}`}>
            </CodeBlock>
            <CodeDemo demoComponent={<UseRefVsUseState1 />} />
            <Paragraph>
                Clicking the first button does not show any change on the page, clicking the second button updates the second
                counter and shows the first counter. This is because <code>useRef</code> updates the <code>.current</code> value
                but does not cause re-render, thus the updated value only shows after the component re-renders
                by running <code>setCountB</code>.
            </Paragraph>
            <SectionTitle type={'subtitle'}>
                Access DOM elements with useRef Hook
            </SectionTitle>
            <Paragraph>
                In plain JS we use <code>document.getElementById</code> or some other methods to access DOM elements. With React
                we use the <code>useRef</code> Hook to do so:
            </Paragraph>
            <CodeBlock
                language='react'
                title='Access DOM element with useRef Hook'
                code={`const UseRefAccessDOM = () => {
    const inputRef = useRef();
    console.log(inputRef.current);
    const handleClick = (e) => {
        e.preventDefault();
        console.log(inputRef.current);
        inputRef.current.placeholder = 'hello'
    }
    return (
        <form>
            <input type='text' placeholder='Enter name' name='name' ref={inputRef} />
            <button onClick={handleClick}>Click me</button>
        </form>
    )
}`}>
            </CodeBlock>
            <Paragraph>
                The first console logs <code>undefined</code> as nothing is passed into <code>useRef</code>. After
                clicking the button, <code>inputRef.current</code> becomes the input element. Properties of the input
                can then be modified.
            </Paragraph>

            {/* ============================================= */}
            <SectionTitle type={'title'}>
                useContext: the context Hook
            </SectionTitle>
            <Paragraph>
                Imagine there is a four-layer nested component <code>Note</code>, it renders <code>Section</code>, <code>Section</code> renders
                <code>Card</code>, <code>Card</code> renders <code>Title</code>. Some title data is stored in <code>Note</code> and passed
                to <code>Title</code>. What could be happening is <i>prop drilling</i>, i.e. props <code>title</code> drills from top parent
                level <code>Note</code> to bottom child level <code>Title</code> like the folloing example:
            </Paragraph>
            <CodeBlock
                language='react'
                title='Prop drilling'
                code={`const Note = () => {
    return (
        <Section title={'Nested component'} />
    )
}
const Section = ({ title }) => {
    return (
        <Card title={title} />
    )
}
const Card = ({ title }) => {
    return (
        <Title title={title} />
    )
}
const Title = ({ title }) => {
    return (
        <>
            <h2>{title}</h2>
        </>
    )
}`}>
            </CodeBlock>
            <Paragraph>
                This could lead to a few problems: <code>Section</code> and <code>Card</code> components do not use <code>title</code> prop
                at all but they still need to pass it; adding any middle layer becomes cumbersome as <code>title</code> is needed in the
                new layer too; modifying <code>title</code> requires change in all related components. To deal with this, we can
                use <code>useContext</code> Hook to provide a context to share some <b>global</b> data among components without
                prop drilling. These data could be a global theme, language, etc. With <code>useContext</code> Hook, the above
                example becomes:
            </Paragraph>
            <CodeBlock
                language='react'
                title='Share data among components to avoid prop drilling'
                code={`const AppContext = React.createContext({});
const Note = () => {
    return (
        <AppContext.Provider value={{ title: 'Nested component' }}>
            <Section />
        </AppContext.Provider>
    )
}
const Section = () => {
    return (
        <Card />
    )
}
const Card = () => {
    return (
        <Title />
    )
}
const Title = () => {
    const { title } = useContext(AppContext);
    return (
        <>
            <h2>{title}</h2>
        </>
    )
}`}>
            </CodeBlock>
            <Paragraph>
                The first step is using React context API to establish a Context outside of components. Inside the parent
                component <code>Note</code>, <code>AppContext.Provider</code> provides a Context object, which can be shared by
                the child components. In the bottom level component, we use <code>useContext</code> Hook to hook in
                the <code>Context</code> object and create the <code>title</code> property.
            </Paragraph>
            <Paragraph>
                The <code>title</code> property can be hooked into any child component with <code>useContext</code> Hook, take
                the <code>Card</code> component above as an example, let's pass <code>title</code> inside <code>Card</code>:
            </Paragraph>
            <CodeBlock
                language='react'
                title='Pass title into any child component'
                code={`const Card = () => {
    const { title } = useContext(AppContext);
    return (
        <>
            <div>{title}</div>
            <Title />
        </>
    )
}`}>
            </CodeBlock>
            <Paragraph>
                You can even pass multiple values to a child component with a Context:
            </Paragraph>
            <CodeBlock
                language='react'
                title='Pass two values to a child component'
                code={`const AppContext = React.createContext({});
const Note = () => {
    return (
        <AppContext.Provider value={{ title: 'Nested component', name: 'Tom' }}>
            <Section />
        </AppContext.Provider>
    )
}
const Title = () => {
    const { title } = useContext(AppContext);
    const { name } = useContext(AppContext);
    return (
        <>
            <h2>{title}</h2>
            <div>{name}</div>
        </>
    )
}`}>
            </CodeBlock>
            <Paragraph>
                React <code>Context</code> API and <code>useContext</code> Hook can also be used to set a theme, where the theme
                is global with no hierarchy presented. Say we have a <code>Panel</code> component, which renders a <code>GlassBox</code> component.
                The <code>GlassBox</code> component renders a <code>TextBox</code> component. A theme is applied globally to those components
                and a button is used to switch between the light and dark theme. Check the following example
                (left: <code>theme.js</code>, right: <code>Panel.js</code>):
            </Paragraph>
            <CodeBlockRow
                language1='react'
                code1={`import React from 'react';
export const themes = {
    light: {
        enable: 'dark',
        bgColor: '#ffffff',
        fontColor: '#000000',
        glassColor: 'rgba(0, 0, 0, 0.1)'
    },
    dark: {
        enable: 'light',
        bgColor: 'rgba(0, 0, 0, 0.1)',
        fontColor: '#ffffff',
        glassColor: 'rgba(0, 0, 0, 0.5)'
    }
}
export const ThemeContext = React.createContext (
    themes.light
)`}
                language2='react'
                code2={`import React, { useContext, useState } from 'react';
import { ThemeContext, themes } from './theme';
import './Panel.scss';
const Panel = () => {
    const [theme, setTheme] = useState(themes.light);
    const toggleTheme = () => {
        setTheme (theme === themes.light ? themes.dark : themes.light)
    };
    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ backgroundColor: theme.bgColor }} className='panel'>
                <GlassBox />
            </div>
            <button onClick={toggleTheme}>Enable {theme.enable} theme</button>
        </ThemeContext.Provider>
    )
}
const GlassBox = () => {
    const { glassColor } = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: glassColor }} className='glass-box'>
            <TextBox />
        </div>
    )
}
const TextBox = () => {
    const { fontColor } = useContext(ThemeContext);
    return (
        <div style={{ color: fontColor }} className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        </div>
    )
}
export default Panel;`}
                title='Set a global theme with React Context'
            />
            <CodeDemo demoComponent={<Panel />} />
            <Paragraph>
                With the above example we first initialise a Context with the light theme in <code>theme.js</code>.
                In <code>Panel.js</code> we import both <code>ThemeContext</code> and <code>themes</code>.
                In the top level <code>Panel</code> component, the Context's Provider component is inserted to provide the theme
                context to all the child components (<code>GlassBox</code> and <code>TextBox</code>). Notice that the Provider
                component does not render any real element in HTML structure, therefore do not treat it
                like <code>&lt;div&gt;</code> or apply <code>style</code> or <code>className</code> to
                it. Then we use the <code>useContext</code> Hook to pass properties to the child components. Lastly, we set theme
                with <code>useState</code> Hook and toggle themes on button click with the <code>toggleTheme</code> method.
            </Paragraph>
            <Paragraph>
                This is a typical example of using Context in React components. The theme is a global property, it does not
                follow the Panel =&gt; GlassBox =&gt; TextBox hierarchy, but applies horizontally to all child components. In this
                case Context is the best way to deal with it.
            </Paragraph>

            {/* ============================================= */}
            <SectionTitle type={'title'}>
                useMemo: the memorization Hook
            </SectionTitle>
            <Paragraph>
                The <code>useMemo</code> Hook accepts a deps array and memorizes the output <b>value</b> of a function.
                The memorized value will only be recomputed if one of the dependencies has changed. It is used to optimize
                performance by preventing unnecessary expensive computations. The syntax is:
            </Paragraph>
            <div className='learning-content'>
                <pre children={`const computeExpensiveValue = useMemo(() => {
    // do the expensive computation here
    return a + b
}, [a, b])`} />
            </div>
            <Paragraph>
                Check the following example, which has two variables: <code>count</code> and <code>val</code>.
                In the left code snippet, the <code>computeExpensiveValue</code> function is irrelevant to <code>val</code>, but
                is invoked everytime when there is input in the field. This is because the input <code>onChange</code> function
                sets the <code>val</code> state thus triggers a re-render. On the re-render <code>computeExpensiveValue</code> is
                executed again. This can be seen from the console log as well. If <code>computeExpensiveValue</code> is an
                expensive computation, the performance of the component would be dramatically affected. The solution is
                to use <code>useMemo</code> to make sure that the <code>computeExpensiveValue</code> only returns a cached value
                on the re-render, as demonstrated in the right code snippet. Notice that there is no bracket when
                invoking <code>computeExpensiveValue</code> in the JSX:
            </Paragraph>
            <CodeBlockRow
                language1='react'
                code1={`const UseMemoDemo = () => {
    const [count, setCount] = useState(0);
    const [val, setVal] = useState('');
    const computeExpensiveValue = () => {
        console.log('Inside the expensive computation');
        let sum = 0;
        for (let i = 0; i < count; i++) {
            sum += i;
        };
        return sum
    }
    return (
        <div>
            <div>
                Input value: {val}
                <input value={val} onChange={e => setVal(e.target.value)} />
            </div>
            <div>
                Count: {count}
                <button onClick={() => setCount(count + 1)}>+1</button>
            </div>
            <div>Function output: {computeExpensiveValue()}</div>
        </div>
    )
}`}
                language2='react'
                code2={`const UseMemoDemo = () => {
    const [count, setCount] = useState(0);
    const [val, setVal] = useState('');
    const computeExpensiveValue = useMemo(() => {
        console.log('Inside the expensive computation');
        let sum = 0;
        for (let i = 0; i < count; i++) {
            sum += i;
        };
        return sum
    }, [count])
    return (
        <div>
            <div>
                Input value: {val}
                <input value={val} onChange={e => setVal(e.target.value)} />
            </div>
            <div>
                Count: {count}
                <button onClick={() => setCount(count + 1)}>+1</button>
            </div>
            <div>Function output: {computeExpensiveValue}</div>
        </div>
    )
}`}
                title='Use useMemo Hook to do expensive computation only on deps change'
            />
            <CodeDemo demoComponent={<UseMemoDemo />} />
            <Paragraph>
                Although <code>useMemo</code> looks similar to <code>useEffect</code>, the side effects should not be placed
                in <code>useMemo</code>. The <code>useMemo</code> Hook should only be used as a performance optimization, not
                a semantic guarantee. You should write code which can be executed without <code>useMemo</code>, then
                consider <code>useMemo</code> to optimize performance. In other words, your code should be running well
                without <code>useMemo</code>.
            </Paragraph>

        </details>
    )
}

export default Hooks;