import React, { useState } from 'react';
import './GlassTile.scss';
import HoverWindow from './HoverWindow';
const GlassTile = () => {

    let [showHoverWindow, setShowHoverWindow] = useState(false);

    const handleClick = (cases) => {
        switch (cases) {
            case 'on':
                setShowHoverWindow(true);
                break;
            case 'off':
                setShowHoverWindow(false);
                break;
            case 'action':
                alert('hi');
                break;
        }

    }

    return (
        <>
            <div className="tile is-ancestor glasstile" onClick={() => handleClick('on')}>
                <div className="tile is-parent">
                    <article className="tile is-child notification is-success">
                        <div className="content">
                            <p className="title">Use window size hook</p>
                            <p className="subtitle">A hook which determines window size on change
                            </p>
                        </div>
                    </article>
                </div>
            </div>
            {
                showHoverWindow ? <HoverWindow handleClick={handleClick} /> : null
            }
        </>
    )
}

export default GlassTile;