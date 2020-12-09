import React from 'react';

export const themes = {
    light: {
        enable: 'dark',
        bgColor: '#ffffff',
        fontColor: '#000000',
        glassColor: 'rgba(0, 0, 0, 0.1)'
    },
    dark: {
        enable: 'light',
        bgColor: 'rgba(0, 0, 0, 0.1)',
        fontColor: '#ffffff',
        glassColor: 'rgba(0, 0, 0, 0.5)'
    }
}

export const ThemeContext = React.createContext (
    themes.light
)