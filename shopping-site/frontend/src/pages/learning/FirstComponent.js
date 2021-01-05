import React from 'react';
import { Paragraph, SectionTitle, CodeBlock, CodeBlockRow } from '../../components/CMS/index.js';

const FirstComponent = ({ isOpen }) => {
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle'>
                First Component
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
            <SectionTitle type={'title'}>Two types of components</SectionTitle>
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
            <SectionTitle type={'title'}>Basic styling</SectionTitle>
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
            <SectionTitle type={'title'}>JSX</SectionTitle>
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
    )
}

export default FirstComponent;