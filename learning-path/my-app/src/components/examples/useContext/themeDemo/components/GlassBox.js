import React, { useContext } from 'react';
import '../Panel.scss';
import { ThemeContext } from '../theme';
import TextBox from '../components/Textbox';

const GlassBox = () => {
    const { glassColor } = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: glassColor }} className='glass-box'>
            <TextBox />
        </div>
    )
}

export default GlassBox;