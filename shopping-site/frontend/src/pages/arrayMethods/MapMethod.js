import React, { useState, useEffect } from 'react';
import { Paragraph, CodeBlock, SectionTitle } from '../../components/CMS';

const MapMethod = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                map()
            </summary>
            <Paragraph>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'>Array.map()</a> applies
                a function for each element of an array, then populates the generated elements to a new array.
            </Paragraph>
            <SectionTitle type={'title'}>
                Example 1
            </SectionTitle>
            <Paragraph>
                Apply a function <code>demoFunc</code> to each element of array A, the output elements are populated to array B.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [1, 2, 3];
const demoFunc = (e) => {
    return e -= 1;
};
const B = A.map(item => demoFunc(item)); // notice that unlike forEach, there is no need to push elements to B
console.log(B);
// [0, 1, 2]
`}
            />
            <SectionTitle type={'title'}>
                Example 2
            </SectionTitle>
            <Paragraph>
                Extract first letter of each element of array A and populate a new array B. 
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = ['apple', 'orange', 'pear'];
const B = A.map(item => item.split('')[0]);
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
const B = A.map((_, index) => A[index] + 1);
console.log(B);
// [2, 3, 4]
`}
            />
        </details>
    )
}

export default MapMethod;