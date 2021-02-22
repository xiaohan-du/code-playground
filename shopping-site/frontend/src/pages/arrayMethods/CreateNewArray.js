import React, { useState, useEffect } from 'react';
import { Paragraph, SectionTitle, CodeBlock } from '../../components/CMS';

const CreateNewArray = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                Create a new array
            </summary>
            <Paragraph>
                Creating a new array with <code>Array()</code> constructor can lead to confusing results. Check the following example:
            </Paragraph>
            <SectionTitle type={'title'}>
                &#x274E; Create a new array with <code>Array()</code> constructor.
            </SectionTitle>
            <CodeBlock language='javascript'
                title=''
                code={`let A = new Array(3);
A.forEach((_, index) => {
    A[index] = 1;
});
console.log(A);
// [undefined, undefined, undefined]
`}
            />
            <Paragraph>
                While we expect to see output [1, 1, 1], the <code>forEach</code> method didn't output A with updated results. This is because
                when <code>Array(arrayLength)</code> is used to create a new array, what it creates is a new
                JS array with its length property set to <code>arrayLength</code>. It does not contain any values, not
                even <code>undefined</code>.
            </Paragraph>
            <Paragraph>
                The solution is to use <code>Array.fill()</code> to fill the empty array immediately, or to 
                use <code>Array.from()</code> to create a new array.
            </Paragraph>
            <SectionTitle type={'title'}>
                &#9989; Create a new array with <code>Array()</code> constructor and fill immediately.
            </SectionTitle>
            <CodeBlock language='javascript'
                title=''
                code={`let A = new Array(3).fill(0);
A.forEach((_, index) => {
    A[index] = 1;
});
console.log(A);
// [1, 1, 1]
`}
            />
            <SectionTitle type={'title'}>
                &#9989; Create a new array with <code>Array.from()</code>.
            </SectionTitle>
            <CodeBlock language='javascript'
                title=''
                code={`let A = Array.from(
    {length: 3},
    () => 0
);
A.forEach((_, index) => {
    A[index] = 1;
});
console.log(A);
// [1, 1, 1]
`}
            />
        </details>
    )
}

export default CreateNewArray;