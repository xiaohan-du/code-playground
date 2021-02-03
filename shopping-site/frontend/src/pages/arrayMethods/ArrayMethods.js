import React, { useEffect, useState } from 'react';
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
import { toggleDetails } from '../../functions/Projects/toggleDetails';
import { findHighlights } from '../../functions/Projects/findHighlights';

const ArrayMethods = () => {

    const components = [ForEachMethod, MapMethod, FilterMethod, EveryMethod];

    const [fixClass, setFixClass] = useState('');

    const idArray = ['forEach', 'map', 'filter', 'every'];

    const titleArray = idArray;

    const booHighlight = Array(idArray.length).fill(false);

    const [hlArray, setHlArray] = useState([booHighlight, idArray, titleArray]);

    const [openDetails, setOpenDetails] = useState([]);

    useEffect(() => {
        findHighlights(openDetails, idArray, titleArray, setHlArray);
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
                            hlArray={hlArray}
                            openDetails={openDetails}
                            setOpenDetails={setOpenDetails}
                        />

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
                                        setOpenDetails={setOpenDetails}
                                    />
                                )
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