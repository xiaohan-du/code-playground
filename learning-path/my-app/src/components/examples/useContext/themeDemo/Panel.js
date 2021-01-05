import React, { useState } from 'react';
import { ThemeContext, themes } from './theme';
import './Panel.scss';
import GlassBox from './components/GlassBox';

const Panel = () => {
    const [theme, setTheme] = useState(themes.light);
    const toggleTheme = () => {
        setTheme (theme === themes.light ? themes.dark : themes.light)
    };
    return (
        <ThemeContext.Provider value={theme}>
            <div style={{ backgroundColor: theme.bgColor }} className='panel'>
                <GlassBox />
            </div>
            <button onClick={toggleTheme}>Enable {theme.enable} theme</button>
        </ThemeContext.Provider>
    )
}

export default Panel;