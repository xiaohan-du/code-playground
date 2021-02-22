import React, { useState, useEffect } from 'react';
import { Paragraph, SectionTitle, CodeBlock } from '../../components/CMS';

const FilterMethod = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                filter()
            </summary>
            <Paragraph>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter'>Array.filter()</a> tests 
                each array element with a provided function, then populates the passed elements to a new array. If none passed, returns an empty array.
            </Paragraph>
            <SectionTitle type={'title'}>
                Example 1
            </SectionTitle>
            <Paragraph>
                Apply a function <code>findPrime</code> to each element of array A, the passed elements are populated to array B.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const isPrime = (e) => {
    for (let i = 2; i < e; ++i) { // prime numbers are greater than 1
        if (e % i === 0) { // if the remainder is 0, then e is the product of 2 numbers thus is not a prime number
            return false;
        }
    }
    return e > 1;
};
const B = A.filter(item => isPrime(item)); // find all prime numbers
console.log(B);
// [2, 3, 5, 7, 11, 13]
`}
            />
            <SectionTitle type={'title'}>
                Example 2
            </SectionTitle>
            <Paragraph>
                Find all array elements which are larger than 2.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [1, 2, 3, 4];
const B = A.filter(item => item > 2);
console.log(B);
// [3, 4]
`}
            />
            <SectionTitle type={'title'}>
                Example 3
            </SectionTitle>
            <Paragraph>
                Find all array elements which have more than 5 characters.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = ['apple', 'orange', 'pear', 'banana'];
const B = A.filter(item => item.split('').length > 5);
console.log(B);
// ['orange', 'banana']
`}
            />
            <SectionTitle type={'title'}>
                Example 4
            </SectionTitle>
            <Paragraph>
                Find all array elements match a provided criteria.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = ['apple', 'orange', 'pear', 'banana'];
const B = A.filter(item => item.split('').includes('e')); // find all array elements which contains letter 'e'
console.log(B);
// ['apple', 'orange', 'pear']
`}
            />
        </details>
    )
}

export default FilterMethod;