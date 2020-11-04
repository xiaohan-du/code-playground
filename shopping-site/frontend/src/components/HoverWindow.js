import React from 'react';
import './HoverWindow.scss';

const HoverWindow = ({ handleClick }) => {
    return (
        <>
            <div className="tile is-ancestor hover-window center-content">
                <div className="tile is-parent">
                    <article className="tile is-child notification is-info">
                        <div className="content">
                            <p className="title">useWindowSize</p>
                            <p className="subtitle">Wow hook!</p>
                        </div>
                        <div className="field is-grouped">
                            <p className="control">
                                <button className='button' onClick={() => handleClick('action')}>See it in action</button>
                            </p>
                            <p className="control">
                                <button className='button' onClick={() => handleClick('off')}>Close</button>
                            </p>
                        </div>
                    </article>

                </div>
            </div>
        </>
    )
}

export default HoverWindow;