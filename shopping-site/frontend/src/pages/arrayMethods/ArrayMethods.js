import React, { useState, useEffect } from 'react';
import './ArrayMethods.scss';
import { Helmet } from "react-helmet";
import { ScrollToTopOnMount } from '../../functions/ScrollToTopOnMount';
import { CodeBlock, CodeDemo, Paragraph } from '../../components/CMS';
import LearningSidebar from '../../components/LearningSidebar';
import { detectScroll } from '../../functions/DetectScroll';

const ArrayMethods = () => {

    const [openDetails, setOpenDetails] = useState([]);

    const [fixClass, setFixClass] = useState('');

    const [booHighlighted, setBooHighlighted] = useState([]);

    const highlightedArray = ['forEach', 'filter', 'map'];

    const toggleDetails = (name) => {
        if (openDetails.includes(name)) {
            setOpenDetails(openDetails.filter((o) => o !== name));
        } else {
            setOpenDetails((pages) => {
                return [...pages, name];
            });
        };
    };

    const findHighlighted = (openDetails) => {
        let _index = [];
        for (let i = 0; i < openDetails.length; i++) {
            _index.push(highlightedArray.indexOf(openDetails[i]));
        };
        _index.sort();
        let _booHighlighted = Array(highlightedArray.length).fill(false);
        _index.forEach(i => _booHighlighted[i] = true);
        setBooHighlighted(_booHighlighted);
    }

    useEffect(() => {
        findHighlighted(openDetails);
    }, [openDetails]);

    return (
        <>
            <ScrollToTopOnMount />
            <Helmet>
                <meta charSet="utf-8" />
                <title>Learn JS Array Methods - Xiaohan Du</title>
            </Helmet>
            <div className='array-methods'>
                <div className='center-content'>
                    <h1 className='learning-title'>
                        I use a lot of JS arrays, but I found it difficult to be proficient with JS array methods.
                    </h1>
                    <Paragraph>
                        Code can be found in my Github page.
                    </Paragraph>
                    <div className='learning-main'>
                        <LearningSidebar
                            toggleDetails={toggleDetails}
                            detectScroll={() => detectScroll(200, setFixClass, 'learning-sidebar-fix-vertical')}
                            fixClass={fixClass}
                            booHighlighted={booHighlighted} />

                        <div className='learning-content'>
                            <h3 className='learning-section-title'>
                                Array Methods
                            </h3>
                            <details>
                                <summary className='learning-subtitle'>
                                    Array.forEach()
                                </summary>
                                <Paragraph>
                                    Apply a function to all elements of A and push to B
                                </Paragraph>
                                <CodeBlock language='javascript'
                                    title='A.forEach'
                                    code={`let A = [1, 2, 3]
let func = (e) => {
    return e -= 1;
}
let B = [];
A.forEach((item) => {B.push(func(item))});
`}
                                />
                                <Paragraph>
                                    Apply a function to all elements of A and modify A
                                </Paragraph>
                            </details>
                            <h3 className='learning-section-title'>
                                Coding example
                            </h3>
                            <details>
                                <summary className='learning-subtitle'>
                                    Plot a response surface
                                </summary>
                                <Paragraph>
                                    Solve a mathematical problem 
                                </Paragraph>
                            </details>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArrayMethods;