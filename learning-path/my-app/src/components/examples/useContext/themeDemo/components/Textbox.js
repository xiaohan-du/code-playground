import React, { useContext } from 'react';
import '../Panel.scss';
import { ThemeContext } from '../theme';

const TextBox = () => {
    const { fontColor } = useContext(ThemeContext);
    return (
        <div style={{ color: fontColor }} className='text'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
        </div>
    )
}

export default TextBox;