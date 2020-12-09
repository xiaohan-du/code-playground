import React, { useState } from 'react';
import { ThemeContext, themes } from '../themeClass/theme-context';
import ThemedButton from '../themeClass/theme-button';

const Toolbar = (props) => {
    return (
        <ThemedButton onClick={props.changeTheme}>
            Change Theme
        </ThemedButton>
    )
}

const MyFunctionTheme = () => {
    const [theme, setTheme] = useState(themes.light);
    const toggleTheme = () => {
        setTheme(
            theme === themes.dark ? themes.light : themes.dark
        )
    }
    return (
        <ThemeContext.Provider value={theme}>
            <Toolbar changeTheme={toggleTheme} />
        </ThemeContext.Provider>
    )
}

export default MyFunctionTheme;