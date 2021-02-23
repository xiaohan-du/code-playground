import React, { useState, useEffect } from 'react';
import { Paragraph, CodeDemo, CodeBlock, SectionTitle } from '../../components/CMS/index.js';
import BasicDemo from '../../components/Concepts/BasicDemo';

const JsCallback = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                Callback
            </summary>
            <Paragraph>
                A callback is a function that is passed as an argument to another function and is executed after its parent function has completed.
            </Paragraph>
            <Paragraph>
                Pass a function to another function as an argument.
            </Paragraph>
            <SectionTitle type={'title'}>
                A very basic code demo to understand the syntax
            </SectionTitle>
            <CodeBlock language='javascript'
                title=''
                code={`// the callback function
const testFunc = (m, n) => {
    return m += n;
};
// the function which calls the callback function
const callTestFunc = (m, n, o) => {
    // do something before calling the callback function
    const p = m * n;
    // call the callback function 
    const q = p * o(m, n)
    return q;
};
// calculate result
const output = callTestFunc(2, 3, testFunc);
console.log(output);
// 30
`}>
            </CodeBlock>
            <CodeDemo demoComponent={<BasicDemo />} />
            <SectionTitle type={'title'}>
                Why do we need the callback?
            </SectionTitle>
            <Paragraph>
                JS runs in a sequential order, top to bottom. However, sometimes the function takes time to run, such as an expensive computation. 
                It is not ideal to wait for the function to finish running and display results. In this case, callback breaks the sequential order and 
                allows the expensive function to run later. 
            </Paragraph>
            <Paragraph>
                Take the above code snippet as an example: assume <code>testFunc</code> is an expensive function. By using the callback, we execute what's in 
                <code>callTestFunc</code> first, then run <code>testFunc</code>. Therefore we don't need to wait for the expensive computation 
                in <code>testFunc</code> to finish. 
            </Paragraph>
            
            <Paragraph>

            </Paragraph>
        </details>
    )
}

export default JsCallback;