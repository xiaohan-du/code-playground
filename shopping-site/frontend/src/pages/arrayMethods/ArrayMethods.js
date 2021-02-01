import React, { useState } from 'react';
import './ArrayMethods.scss';
import { Helmet } from "react-helmet";
import { ScrollToTopOnMount } from '../../functions/ScrollToTopOnMount';
import { Paragraph } from '../../components/CMS';
import LearningSidebar from '../../components/LearningSidebar';
import { detectScroll } from '../../functions/DetectScroll';
import ForEachMethod from './ForEachMethod';
import MapMethod from './MapMethod';
import FilterMethod from './FilterMethod';
import EveryMethod from './EveryMethod';

let openDetails = [];

const ArrayMethods = () => {

    const components = [ForEachMethod, MapMethod, FilterMethod, EveryMethod];


    const [fixClass, setFixClass] = useState('');

    const idArray = ['forEach', 'map', 'filter', 'every'];

    const titleArray = idArray;

    const booHighlight = Array(idArray.length).fill(false);

    const [hlArray, setHlArray] = useState([booHighlight, idArray, titleArray]);

    const toggleDetails = (name) => {
        if (openDetails.includes(name)) {
            openDetails = openDetails.filter((item) => item !== name)
        } else {
            openDetails = [...openDetails, name];
        };
        findHighlight();
    };

    const findHighlight = () => {
        let _index = [];
        for (let i = 0; i < openDetails.length; i++) {
            _index.push(idArray.indexOf(openDetails[i]));
        };
        _index.sort();
        let _booHighlight = Array(idArray.length).fill(false);
        _index.forEach(item => _booHighlight[item] = true);
        setHlArray([_booHighlight, idArray, titleArray]);
    };

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
                        Refresh JS array methods
                    </h1>
                    <Paragraph>
                        Code can be found in my Github page.
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
                                Array Methods
                            </h3>

                            {
                                components.map((Component, index) =>
                                    <Component
                                        key={index}
                                        toggleDetails={toggleDetails}
                                        openDetails={openDetails}
                                        id={idArray[index]}
                                    />)
                            }

                            <h3 className='learning-section-title'>
                                Coding example
                            </h3>
                            <details>
                                <summary className='learning-subtitle'>
                                    Plot a surface
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