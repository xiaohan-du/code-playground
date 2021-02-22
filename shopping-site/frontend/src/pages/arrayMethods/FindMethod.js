import React, { useState, useEffect } from 'react';
import { Paragraph, SectionTitle, CodeBlock } from '../../components/CMS';

const FindMethod = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                find()
            </summary>
            <Paragraph>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find'>Array.find()</a> returns 
                the first element in the array which satisfies the provided function. If not found, return <code>undefined</code>.
            </Paragraph>
            <SectionTitle type={'title'}>
                Example 1
            </SectionTitle>
            <Paragraph>
                Find the first element which contains character 'e'.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [2, true, 'banana', 'orange', false];
const B = A.filter(item => typeof(item) === 'string').find(item => item.split('').includes('e')); // first find out all string items, then find the item which contains 'e'
console.log(B);
// 'orange'
`}
            />
            <SectionTitle type={'title'}>
                Example 2
            </SectionTitle>
            <Paragraph>
                Find the first number which is larger than 3
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [1, 2, 3, 4, 5];
const B = A.find(item => item > 3);
console.log(B);
// 4
`}
            />
            <SectionTitle type={'title'}>
                Example 3
            </SectionTitle>
            <Paragraph>
                Find the first prime number in an array
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [-3, -2, -1, 0, 1, 2, 3, 4, 5];
const isPrime = (e) => {
    for (let i = 2; i < e; ++i) { // prime numbers are greater than 1
        if (e % i === 0) { // if the remainder is 0, then e is the product of 2 numbers thus is not a prime number
            return false;
        }
    }
    return e > 1;
};
const B = A.find(item => isPrime(item)); // only find the first prime number
console.log(B);
// 2
`}
            />
        </details>
    )
}

export default FindMethod;