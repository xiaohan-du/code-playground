import React, { useEffect, useState } from 'react';
import './Learning.scss';
import { Helmet } from "react-helmet";
import { ScrollToTopOnMount } from '../../functions/ScrollToTopOnMount';
import { Paragraph } from '../../components/CMS/index.js';
import Compare from './Compare';
import Setup from './Setup';
import Rendering from './Rendering';
import FirstComponent from './FirstComponent';
import ClassLifecycle from './ClassLifecycle';
import StateVsProps from './StateVsProps';
import Hooks from './Hooks';
import LearningSidebar from '../../components/LearningSidebar';
import { detectScroll } from '../../functions/DetectScroll';

const Learning = () => {
    const [openDetails, setOpenDetails] = useState([]);

    const [fixClass, setFixClass] = useState('');

    const [booHighlighted, setBooHighlighted] = useState([]);

    const highlightedArray = ['compare', 'setup', 'rendering', 'firstComponent',
        'componentLifecycle', 'stateVsProps', 'hooks', 'pureComponent', 'unidirectional', 'hoc'];

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
                <title>Learn React - Xiaohan Du</title>
            </Helmet>
            <div className='learning'>
                <div className='center-content'>
                    <h1 className='learning-title'>
                        I learnt React through the following path, you may want to try it too
                    </h1>
                    <Paragraph>
                        Code can be found in <a href="https://github.com/xiaohan-du/code-playground/tree/master/learning-path/my-app">my Github page</a>
                    </Paragraph>
                    <div className='learning-main'>
                        <LearningSidebar
                            toggleDetails={toggleDetails}
                            detectScroll={() => detectScroll(200, setFixClass, 'learning-sidebar-fix-vertical')}
                            fixClass={fixClass}
                            booHighlighted={booHighlighted} />

                        <div className='learning-content'>
                            <h3 className='learning-section-title'>
                                React Basics
                            </h3>

                            <Compare isOpen={openDetails.includes('compare')} />

                            <Setup isOpen={openDetails.includes('setup')} />

                            <Rendering isOpen={openDetails.includes('rendering')} />

                            <FirstComponent isOpen={openDetails.includes('firstComponent')} />

                            <ClassLifecycle isOpen={openDetails.includes('componentLifecycle')} />

                            <StateVsProps isOpen={openDetails.includes('stateVsProps')} />

                            <Hooks isOpen={openDetails.includes('hooks')} />

                            <h3 className='learning-section-title'>
                                Advanced
                            </h3>
                            <details open={openDetails.includes('pureComponent')}>
                                <summary className='learning-subtitle'>
                                    React PureComponent
                                </summary>
                                <Paragraph>
                                    TBC
                                </Paragraph>
                            </details>
                            <details open={openDetails.includes('unidirectional')}>
                                <summary className='learning-subtitle'>
                                    Unidirectional Data flow
                            </summary>
                                <Paragraph>
                                    TBC
                                </Paragraph>
                            </details>
                            <details open={openDetails.includes('hoc')}>
                                <summary className='learning-subtitle'>
                                    Higher Order Component (HOC)
                                </summary>
                                <Paragraph>
                                    TBC
                                </Paragraph>
                            </details>
                            <h3 className='learning-section-title'>
                                References
                            </h3>
                            <div className='learning-references'>
                                The <a href='https://reactjs.org/docs/getting-started.html'>Official React Docs</a>
                            </div>
                            <div className='learning-references'>
                                <a href='https://overreacted.io/a-complete-guide-to-useeffect/'>A Complete Guide to useEffect</a> -- Dan Abramov
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Learning;

