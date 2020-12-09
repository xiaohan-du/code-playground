import React, { useContext, useState } from 'react';
import { ThemeContext, themes } from './theme';
import './Panel.scss';
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
const GlassBox = () => {
    const { glassColor } = useContext(ThemeContext)
    return (
        <div style={{ backgroundColor: glassColor }} className='glass-box'>
            <TextBox />
        </div>
    )
}
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
export default Panel;