import React, { useState, useEffect } from 'react';
import { Paragraph, SectionTitle, CodeBlock, CodeBlockRow } from '../../components/CMS';

const ReduceMethod = ({ toggleDetails, openDetails, id, setOpenDetails }) => {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setIsOpen(openDetails.includes(id));
    })
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle' onClick={() => toggleDetails(id, openDetails, setOpenDetails)}>
                reduce()
            </summary>
            <Paragraph>
                <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every'>Array.reduce()</a> takes 
                a provided reducer function and executes it on each array element. The output is a single value.
            </Paragraph>
            <Paragraph>
                The reducer function takes 4 arguments: 
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const reducer = (accumulator, currentValue, currentIndex, sourceArray) => {
    return accumulator + currentValue;
}`}
            />
            <Paragraph>
                The Array.reduce() function may take a second argument: initial value, e.g. <code>array.reduce(reducer, initialValue)</code>
            </Paragraph>

            <SectionTitle type={'title'}>
                Example 1
            </SectionTitle>
            <Paragraph>
                Understand each argument and how they work.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [1, 2, 3, 4];
const reducer = (acc, curV, curI) => {
    console.log(acc, curV, curI, acc + curV + curI)
    return acc + curV + curI;
};
const B = A.reduce(reducer);
console.log('B is ', B);
// 1, 2, 1, 4 
// no initial value, start from index 1, accumulator = 1, current value = 2, current index = 1, output = 1 + 2 + 1 = 4
// 4, 3, 2, 9
// accumulator = 4, current value = 3, current index = 2, output = 4 + 3 + 2 = 9
// 9, 4, 3, 16
// accumulator = 9, current value = 4, current index = 3, output = 9 + 4 + 3 = 16
// "B is ", 16
const C = A.reduce(reducer, 5); // provide an initial value
console.log('C is', C);
// 5, 1, 0, 6
// initial value = accumulator = 5, start from index 0, current value = 1, current index = 0, output = 5 + 1 + 0 = 6
// 6, 2, 1, 9
// accumulator = 6, current value = 2, current index = 1, output = 6 + 2 + 1 = 9
// 9, 3, 2, 14
// accumulator = 9, current value = 3, current index = 2, output = 9 + 3 + 2 = 14
// 14, 4, 3, 21
// accumulator = 14, current value = 4, current index = 3, output = 14 + 4 + 3 = 21
// "C is", 21
`}
            />
            <Paragraph></Paragraph>
            <SectionTitle type={'title'}>
                Example 2
            </SectionTitle>
            <Paragraph>
                Sum all values of an array.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [1, 2, 3, 4];
const reducer = (acc, cur) => {
    return acc + cur;
};
const B = A.reduce(reducer);
console.log(B);
// 10
`}
            />
            <SectionTitle type={'title'}>
                Example 3
            </SectionTitle>
            <Paragraph>
                Flatten a 2d array.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [[1, 2], [3, 4], [5, 6]];
const reducer = (acc, cur) => {
    return acc.concat(cur); // merge current value with accumulator
};
const B = A.reduce(reducer);
console.log(B);
// [1, 2, 3, 4, 5, 6]
`}
            />
            <SectionTitle type={'title'}>
                Example 4
            </SectionTitle>
            <Paragraph>
                An object as the initial value.
            </Paragraph>
            <CodeBlock language='javascript'
                title=''
                code={`const A = [1, 2, 3, 4];
const reducer = (acc, cur) => {
    acc.sum += cur; // extract the value and add current value to it
    return acc; // return the object
};
const B = A.reduce(reducer, {sum: 5});
console.log(B);
// {sum: 15}
`}
            />
        </details>
    )
}

export default ReduceMethod;