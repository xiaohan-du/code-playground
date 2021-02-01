import React, { useState, useEffect } from 'react';
import { Paragraph, CodeBlock } from '../../components/CMS';

const ForEachMethod = ({ toggleDetails, openDetails, id }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id)}>
                forEach()
            </summary>
            <Paragraph>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach'>Array.forEach()</a> applies
                a function to all elements of A and push to B, A is not modified.
            </Paragraph>
            <CodeBlock language='javascript'
                title='Array.forEach()'
                code={`const A = [1, 2, 3];
let func = (e) => {
    return e -= 1;
};
let B = [];
A.forEach((item) => {B.push(func(item))});
console.log(B);
// [0, 1, 2]
`}
            />
            <Paragraph>
                Apply a function to all elements of A and modify A
            </Paragraph>
        </details>
    )
}

export default ForEachMethod;