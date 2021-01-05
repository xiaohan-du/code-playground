import React from 'react';
import { Paragraph } from '../../components/CMS/index.js';

const Compare = ({ isOpen }) => {
    return (
        <details open={isOpen}>
            <summary className='learning-subtitle'>
                Compare React (a JS library) with Angular, Vue, Ember (JS frameworks)
            </summary>
            <Paragraph>
                <a
                    href='https://app.pluralsight.com/course-player?clipId=d27a005e-3729-47e4-ab5e-5b3f2ea13023'
                    target="_blank">
                    Pluralsight course
                </a>
            </Paragraph>
        </details>
    )
}

export default Compare;