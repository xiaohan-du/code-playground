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
import PureComponent from './PureComponent';
import UniDirectional from './UniDirectional';
import Hoc from './Hoc';
import { detectScroll } from '../../functions/DetectScroll';
import '../../components/LearningSidebar.scss';

const Learning = () => {
    const [openDetails, setOpenDetails] = useState([]);

    const [fixClass, setFixClass] = useState('');

    const basicComponents = [Compare, Setup, Rendering, FirstComponent, ClassLifecycle, StateVsProps, Hooks];

    const advancedComponents = [PureComponent, UniDirectional, Hoc];

    const idArray = ['compare', 'setup', 'rendering', 'firstComponent',
        'classLifecycle', 'stateVsProps', 'hooks', 'pureComponent', 'unidirectional', 'hoc'];

    const titleArray = ['Compare', 'Basic Set Up', 'Rendering Elements', 'First Component', 'Component Lifecycle Methods',
        'State VS Props', 'Hooks', 'React PureComponent', 'Unidirectional Data Flow', 'Higher Order Component'];

    const booHighlight = Array(idArray.length).fill(false);

    const [hlArray, setHlArray] = useState([booHighlight, idArray, titleArray]);

    const toggleDetails = (name) => {
        if (openDetails.includes(name)) {
            setOpenDetails(openDetails.filter((o) => o !== name));
        } else {
            setOpenDetails((pages) => { return [...pages, name] });
        };
    };

    const findHighlight = (openDetails) => {
        let _index = [];
        for (let i = 0; i < openDetails.length; i++) {
            _index.push(idArray.indexOf(openDetails[i]));
        };
        _index.sort();
        let _booHighlight = Array(idArray.length).fill(false);
        _index.forEach(item => _booHighlight[item] = true);
        setHlArray([_booHighlight, idArray, titleArray]);
    };

    useEffect(() => {
        findHighlight(openDetails);
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
                            highlightClass={'learning-sidebar-highlight'}
                            hlArray={hlArray} />

                        <div className='learning-content'>
                            <h3 className='learning-section-title'>
                                React Basics
                            </h3>

                            {basicComponents.map((Component, index) =>
                                <Component
                                    key={index}
                                    toggleDetails={toggleDetails}
                                    openDetails={openDetails}
                                    id={idArray[index]}
                                />)
                            }

                            <h3 className='learning-section-title'>
                                Advanced
                            </h3>

                            {
                                advancedComponents.map((Component, index) =>
                                    <Component
                                        key={index + basicComponents.length}
                                        toggleDetails={toggleDetails}
                                        openDetails={openDetails}
                                        id={idArray[index + basicComponents.length]}
                                    />)
                            }

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

