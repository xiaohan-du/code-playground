import React from 'react';
import './Overlay.scss';

const Overlay = ({ overlayElement }) => {
    return (
        <>
            <div className='overlay'>
                {overlayElement}
            </div>
        </>
    )
}

export default Overlay;