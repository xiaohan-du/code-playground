import React, { useState } from 'react';
import './Learning.scss';
import { Helmet } from "react-helmet";
import { ScrollToTopOnMount } from '../../functions/ScrollToTopOnMount';
import { Paragraph, SectionTitle, CodeBlock, CodeBlockRow, CodeDemo } from '../../components/CMS/index.js';
import UseReducerCounter from '../../components/tutorial/UseReducerCounter';
import UseStateManageMultiState from '../../components/tutorial/UseStateManageMultiState';
import Compare from './Compare';
import Setup from './Setup';
import Rendering from './Rendering';
import FirstComponent from './FirstComponent';
import ClassLifecycle from './ClassLifecycle';
import StateVsProps from './StateVsProps';
import Hooks from './Hooks';

const Learning = () => {
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
                    <h3 className='learning-section-title'>
                        React Basics
                    </h3>

                    <Compare />

                    <Setup />

                    <Rendering />

                    <FirstComponent />

                    <ClassLifecycle />

                    <StateVsProps />

                    <Hooks />

                    <h3 className='learning-section-title'>
                        Advanced
                    </h3>
                    <details>
                        <summary className='learning-subtitle'>
                            React PureComponent
                        </summary>
                        <Paragraph>
                            TBC
                        </Paragraph>
                    </details>
                    <details>
                        <summary className='learning-subtitle'>
                            Unidirectional Data flow
                        </summary>
                        <Paragraph>
                            TBC
                        </Paragraph>
                    </details>
                    <details>
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
        </>
    )
}

export default Learning;

