import React, { useState, useEffect } from 'react';
import { Paragraph, SectionTitle, CodeBlock } from '../../components/CMS';

const FindIndexMethod = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                findIndex()
            </summary>
            <Paragraph>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex'>Array.findIndex()</a> returns 
                the index of the first array element which satisfies the provided function. If not found, return -1.
            </Paragraph>
            <SectionTitle type={'title'}>
                Example 1
            </SectionTitle>
            <Paragraph>
                Find the index of a specific element.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [1, 'apple', true, 'orange', 2];
const B = A.findIndex(item => item === 'orange');
console.log(B);
// 3
`}
            />
            <SectionTitle type={'title'}>
                Example 2
            </SectionTitle>
            <Paragraph>
                Find the index of the first element which is larger than 3.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [1, 2, 3, 'apple', 6, false];
const B = A.findIndex(item => item > 3);
console.log(B);
// 4
`}
            />
        </details>
    )
}

export default FindIndexMethod;