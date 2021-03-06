import React, { useState, useEffect } from 'react';
import { Paragraph, CodeBlock, SectionTitle } from '../../components/CMS';

const ForEachMethod = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                forEach()
            </summary>
            <Paragraph>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach'>Array.forEach()</a> applies
                a function for each element of an array.
            </Paragraph>
            <SectionTitle type={'title'}>
                Example 1
            </SectionTitle>
            <Paragraph>
                Apply a function <code>demoFunc</code> to each element of array A, the output is pushed to array B.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [1, 2, 3];
let demoFunc = (e) => {
    return e -= 1;
};
let B = [];
A.forEach((item) => {B.push(demoFunc(item))});
console.log(B);
// [0, 1, 2]
`}
            />
            <SectionTitle type={'title'}>
                Example 2
            </SectionTitle>
            <Paragraph>
                Extract first letter of each element of array A and form a new array B.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = ['apple', 'orange', 'pear'];
let B = [];
A.forEach(item => B.push(item.split('')[0])); // split each array item to characters, then take the 0th character
console.log(B);
// ['a', 'o', 'p']
`}
            />
            <SectionTitle type={'title'}>
                Example 3
            </SectionTitle>
            <Paragraph>
                Use the second parameter <code>index</code>.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [1, 2, 3];
let B = [];
A.forEach((_, index) => {B.push(A[index] + 1)});
console.log(B);
// [2, 3, 4]
`}
            />
        </details>
    )
}

export default ForEachMethod;