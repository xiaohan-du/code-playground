import React, { useState, useEffect } from 'react';
import { Paragraph, SectionTitle, CodeBlock } from '../../components/CMS';

const SomeMethod = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                some()
            </summary>
            <Paragraph>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some'>Array.some()</a> tests 
                whether at least one element passes the provided function and returns true or false.
            </Paragraph>
            <SectionTitle type={'title'}>
                Example 1
            </SectionTitle>
            <Paragraph>
                Test if at least one array elements is larger than 1.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [1, 2, 3];
const B = A.some(item => item > 1);
console.log(B);
// true
`}
            />
            <SectionTitle type={'title'}>
                Example 2
            </SectionTitle>
            <Paragraph>
                Test if at least one array elements is a string.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = ['apple', 'orange', 'pear'];
const B = A.some(item => typeof(item) === 'string');
console.log(B);
// true
`}
            />
            <SectionTitle type={'title'}>
                Example 3
            </SectionTitle>
            <Paragraph>
                Test if an element exists in the array
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = ['apple', 'orange', 'pear'];
const B = A.some(item => item === 'pear');
console.log(B);
// true
`}
            />
        </details>
    )
}

export default SomeMethod;