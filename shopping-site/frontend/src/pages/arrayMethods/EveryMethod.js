import React, { useState, useEffect } from 'react';
import { Paragraph, SectionTitle, CodeBlock } from '../../components/CMS';

const EveryMethod = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                every()
            </summary>
            <Paragraph>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every'>Array.every()</a> tests 
                whether all elements pass the provided function and returns true or false.
            </Paragraph>
            <SectionTitle type={'title'}>
                Example 1
            </SectionTitle>
            <Paragraph>
                Test if all array elements are larger than 1.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [1, 2, 3];
const B = A.every(item => item > 1);
console.log(B);
// false
`}
            />
            <SectionTitle type={'title'}>
                Example 2
            </SectionTitle>
            <Paragraph>
                Test if all array elements are strings.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = ['apple', 'orange', 'pear'];
const B = A.every(item => typeof(item) === 'string');
console.log(B);
// true
`}
            />
        </details>
    )
}

export default EveryMethod;