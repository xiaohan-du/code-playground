import React, { useState, useEffect } from 'react';
import { Paragraph, SectionTitle, CodeBlock } from '../../components/CMS';

const FillMethod = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                fill()
            </summary>
            <Paragraph>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill'>Array.fill()</a> modifies 
                array elements with a given value, from a start index to an end index. The original array is modified and returned. It takes 
                optional start and end index values.
            </Paragraph>
            <SectionTitle type={'title'}>
                Example 1
            </SectionTitle>
            <Paragraph>
                Array.fill() does not modify array length.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [];
A.fill(0);
console.log(A);
// []
const C = [0];
C.fill(0, 0, 3); // try to fill C from index 0 to 3 with value 0
console.log(C);
// [0], original array length does not change
`}
            />
            <SectionTitle type={'title'}>
                Example 2
            </SectionTitle>
            <Paragraph>
                Basic fill cases.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [1, 2, 3, 4, 5];
A.fill(0); // fill A with 0 without indices
console.log(A);
// [0, 0, 0, 0, 0]
const B = [1, 2, 3, 4, 5]; 
B.fill(0, 2); // fill B with 0 from index 2 to the end
console.log(B);
// [1, 2, 0, 0, 0];
const C = [1, 2, 3, 4, 5]; 
C.fill(0, 1, 3); // fill C with 0 from index 1 to 3
console.log(C);
// [1, 0, 0, 4, 5];
const D = new Array(5).fill(0); // generate an array with 4 zero
console.log(D);
// [0, 0, 0, 0, 0];
const E = Array(5).fill(0, 1, 3); // generate array with indices
console.log(E);
// [undefined, 0, 0, undefined, undefined]
`}
            />
            <SectionTitle type={'title'}>
                Example 3
            </SectionTitle>
            <Paragraph>
                Create a 3-by-4 matrix with element 1
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`let A = Array(3).fill(0); // create array A with 3 elements
A.forEach((_, index) => {A[index] = Array(4).fill(1)}); // replace each element of A with a 1-by-4 array
console.log(A);
// [[1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1]]
`}
            />
        </details>
    )
}

export default FillMethod;