import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import { ScrollToTopOnMount } from '../../functions/ScrollToTopOnMount';
import { Paragraph } from '../../components/CMS';
import { detectScroll } from '../../functions/DetectScroll';
import { toggleDetails } from '../../functions/Projects/toggleDetails';
import { findHighlights } from '../../functions/Projects/findHighlights';
import LearningSidebar from '../../components/LearningSidebar';
import JsCallback from './JsCallback';

const Concepts = () => {

    const components = [JsCallback];

    const [fixClass, setFixClass] = useState('');

    const idArray = ['callback'];

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
                <title>JS Concepts - Xiaohan Du</title>
            </Helmet>
            <div className='array-methods'>
                <div className='center-content'>
                    <h1 className='learning-title'>
                        Some popular JS concepts
                    </h1>
                    <Paragraph>
                        Code can be found in <a href="https://github.com/xiaohan-du/code-playground/tree/feature/portfolio-callback/shopping-site">my Github page</a>
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
                                Concepts
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Concepts;