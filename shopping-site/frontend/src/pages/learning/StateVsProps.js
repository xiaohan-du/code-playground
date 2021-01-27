import React, { useState, useEffect } from 'react';
import { Paragraph, SectionTitle, CodeBlock, CodeBlockRow, CodeDemo } from '../../components/CMS/index.js';
import UseStateCounter from '../../components/Learning/UseStateCounter';

const StateVsProps = ({ toggleDetails, openDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes('stateVsProps'));
    })
    return (
        <details open={isOpen} onClick={() => toggleDetails('stateVsProps')}>
            <summary className='learning-subtitle'>
                State VS Props
            </summary>
            <Paragraph>
                State and props are probably the most commonly used concepts in React. Props is short for properties.
                In short, props are used to pass data between React components unidirectionally, i.e. parent to child only;
                state is the local state of the component which is only accesible within the component.
            </Paragraph>
            <SectionTitle type={'title'}>State</SectionTitle>
            <Paragraph>
                Let's look at an example of a component state
                from <a href='https://reactjs.org/docs/hooks-state.html'>React Hooks docs</a>:
                create <code>UseStateCounter.js</code> in <code>./src/components</code>:
            </Paragraph>
            <CodeBlock
                language='react'
                title='Counter with useState Hook'
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
            <SectionTitle type={'title'}>Props</SectionTitle>
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
                title='Pass props from parent to child component'
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
            <SectionTitle type={'subtitle'}>Destructuring Props is your friend</SectionTitle>
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
            <SectionTitle type={'subtitle'}>Nested destructuring</SectionTitle>
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
    )
}

export default StateVsProps;